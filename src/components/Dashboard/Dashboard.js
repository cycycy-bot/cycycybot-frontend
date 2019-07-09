import React, { useEffect, useState } from 'react';
import { Mutation } from 'react-apollo';
import Cookies from 'js-cookie';
import auth from '../../auth';

import QueryComp from '../QueryComponent/Query';
import { GET_TEST, SET_TEST } from '../../localQueries';

const token = Cookies.get('token');

const Dashboard = (props) => {
  const { history } = props;
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.isAuthenticated().then((users) => {
      if (users.authenticated) {
        setUser(users.user);
        console.log(users);
        return setIsLoading(false);
      }
      return auth.logout(() => history.push('/'));
    });
  }, [history]);

  return (
    <div>
      {
        isLoading
          ? <div>Loading...</div>
          : (
            <React.Fragment>
              <h1>Dashboard</h1>
              <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="avatar" />
              <div>{user.username}</div>
              <button onClick={() => {
                auth.logout(() => {
                  props.history.push('/');
                });
              }}
              >
                Logout
              </button>
              <QueryComp query={GET_TEST}>
                {({ test }) => <p>{test.isTest}</p>}
              </QueryComp>
              <Mutation mutation={SET_TEST}>
                {setTest => (
                  <button onClick={() => {
                    setTest({ variables: { test: 'testingtest' } });
                  }}
                  >
                    CLICK
                  </button>
                )}
              </Mutation>
              <button onClick={() => {
                fetch('http://localhost:5000/api/discord/getguilds', {
                  method: 'post',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    token,
                  }),
                }).then(res => res.json())
                  .then(console.log);
              }}
              >
test
              </button>
            </React.Fragment>
          )
        }
    </div>
  );
};

export default Dashboard;
