import React from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from "./navigation";


const BasicLayout = () => {
  return (
      <div>
        <Navigation/>
        <Outlet/>
      </div>
  );
}

export default BasicLayout;