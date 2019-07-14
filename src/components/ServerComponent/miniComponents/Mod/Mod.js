import React, { useState, useEffect } from 'react';

// components
import Loading from '../../../Loading';
import Select from '../Selector/Select';

import './Mod.css';

const Mod = ({ server: { id } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useState([
    {
      id: 0,
      title: 'New York',
      selected: false,
      key: 'location',
    },
    {
      id: 1,
      title: 'Dublin',
      selected: false,
      key: 'location',
    },
    {
      id: 2,
      title: 'California',
      selected: false,
      key: 'location',
    },
    {
      id: 3,
      title: 'Istanbul',
      selected: false,
      key: 'location',
    },
    {
      id: 4,
      title: 'Izmir',
      selected: false,
      key: 'location',
    },
    {
      id: 5,
      title: 'Oslo',
      selected: false,
      key: 'location',
    },
  ]);

  useEffect(() => {
    console.log('%c[cycycy bot] => ', 'color:green', `Fetching roles from guild: ${id}`);
    const fetchRoles = () => fetch('http://localhost:5000/api/discord/getroles', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
      }),
    })
      .then(res => res.json())
      .then((roles) => {
        console.log('%c[cycycy bot] => ', 'color:green', 'Fetched roles: ', roles);
        setIsLoading(false);
      });

    fetchRoles();
  }, [id]);

  return (
    <div className="server-home-content">
      {
      isLoading
        ? <Loading />
        : (
          <div className="mod-container">
            <Select title="Select location" list={location} />
          </div>
        )
      }
    </div>
  );
};

export default Mod;
