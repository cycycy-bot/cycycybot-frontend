import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './ServerDashboard.css';

import ServerHome from './miniComponents/ServerHome';
import Home from '../Home';

const ServerDashboard = ({ match: { url }, server: { name, id, icon } }) => {
  const [isSelected, setSelected] = useState(false);

  return (
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
                    <NavLink exact activeClassName="active" className="menu-links" to={`${url}`}>home</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" className="menu-links" to={`${url}/settings`}>settings</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="server-home-container">
        <Switch>
          <Route exact path={`${url}`} component={ServerHome} />
          <Route path={`${url}/settings`} component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default ServerDashboard;
