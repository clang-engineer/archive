import React from 'react';

import {Nav} from "tabler-react";

const Navigation = () => {
  return (
      <Nav>
        <Nav.Item to="/" icon="home">
          Home
        </Nav.Item>
        <Nav.Item to="/test1" icon="home">
          Test 1
        </Nav.Item>
        <Nav.Item to="/test2" icon="home">
          Test 2
        </Nav.Item>
        <Nav.Item to="/test3" icon="home">
          Test 3
        </Nav.Item>
      </Nav>
  );
}

export default Navigation;