import React, { useState } from 'react';

import './Select.css';

const FontAwesome = require('react-fontawesome');

const Select = ({ title, list }) => {
  const [listOpen, setListOpen] = useState(false);

  console.log(list);
  const toggle = () => {
    console.log(listOpen);
    setListOpen(!listOpen);
  };

  return (
    <div className="dd-wrapper" onClick={toggle} role="button">
      <div className="dd-header">
        <div className="dd-header-title">
          {title}
          {
            listOpen
              ? <FontAwesome name="angle-up" size="2x" />
              : <FontAwesome name="angle-down" size="2x" />
          }
        </div>
      </div>
      {
        listOpen && (
        <ul className="dd-list">
          {list.map(item => (
            <li className="dd-list-item" key={item.id}>
              {' '}
              {item.title}
            </li>
          ))}
        </ul>
        )}
    </div>
  );
};


export default Select;
