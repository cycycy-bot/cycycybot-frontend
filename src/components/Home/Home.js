import React from 'react';

import './Home.css';

const Home = () => (
  <div className="home-container">
    <div className="home-contents">
      <div className="home-main">
        <h1>cycycy bot is a simple multipurpose, moderating, meme bot for Discord Servers!</h1>
        <a href="https://discordapp.com/oauth2/authorize?client_id=530305194131456000&scope=bot&permissions=8" className="login-button">
          Add to Discord
        </a>
      </div>
    </div>
  </div>
);

export default Home;
