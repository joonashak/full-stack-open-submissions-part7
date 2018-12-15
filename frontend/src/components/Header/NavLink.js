import React from 'react';
import { NavLink } from 'react-router-dom';


export default ({
  brand,
  to,
  children,
  ...rest
}) => (
  <NavLink to={to} activeClassName="active" className={brand ? 'navbar-brand' : 'nav-link'} {...rest}>
    { children }
  </NavLink>
);
