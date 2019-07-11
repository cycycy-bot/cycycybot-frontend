import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import Loading from '../Loading';

const token = Cookies.get('token');

const ServerComponent = ({ computedMatch }) => {
  const { serverId } = computedMatch.params;
  const [server, setServer] = useState({});
  const [hasError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServer = () => {
    fetch(`http://localhost:5000/api/discord/getguilds/${serverId}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
      }),
    })
      .then(res => res.json())
      .then((serverRes) => {
        const { error } = serverRes;
        if (error) {
          setError(true);
          return setIsLoading(false);
        }
        setServer(serverRes);
        return setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchServer();
  }, []);

  return (
    <div className="server-container">
      {
        isLoading
          ? <Loading />
          : (
            <>
              {
                hasError
                  ? <div>error</div>
                  : <div>{server.name}</div>
              }
            </>
          )
      }
    </div>
  );
};

export default ServerComponent;
