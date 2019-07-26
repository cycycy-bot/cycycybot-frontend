import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  const [commit, setCommit] = useState('');
  const [commitDate, setCommitDate] = useState('');

  useEffect(() => {
    const fetchLastCommit = () => fetch('https://api.github.com/repos/cycycy-bot/cycycy-bot/commits/master', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then((commitObj) => {
        const {
          sha,
          commit: {
            committer: {
              name,
              date,
            },
          },
        } = commitObj;
        const commitNum = sha.substring(0, 8);
        setCommit(commitNum);
        setCommitter(name);
        setCommitDate(date);
      });
    fetchLastCommit();
  }, []);


  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-content">
          <h5><strong>Community</strong></h5>
          <div className="footer-links">
            <a href="https://discordapp.com/invite/jJA7QtK" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord" />
              {' '}
              Official Discord Server
            </a>
            <p>
              <NavLink to="/contact">
                <i className="fas fa-envelope" />
                {' '}
                Contact
              </NavLink>
            </p>
            <p>
              <a href="https://github.com/cycycy-bot/cycycy-bot/issues" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-exclamation-circle" />
                {' '}
                Submit an Issue
              </a>
            </p>
          </div>
        </div>
        <div className="footer-content">
          <h5><strong>Github repo</strong></h5>
          <div className="footer-links">
            <p>
              <a href="https://github.com/cycycy-bot/cycycy-bot" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
                {' '}
                cycycy bot
              </a>
            </p>
            <p>
              <a href="https://github.com/galoncyryll" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
                {' '}
                Made by cycycy
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          Branch master, latest commit(
          {commit}
          ) --
          (
          {commitDate}
          )
        </div>
      </div>
    </div>
  );
};

export default Footer;
