import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './ServerDashboard.css';

const ServerDashboard = ({ server: { name, id, icon } }) => {
  const test = '';

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerDashboard;
