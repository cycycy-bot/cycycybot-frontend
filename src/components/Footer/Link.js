import React, { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';


const Link = memo(({ to, className, iconName, text, children, ...props }) => {
  // checks the first symbol of incoming link
  // returns true if it's an external link
  // and then renders proper component
  const isExternal = to[0] !== '/';

  return isExternal ? (
    <RouterLink to={to} className={className}>
      <i className={iconName} />
      {text}
    </RouterLink>
  ) : (
    <a href={to} className={className} target="_blank" rel="noopener noreferrer">
      <i className={iconName} />
      {text}
    </a>
  );
});

export default Link;
