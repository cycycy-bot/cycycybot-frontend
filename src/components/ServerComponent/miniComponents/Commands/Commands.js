import React from 'react';
import QueryComp from '../../../QueryComponent/Query';

// queries
import { GET_COMMANDS } from '../../../../queries';

import './Commands.css';

const Commands = ({ server: { id, name } }) => (
  <div className="server-home-contents">
    <div className="commands-container">
      <div className="commands-header">
        <h1>Custom Commands</h1>
        <h4>Here, you can add, edit, and delete custom commands for your server!</h4>
      </div>
      <div className="commands-main">
        <div className="commands-add">
          <button className="update">Add</button>
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

export default Commands;
