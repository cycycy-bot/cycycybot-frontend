import React from 'react';
import { NavLink } from 'react-router-dom';

import './ServerHome.css';
import nam from './img/nam.png';

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
      <div className="card">
        <div className="card-title" />
      </div>
      <div className="card">
        <div className="card-title" />
      </div>
    </div>
  </>
);

export default ServerHome;
