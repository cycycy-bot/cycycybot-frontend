import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import auth from '../../auth';

const TEST = gql`
    {
        test @client {
            isTest
        }
    }
`;

const token = Cookies.get('token');

const Dashboard = (props) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    setIsLoading(true);
    const response = await fetch('https://discordapp.com/api/users/@me',
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    const json = await response.json();
    console.log(json);
    setUser(json);
  };

  const fetchServer = async () => {
    const response = await fetch('https://discordapp.com/api/users/@me/guilds',
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    const json = await response.json();
    console.log(json);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
    fetchServer();
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
                      <Query query={TEST}>
                        {({ data, client }) => <p>{data.test.isTest}</p>
                            }
                      </Query>
                    </React.Fragment>
                  )
            }
    </div>
  );
};

export default Dashboard;
