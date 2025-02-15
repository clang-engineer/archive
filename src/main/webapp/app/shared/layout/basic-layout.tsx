import React from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from "./navigation";
import MainCard from "../component/MainCard";


const BasicLayout = () => {
  return (
      <>
        <Navigation/>
        <div className="p-3">
          <MainCard>
            <Outlet/>
          </MainCard>
        </div>
      </>
  );
}

export default BasicLayout;