import React from 'react';
import { Route } from 'react-router-dom';
import BasicLayout from "./shared/layout/basic-layout";
import BatchSocket from "./modules/batch-socket";
import Home from "./modules/home";
import Loadable from 'react-loadable';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import PageNotFound from "app/shared/error/page-not-found";
import AppLayout from "app/tailadmin/layout/AppLayout";

const loading = <div>loading ...</div>;

const EntityRoutes = Loadable({
  loader: () => import(/* webpackChunkName: "entity" */ 'app/entities/routes'),
  loading: () => loading,
});

const AppRoutes = () => {
  return (
      <ErrorBoundaryRoutes>
        <Route element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/batch-socket" element={<BatchSocket/>}/>
          {/*<Route path="/datasource" element={<Datasource/>}/>*/}
          <Route path="/test2" element={<h1>Test 2</h1>}/>
          <Route path="/test3" element={<h1>Test 3</h1>}/>
          <Route path="entities/*" element={<EntityRoutes/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </ErrorBoundaryRoutes>
  );
}

export default AppRoutes;
