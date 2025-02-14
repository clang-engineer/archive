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
        <CustomNavItem to="/batch-socket" icon="database">
          Batch Socket
        </CustomNavItem>
        <CustomNavItem to="/datasource" icon="database">
          Datasource
        </CustomNavItem>
        <CustomNavItem to="/test3" icon="database">
          Test 3
        </CustomNavItem>
      </Nav>
  );
}

export default Navigation;