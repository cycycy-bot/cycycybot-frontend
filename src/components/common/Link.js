import React, { memo } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';


const Link = memo(({ to, className, iconName, children, ...props }) => {
  // checks the first symbol of incoming link
  // returns true if it's an external link
  // and then renders proper component
  const isExternal = to[0] !== '/';

  return isExternal ? (
    <a href={to} className={className} target="_blank" rel="noopener noreferrer">
      <i className={iconName} />
      {children}
    </a>
  ) : (
    <RouterLink to={to} className={className} {...props}>
      <i className={iconName} />
      {children}
    </RouterLink>
  );
});

export default Link;
