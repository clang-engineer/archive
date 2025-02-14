import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from "./shared/layout/basic-layout";
import BatchSocket from "./modules/batch-socket";
import Home from "./modules/home";
import Datasource from "./entities/datasource";


const AppRoutes = () => {
  return (
      <Routes>
        <Route element={<BasicLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/batch-socket" element={<BatchSocket/>}/>
          <Route path="/datasource" element={<Datasource/>}/>
          <Route path="/test2" element={<h1>Test 2</h1>}/>
          <Route path="/test3" element={<h1>Test 3</h1>}/>
        </Route>
      </Routes>
  );
}

export default AppRoutes;
