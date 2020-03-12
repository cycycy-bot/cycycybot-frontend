import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { NavLink } from 'react-router-dom';

import './Dashboard.css';

// components
import Loading from '../Loading';

const Dashboard = ({ match: { path } }) => {
  const [servers, setServers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get('token');

  useEffect(() => {
    const fetchServers = () => {
      console.log('%c[cycycy bot] => ', 'color:green', 'Fetching servers');
      fetch('https://api.cycycy.me/api/discord/protected/getguilds', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
        }),
      })
        .then(res => res.json())
        .then((server) => {
          setServers(server);
          console.log('%c[cycycy bot] => ', 'color:green', 'Loaded servers: ', server);
          setIsLoading(false);
        });
    };
    fetchServers();
  }, [token]);

  const addDefaultSrc = (ev, id, icon) => {
    const e = ev;
    e.target.src = `https://cdn.discordapp.com/icons/${id}/${icon}.png`;
  };

  return (
    <div className="server-container">

      {
        isLoading
          ? <Loading />
          : (
            <>
              <h1 className="select-server">Select Server</h1>
              <div className="servers active">
                {
                servers.map(({
                  id, bot, icon, name,
                }) => (
                  <React.Fragment key={id}>
                    {
                      bot
                        ? (
                          <NavLink to={`${path}/${id}`}>
                            <div className="server">
                              {
                                icon
                                  ? <img onError={ev => addDefaultSrc(ev, id, icon)} className="server-img" src={`https://cdn.discordapp.com/icons/${id}/${icon}.gif`} alt="avatar" />
                                  : <div className="server-img">{name.charAt(0)}</div>
                              }
                              <span>{name}</span>
                            </div>
                          </NavLink>
                        )
                        : (
                          <a href={`https://discordapp.com/oauth2/authorize?scope=bot&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&permissions=1916267615&client_id=530305194131456000&guild_id=${id}`}>
                            <div className="server">
                              {
                                icon
                                  ? <img className="server-img" src={`https://cdn.discordapp.com/icons/${id}/${icon}.png`} alt="avatar" />
                                  : <div className="server-img">{name.charAt(0)}</div>
                              }
                              <span>{name}</span>
                            </div>
                          </a>
                        )
                    }
                  </React.Fragment>
                ))}
              </div>
            </>
          )
      }
    </div>
  );
};

export default Dashboard;
