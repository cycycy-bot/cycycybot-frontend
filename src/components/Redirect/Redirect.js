import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

import Loading from '../Loading';

const Redirects = (({ location: { search } }) => {
  const [isLoading, setLoading] = useState(true);
  const query = new URLSearchParams(search);
  const code = query.get('code');

  useEffect(() => {
    const fetchToken = () => fetch('http://localhost:5000/api/discord/callback', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code,
      }),
    })
      .then(res => res.json())
      .then((token) => {
        console.log('%c[cycycy bot] => ', 'color:green', 'Logging in...');
        Cookies.set('token', token);
      })
      .then(() => setLoading(false));
    fetchToken();
  }, [code]);

  return (
    <>
      {
        isLoading
          ? <Loading />
          : <Redirect to="/dashboard" />
      }
    </>
  );
});

export default Redirects;
