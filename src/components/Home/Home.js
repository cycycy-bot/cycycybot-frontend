import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';

import './Home.css';

const Home = () => {
  const [guildLength, setGuildLength] = useState(0);

  useState(() => {
    const getGuildLength = () => fetch('https://api.cycycy.me/api/discord/getguildlength', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then((length) => {
        setGuildLength(length);
      })
      .catch(console.log);
    getGuildLength();
  }, []);

  return (
    <div className="home-container">
      <h1 color="red">Website API under reconstruction!!!</h1>
      <div className="home-contents">
        <div className="home-main">
          <div id="container-1648017ac06b3337e878fad7c947534b" style={{ display: 'none' }} />
          <h1>cycycy bot is a simple multipurpose, moderating, meme bot for Discord Servers!</h1>

          <br />
          <h4>
            currently listening on
            {' '}
            <CountUp
              end={guildLength}
              duration={1}
              className="counter"
            />
            {' '}
            servers
          </h4>
          <br />
          <div>
            <a href="https://discordapp.com/oauth2/authorize?client_id=530305194131456000&scope=bot&permissions=8" className="login-button">
            Add to Discord
            </a>
            <NavLink className="login-button" to="/features">
            Features
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
