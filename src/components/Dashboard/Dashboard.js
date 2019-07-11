import React, { useEffect, useState } from 'react';
import { Mutation, Query } from 'react-apollo';
import Cookies from 'js-cookie';
import auth from '../../auth';

// local queries
import {
  SET_DROP_DOWN,
  GET_DROP_DOWN,
} from '../../localQueries';

const token = Cookies.get('token');


const Dashboard = (props) => {
  const user = auth.getUser();
  const [isLoading, setIsLoading] = useState(false);

  const fetchGuilds = () => {
    fetch('http://localhost:5000/api/discord/getguilds', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
      }),
    })
      .then(res => res.json())
      .then(console.log);
  };

  useEffect(() => {
    fetchGuilds();
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
                  window.location.replace('/');
                });
              }}
              >
                Logout
              </button>
              <Mutation mutation={SET_DROP_DOWN}>
                {setDropDown => (
                  <button onClick={() => {
                    setDropDown({ variables: { isOpen: true } });
                  }}
                  >
                    CLICK
                  </button>
                )}
              </Mutation>
              <Query query={GET_DROP_DOWN}>
                {({ data }) => <p>{data.dropDownOpen.isOpen ? 'true' : 'false'}</p>}
              </Query>
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
