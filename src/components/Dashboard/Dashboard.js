import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Mutation } from 'react-apollo';
import auth from '../../auth';

import QueryComp from '../QueryComponent/Query';
import { GET_TEST, SET_TEST } from '../../localQueries';

const token = Cookies.get('token');

const Dashboard = (props) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = fetch('https://discordapp.com/api/users/@me',
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.json());
    // .then((json) => {
    //   if (json.code === 0) {
    //     return auth.logout(() => props.history.push('/'));
    //   }
    //   return setUser(json);
    // })
    // .catch(err => console.log(err));


  const fetchServer = fetch('https://discordapp.com/api/users/@me/guilds',
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  // .then(res => setIsLoading(false));

  useEffect(() => {
    Promise.all([fetchUser, fetchServer])
      .then(([xy, server]) => {
        if (xy.code === 0) {
          return auth.logout(() => props.history.push('/'));
        }
        setUser(xy);
        return setIsLoading(false);
      });
  }, []);

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
            </React.Fragment>
          )
        }
    </div>
  );
};

export default Dashboard;
