import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import QueryComp from '../../../QueryComponent/Query';

import Modal from '../../../Modal';

// queries
import {
  GET_COMMANDS,
  ADD_COMMAND,
  DEL_COMMAND,
} from '../../../../queries';

import './Commands.css';

const Commands = ({ server: { id, name } }) => {
  const [maxChar, setMaxChar] = useState(0);

  // error
  const [isError, setError] = useState(false);

  // modals
  const [isOpen, setModal] = useState(false);
  const [isCommandOpen, setCommandModal] = useState({});
  const [isDelOpen, setDelOpen] = useState({});

  // modal inputs
  const [commandName, setCommandName] = useState('');
  const [commandRes, setCommandRes] = useState('');

  const showModal = () => {
    setModal(!isOpen);
  };

  const showCommandModal = (cmdId) => {
    setCommandModal({
      [cmdId]: true,
    });
  };

  const closeCommandModal = (cmdId) => {
    setCommandModal({
      [cmdId]: false,
    });
  };

  const showDelModal = (cmdId) => {
    setDelOpen({
      [cmdId]: true,
    });
  };

  const closeDelModal = (cmdId) => {
    setDelOpen({
      [cmdId]: false,
    });
  };

  const handleCommandName = (e) => {
    setCommandName(e.target.value);
  };

  const handleCommandRes = (e) => {
    setCommandRes(e.target.value);
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
                      classN="update"
                      btnName="Save"
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
                            handleCommandRes(e);
                          }}
                          value={commandRes}
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
                  {/* EDIT MODAL */}
                  <Mutation
                    mutation={DEL_COMMAND}
                    refetchQueries={() => [{
                      query: GET_COMMANDS,
                      variables: {
                        serverID: id,
                      },
                    }]}
                  >
                    {(editCmd) => {
                      const onEditCmd = () => {
                        if (commandRes) {
                          editCmd({
                            variables: {
                              serverID: id,
                              commandName: command.commandName,
                            },
                          })
                            .then(() => {
                              showModal();
                            });
                        }
                      };

                      return (
                        <>
                          <Modal
                            show={isCommandOpen[command.id]}
                            close={closeCommandModal}
                            classN="update"
                            btnName="Save"
                            onSaveClick={() => onEditCmd()}
                          >
                            <h2>{`!=${command.commandName}`}</h2>
                            <h5>Edit Command Response</h5>
                            <div className="textarea-container">
                              <textarea
                                className="modal-textarea"
                                maxLength="1000"
                                onChange={(e) => {
                                  setMaxChar(e.target.value.length);
                                  setCommandRes(e.target.value);
                                }}
                                value={commandRes}
                              />
                              <span>
                                Remaining characters:
                                {' '}
                                {maxChar}
                                /1000
                              </span>
                            </div>
                          </Modal>
                          <button className="edit" onClick={() => showCommandModal(command.id)}>Edit</button>
                        </>
                      );
                    }}
                  </Mutation>

                  <Mutation
                    mutation={DEL_COMMAND}
                    refetchQueries={() => [{
                      query: GET_COMMANDS,
                      variables: {
                        serverID: id,
                      },
                    }]}
                  >
                    {(delCmd) => {
                      const onDelCmd = () => {
                        delCmd({
                          variables: {
                            serverID: id,
                            commandName: command.commandName,
                          },
                        });
                      };
                      return (
                        <>
                          <button
                            className="delete"
                            onClick={() => showDelModal(command.id)}
                          >
                            Delete
                          </button>
                          {/* DELETE MODAL */}
                          <Modal
                            show={isDelOpen[command.id]}
                            close={closeDelModal}
                            classN="delete"
                            btnName="Delete"
                            onSaveClick={onDelCmd}
                          >
                            <h3>{command.commandName}</h3>
                            Delete this command?
                          </Modal>
                        </>
                      );
                    }}

                  </Mutation>

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
