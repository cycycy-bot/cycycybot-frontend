import React from 'react';

import fdm from './feelsdankman.png';
import './ComingSoon.css';

const ComingSoon = () => (
  <div className="coming-soon">
    <div className="coming-soon-header">
      Site and bot is still on early stages. More Features will be added soon!
    </div>
    <div className="coming-soon-main">
      <img alt="feeldankman" src={fdm} />
      <span className="wrench bounce" role="img" aria-label="emoji"> 🔧 </span>
    </div>

  </div>
);

export default ComingSoon;
