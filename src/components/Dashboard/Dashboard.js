import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { NavLink } from 'react-router-dom';

import './Dashboard.css';

// components
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Loading from '../Loading';

const token = Cookies.get('token');

const Dashboard = ({ path }) => {
  const [servers, setServers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServers = () => {
    fetch('http://localhost:5000/api/discord/getguilds', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
      }),
    })
      .then(res => res.json())
      .then((server) => {
        setServers(server);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchServers();
  }, []);

  return (
    <div className="server-container">
      {
        isLoading
          ? <Loading />
          : (
            <div className="servers active">
              {servers.map(server => (
                <React.Fragment key={server.id}>
                  <NavLink to={`${path}/${server.id}`}>
                    <div className="server">
                      {
                        server.icon
                          ? <img className="server-img" src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`} alt="avatar" />
                          : <div className="server-img">{server.name.charAt(0)}</div>
                      }
                      <span>{server.name}</span>
                    </div>
                  </NavLink>
                </React.Fragment>
              ))}
            </div>
          )
      }
    </div>
  );
};

export default Dashboard;
