import React from 'react';

import "./navigation.scss";

const Navigation = () => {
  return (
      <div className="navigation-wrapper">
        <div className="item">
          <a href="/">Home</a>
        </div>
        <div className="item">
          <a href="/test1">Test 1</a>
        </div>
        <div className="item">
          <a href="/test2">Test 2</a>
        </div>
        <div className="item">
          <a href="/test3">Test 3</a>
        </div>
      </div>
  );
}

export default Navigation;