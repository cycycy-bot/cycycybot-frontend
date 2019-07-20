import React from 'react';
import { NavLink } from 'react-router-dom';

import './ServerHome.css';
import nam from './img/nam.png';
import cmonBruh from './img/cmonBruh.jpg';

const ServerHome = ({ match: { path } }) => (
  <>
    <div className="server-home-contents">
      <NavLink className="card" to={`${path}/moderator`}>
        <div className="card-title">
          <h1>Moderator</h1>
        </div>
        <div className="card-main">
          <div className="card-icon">
            <span className="mod-hammer" role="img" aria-label="emoji">
                  🔨
            </span>
            <img className="mod-icon" src={nam} alt="nam" />
          </div>
          <div className="card-desc">
            <span>
                  Sets the mod role to be able to use mod commands.
              {' '}
              <strong>IMPORTANT!</strong>
            </span>
          </div>
        </div>
      </NavLink>
      <NavLink className="card" to={`${path}/commands`}>
        <div className="card-title">
          <h1>Commands</h1>
        </div>
        <div className="card-main">
          <div className="card-icon">
            <span className="mod-hammer" role="img" aria-label="emoji">
              ❗ 🤔
            </span>
          </div>
          <div className="card-desc">
            <span>
              Add/Edit/Delete server commands
            </span>
          </div>
        </div>
      </NavLink>
      <NavLink className="card" to={`${path}/banphrase`}>
        <div className="card-title">
          <h1>Banphrases</h1>
        </div>
        <div className="card-main">
          <div className="card-icon">
            <span className="mod-hammer" role="img" aria-label="emoji">
              ☝️
            </span>
            <img className="mod-icon" src={cmonBruh} alt="cmonBruh" />
          </div>
          <div className="card-desc">
            <span>
              Add some moderation in your server!
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  </>
);

export default ServerHome;
