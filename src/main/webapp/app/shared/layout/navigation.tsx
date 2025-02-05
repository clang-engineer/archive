import React from 'react';
import {NavLink} from 'react-router-dom';

import "./navigation.scss";

function CustomNavLink({ to, children }) {
  return (
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
  );
}
const Navigation = () => {
  return (
      <div className="navigation-wrapper">
        <div className="item">
          <CustomNavLink to="/">Home</CustomNavLink>
        </div>
        <div className="item">
          <CustomNavLink to="/test1">Test 1</CustomNavLink>
        </div>
        <div className="item">
          <CustomNavLink to="/test2">Test 2</CustomNavLink>
        </div>
        <div className="item">
          <CustomNavLink to="/test3">Test 3</CustomNavLink>
        </div>
      </div>
  );
}

export default Navigation;