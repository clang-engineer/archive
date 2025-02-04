import React from 'react';
import {Outlet} from 'react-router-dom';

const Navigation = () => {
  return (
      <div style={{display: 'flex', padding: '10px', borderBottom: '1px solid #ccc'}}>
        <div style={{width: '200px'}}>
          <a href="/">Home</a>
        </div>
        <div style={{width: '200px'}}>
          <a href="/test1">Test 1</a>
        </div>
        <div style={{width: '200px'}}>
          <a href="/test2">Test 2</a>
        </div>
        <div style={{width: '200px'}}>
          <a href="/test3">Test 3</a>
        </div>
      </div>
  );
}

const BasicLayout = () => {
  return (
      <div>
        <Navigation/>
        <Outlet/>
      </div>
  );
}

export default BasicLayout;