import React from 'react';

import './Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-content">
      <h1>Contact</h1>
      <p>
        Hi! i
        {'\''}
        m cycycy! The current creator and maintainer of cycycy bot.
      </p>
      <p>
        If you have any questions about the bot, you can contact me through my
        {' '}
        <a href="https://discordapp.com/invite/jJA7QtK" target="_blank" rel="noopener noreferrer">Discord Server!</a>
      </p>
      <p>
        cycycy bot is open source. Feel free to check out the code and suggest/comment in the
        {' '}
        <a href="https://github.com/cycycy-bot/cycycy-bot" target="_blank" rel="noopener noreferrer">github repo.</a>
      </p>
    </div>
  </div>
);

export default Contact;
