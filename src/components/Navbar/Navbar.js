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
                        role="button"
                      >
                        <div className="cycycy-bot-icon">
                          {
                            user.avatar
                              ? <img className="avatar-img" src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="avatar" />
                              : <div className="avatar-img">{user.username.charAt(0).toUpperCase()}</div>
                            }
                          <span className="user-tag">
                            {user.username}
                            {' '}
                            #
                            {user.discriminator}
                            <i className="fas fa-angle-down" />
                          </span>
                        </div>
                        <div className={data.dropDownOpen.isOpen ? 'dropdown-content active' : 'dropdown-content'}>
                          <div className="dropdown-item"><NavLink to="/dashboard">Servers</NavLink></div>
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
            : <a href="https://discordapp.com/api/oauth2/authorize?client_id=530305194131456000&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&response_type=code&scope=guilds%20email%20identify">Login through discord</a>
          }
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;
