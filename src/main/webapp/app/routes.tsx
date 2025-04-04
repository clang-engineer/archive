import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BatchSocket from "./modules/batch-socket";
import Home from "./modules/home";
import Loadable from 'react-loadable';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import PageNotFound from "app/shared/error/page-not-found";
import AppLayout from "app/tailadmin/layout/AppLayout";
import UserProfiles from "app/tailadmin/pages/UserProfiles";
import Blank from "app/tailadmin/pages/Blank";

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
          <Route path="entities/*" element={<EntityRoutes/>}/>
          <Route path="tailwind/*" element={
            <Routes>
              <Route path="user-profiles" element={<UserProfiles/>}/>
              <Route path="blank" element={<Blank/>}/>
            </Routes>
          }/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </ErrorBoundaryRoutes>
  );
}

export default AppRoutes;
