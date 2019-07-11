import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Mutation, Query } from 'react-apollo';
import auth from '../../auth';

import './Navbar.css';

// queries
import {
  GET_DROP_DOWN,
  SET_DROP_DOWN,
} from '../../localQueries';

const Navbar = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.authenticate().then((res) => {
      setUser(res.user);
    });
  }, []);

  const logout = () => {
    auth.logout(() => {
      window.location.replace('/');
    });
  };

  return (
    <header id="nav-bar" className="nav-container">
      <nav className="toolbar">
        <div className="toolbar-nav">
          <div className="cycycy-bot-icon"><NavLink to="/">cbot icon</NavLink></div>
          <div className="spacer" />
          <div className="toolbar-nav-items">
            {
          user !== undefined
            ? (
              <Query query={GET_DROP_DOWN}>
                {({ data }) => (
                  <Mutation mutation={SET_DROP_DOWN}>
                    {setDropDown => (
                      <div
                        onClick={() => {
                          setDropDown({ variables: { isOpen: !data.dropDownOpen.isOpen } });
                        }}
                        className="toolbar-dropdown"
                      >
                        <div className="cycycy-bot-icon">
                          <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="avatar" />
                          <span className="user-tag">
                            {user.username}
                            {' '}
                            #
                            {user.discriminator}
                            <i className="fas fa-angle-down" />
                          </span>
                        </div>
                        <div className={data.dropDownOpen.isOpen ? 'dropdown-content active' : 'dropdown-content'}>
                          <div className="dropdown-item"><NavLink to="/dashboard">servers</NavLink></div>
                          <div className="dropdown-item">
                            <button
                              onClick={logout}
                            >
                            Logout
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Mutation>
                )}
              </Query>
            )
            : <a href="https://discordapp.com/api/oauth2/authorize?client_id=530305194131456000&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify%20email%20guilds">Login through discord</a>
          }
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;
