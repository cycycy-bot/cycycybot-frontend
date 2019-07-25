import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import Cookies from 'js-cookie';

// components
import QueryComp from '../../../QueryComponent/Query';
import ComingSoon from '../../../ComingSoon';

// queries
import {
  GET_LOGGER,
  ENABLE_LOGGER,
  DISABLE_LOGGER,
} from '../../../../queries';

import './Settings.css';

const Settings = ({ server: { id, name } }) => {
  const token = Cookies.get('token');
  const [isToggleOn, setToggle] = useState(false);
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState('');

  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchChannels = () => {
      console.log('%c[cycycy bot] => ', 'color:green', 'Fetching channels');
      fetch('http://localhost:5000/api/discord/protected/getchannels', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          token,
        }),
      })
        .then(res => res.json())
        .then((channel) => {
          setChannels(channel);
          console.log('%c[cycycy bot] => ', 'color:green', 'Loaded channels: ', channel);
        });
    };
    fetchChannels();
  }, [id]);

  const handleChannelChange = (e) => {
    console.log(e.target.value);
    setSelectedChannel(e.target.value);
  };

  return (
    <div className="server-home-contents">
      <div className="server-settings-container">
        {
          error
            ? <div className="alert-deleted">Please select a channel</div>
            : null
        }
        <div className="settings-header">
          <h1>Settings</h1>
          <h4>Enable or disable logging in your server!</h4>
        </div>
        {
          isToggleOn
            ? (
              <div className="settings-button">
                <Mutation
                  mutation={DISABLE_LOGGER}
                  refetchQueries={() => [{
                    query: GET_LOGGER,
                    variables: {
                      serverID: id,
                    },
                  }]}
                >
                  {(disableLogger) => {
                    const handleDisable = () => {
                      disableLogger({
                        variables: {
                          serverID: id,
                          isEnabled: 'disable',
                        },
                      }).then();
                    };

                    return (
                      <button
                        className="delete"
                        onClick={handleDisable}
                      >
                      Turn off logger
                      </button>
                    );
                  }}
                </Mutation>
              </div>
            )
            : (
              <div className="settings-button">
                <div className="box">
                  <select onChange={handleChannelChange}>
                    <option value={1} disabled>Select Role...</option>
                    {
                          channels.map(channel => (
                            <option
                              key={channel.id}
                              value={channel.id}
                            >
                              {`# ${channel.name}`}
                            </option>
                          ))}
                  </select>
                </div>
                <Mutation
                  mutation={ENABLE_LOGGER}
                  refetchQueries={() => [{
                    query: GET_LOGGER,
                    variables: {
                      serverID: id,
                    },
                  }]}
                >
                  {(enableLogger) => {
                    const handleEnable = () => {
                      if (selectedChannel) {
                        setError(false);
                        return enableLogger({
                          variables: {
                            serverID: id,
                            serverName: name,
                            logChannelID: selectedChannel,
                            isEnabled: 'enable',
                          },
                        });
                      }
                      return setError(true);
                    };

                    return (
                      <button
                        className="update"
                        onClick={handleEnable}
                      >
                        Turn on logger
                      </button>
                    );
                  }}

                </Mutation>
              </div>
            )
        }
        <QueryComp query={GET_LOGGER} variables={{ serverID: id }}>
          {({ logger }) => {
            if (logger.isEnabled === 'enable') {
              setToggle(true);
            } else {
              setToggle(false);
            }

            return (
              <div className="settings-main">
                {
                  isToggleOn
                    ? <ComingSoon />
                    : null
                }
              </div>
            );
          }}
        </QueryComp>
      </div>
    </div>
  );
};

export default Settings;
