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
            <Mutation mutation={ADD_COMMAND}>
              {addCmd => (
                <>
                  <button
                    className="update"
                    onClick={showModal}
                  >
                  Add
                  </button>
                  <Modal show={isOpen} close={showModal}>
                    <h2>Add Command</h2>
                    <h5>Command Name</h5>
                    <input type="text" className="modal-input" onChange={e => handleCommandName(e)} value={commandName} />
                    <h5>Command Response</h5>
                  </Modal>
                </>
              )}
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
