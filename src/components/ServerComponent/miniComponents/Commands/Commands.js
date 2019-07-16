import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import QueryComp from '../../../QueryComponent/Query';

import Modal from '../../../Modal';

// queries
import {
  GET_COMMANDS,
  ADD_COMMAND,
} from '../../../../queries';

import './Commands.css';

const Commands = ({ server: { id, name } }) => {
  const [isOpen, setModal] = useState(false);
  const [commandName, setCommandName] = useState('');
  const [commandRes, setCommandRes] = useState('');
  const [maxChar, setMaxChar] = useState(0);

  // error
  const [isError, setError] = useState(false);

  const showModal = () => {
    setModal(!isOpen);
  };

  const handleCommandName = (e) => {
    setCommandName(e.target.value);
  };

  return (
    <div className="server-home-contents">
      <div className="commands-container">
        <div className="commands-header">
          <h1>Custom Commands</h1>
          <h4>Here, you can add, edit, and delete custom commands for your server!</h4>
        </div>
        <div className="commands-main">
          <div className="commands-add">
            <Mutation
              mutation={ADD_COMMAND}
              refetchQueries={() => [{
                query: GET_COMMANDS,
                variables: {
                  serverID: id,
                },
              }]}
            >
              {(addCmd) => {
                const onAddClick = () => {
                  if (commandName && commandRes) {
                    return addCmd({
                      variables: {
                        serverID: id,
                        serverName: name,
                        commandName,
                        commandRes,
                      },
                    })
                      .then(() => {
                        setError(false);
                        showModal();
                      })
                      .catch(() => setError(true));
                  }
                  return setError(true);
                };

                return (
                  <>
                    <button
                      className="update"
                      onClick={showModal}
                    >
                      Add
                    </button>
                    <Modal
                      show={isOpen}
                      close={showModal}
                      onSaveClick={() => onAddClick()}
                    >
                      {
                      isError
                        ? <div className="alert-deleted">An error has occured.</div>
                        : null
                    }
                      <h2>Add Command</h2>
                      <h5>Command Name</h5>
                      <input
                        type="text"
                        className="modal-input"
                        onChange={e => handleCommandName(e)}
                        value={commandName}
                        required
                      />
                      <h5>Command Response</h5>
                      <div className="textarea-container">
                        <textarea
                          className="modal-textarea"
                          maxLength="1000"
                          onChange={(e) => {
                            setMaxChar(e.target.value.length);
                            setCommandRes(e.target.value);
                          }}
                        />
                        <span>
                        Remaining characters:
                          {' '}
                          {maxChar}
                        /1000
                        </span>
                      </div>
                    </Modal>
                  </>
                );
              }}
            </Mutation>
          </div>
          <QueryComp query={GET_COMMANDS} variables={{ serverID: id }}>
            {({ customcommands }) => customcommands.map(command => (
              <div className="commando" key={command.id}>
                <p>{`!=${command.commandName}`}</p>
                <div className="spacer" />
                <div className="command-buttons">
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              </div>
            ))}
          </QueryComp>
        </div>

      </div>
    </div>
  );
};

export default Commands;
