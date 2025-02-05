import React from 'react';

import {useLocation, useNavigate} from 'react-router-dom';

import {Nav} from "tabler-react";

const CustomNavItem = ({to, children, icon}: any) => {
  const location = useLocation();
  const navigation = useNavigate();
  return (
      <Nav.Item icon={icon} active={location.pathname === to}
                onClick={() => {
                  navigation(to);
                }}>
        {children}
      </Nav.Item>
  );
};
const Navigation = () => {
  return (
      <Nav className="p-2">
        <CustomNavItem to="/" icon="home">
          Home
        </CustomNavItem>
        <CustomNavItem to="/test1" icon="home">
          Test 1
        </CustomNavItem>
        <CustomNavItem to="/test2" icon="home">
          Test 2
        </CustomNavItem>
        <CustomNavItem to="/test3" icon="home">
          Test 3
        </CustomNavItem>
      </Nav>
  );
}

export default Navigation;