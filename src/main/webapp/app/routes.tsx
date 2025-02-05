import React from 'react';
import {Route, Routes} from 'react-router-dom';
import BasicLayout from "./shared/layout/basic-layout";
import BatchSocket from "./modules/batch-socket";


const AppRoutes = () => {
  return (
      <Routes>
        <Route element={<BasicLayout/>}>
          <Route index element={<h1> Home </h1>}/>
          <Route path="/test1" element={<h1>Test 1</h1>}/>
          <Route path="/test2" element={<h1>Test 2</h1>}/>
          <Route path="/test3" element={<h1>Test 3</h1>}/>
          <Route path="/batch-socket" element={<BatchSocket/>}/>
        </Route>
      </Routes>
  );
}

export default AppRoutes;
