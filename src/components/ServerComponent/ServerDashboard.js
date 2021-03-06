import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './ServerDashboard.css';

// components
import ServerHome from './miniComponents/ServerHome/ServerHome';
import Settings from './miniComponents/Settings';
import Mod from './miniComponents/Mod';
import Commands from './miniComponents/Commands';
import Banphrase from './miniComponents/Banphrase';

const ServerDashboard = ({ match: { url }, server, server: { name, id, icon } }) => (
  <div className="server-dashboard">
    <div className="server-header">
      <div className="header-content">
        <div className="header-title">
          {
              icon
                ? <img className="server-img" src={`https://cdn.discordapp.com/icons/${id}/${icon}.png`} alt="avatar" />
                : <div className="server-img">{name.charAt(0)}</div>
            }
          <div className="server-name">
            <h3>{name}</h3>
            <NavLink to="/dashboard">
              <h5>switch server</h5>
            </NavLink>
          </div>
          <div className="headerDivider" />
          <div className="server-header-nav">
            <div className="server-header-menu">
              <ul className="menu-list">
                <li>
                  <NavLink exact activeClassName="active" className="menu-links" to={`${url}`}>Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" className="menu-links" to={`${url}/settings`}>Settings</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="server-home-container">
      <Switch>
        <Route exact path={`${url}`} render={({ ...rest }) => <ServerHome {...rest} />} />
        <Route path={`${url}/settings`} render={({ ...rest }) => <Settings {...rest} server={server} />} />
        <Route path={`${url}/moderator`} render={({ ...rest }) => <Mod {...rest} server={server} />} />
        <Route path={`${url}/commands`} render={({ ...rest }) => <Commands {...rest} server={server} />} />
        <Route path={`${url}/banphrase`} render={({ ...rest }) => <Banphrase {...rest} server={server} />} />
      </Switch>
    </div>
  </div>
);

export default ServerDashboard;
