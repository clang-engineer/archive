import React from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from "./navigation";


const BasicLayout = () => {
  return (
      <>
        <Navigation/>
        <div className="p-3">
          <Outlet/>
        </div>
      </>
  );
}

export default BasicLayout;