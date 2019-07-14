import React, { useState, useEffect } from 'react';

// components
import Loading from '../../../Loading';

import './Mod.css';

const Mod = ({ server: { id } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState([]);

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
      .then((resRoles) => {
        console.log('%c[cycycy bot] => ', 'color:green', 'Fetched roles: ', resRoles);
        setRoles(resRoles);
        setIsLoading(false);
      });

    fetchRoles();
  }, [id]);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="server-home-contents">
      {
      isLoading
        ? <Loading />
        : (
          <div className="mod-container">
            <div className="mod-header">
              <h1>edit moderator</h1>

            </div>
            <div className="box">
              <select onChange={handleChange}>
                {
                  roles.map(role => (
                    <option value={role.id} key={role.id} style={{ color: `#${role.color.toString(16)}` }}>{`#${role.name}`}</option>
                  ))
                }
              </select>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Mod;
