import React, { useEffect, useState } from 'react';

import Link from './Link';

import './Footer.css';


const Footer = () => {
  const [commit, setCommit] = useState('');
  const [commitURL, setURL] = useState('');
  const [commitDate, setCommitDate] = useState('');

  useEffect(() => {
    const fetchLastCommit = async () => {
      const data = await fetch(
        'https://api.github.com/repos/cycycy-bot/cycycy-bot/commits/master',
        {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const res = await data.json();
      const { sha, html_url: htmlUrl, commit: { committer: { date } } } = res;
      const commitNum = sha.substring(0, 8);

      setCommit(commitNum);
      setURL(htmlUrl);
      setCommitDate(date);
    };
    fetchLastCommit();
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-content">
          <h5>Community</h5>
          <div className="footer-links">
            <Link
              to="https://discordapp.com/invite/jJA7QtK"
              className="footer-link"
              iconName="fab fa-discord footer-link-icon"
              text="Official Discord Server"
            />
            <Link
              to="/contact"
              className="footer-link"
              iconName="fas fa-envelope footer-link-icon"
              text="Contact"
            />

            <Link
              to="https://github.com/cycycy-bot/cycycy-bot/issues"
              className="footer-link"
              iconName="fas fa-exclamation-circle footer-link-icon"
              text="Submit an Issue"
            />
          </div>
        </div>
        <div className="footer-content">
          <h5>Github repo</h5>
          <div className="footer-links">
            <Link
              to="https://github.com/cycycy-bot/cycycy-bot"
              className="footer-link"
              iconName="fab fa-github footer-link-icon"
              text="cycycy bot"
            />
            <Link
              to="https://github.com/galoncyryll"
              className="footer-link"
              iconName="fab fa-github footer-link-icon"
              text="Made by cycycy"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <a href={commitURL} className="footer-commit" target="blank_">
            {/* eslint-disable react/jsx-one-expression-per-line */}
            Branch master, latest commit ({commit}) -- ({commitDate})
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
