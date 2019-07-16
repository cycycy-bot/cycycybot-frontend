import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

// components
import Loading from '../Loading';
import ServerDashboard from './ServerDashboard';

const ServerComponent = ({ match, match: { params: { serverId } } }) => {
  const [server, setServer] = useState({});
  const [hasError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get('token');

  useEffect(() => {
    const fetchServer = () => {
      console.log('%c[cycycy bot] => ', 'color:green', 'Fetching server');
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
          console.log('%c[cycycy bot] => ', 'color:green', 'Fetched server: ', serverRes);
          return setIsLoading(false);
        });
    };
    fetchServer();
  }, [serverId, token]);

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
                  : <ServerDashboard server={server} match={match} />
              }
            </>
          )
      }
    </div>
  );
};

export default ServerComponent;
