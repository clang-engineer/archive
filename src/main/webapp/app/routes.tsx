import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BatchSocket from "./modules/batch-socket";
import Home from "./modules/home";
import Loadable from 'react-loadable';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import AppLayout from "app/tailadmin/layout/AppLayout";
import UserProfiles from "app/tailadmin/pages/UserProfiles";
import Blank from "app/tailadmin/pages/Blank";
import NotFound from "app/tailadmin/pages/OtherPage/NotFound";
import BasicTables from "app/tailadmin/pages/Tables/BasicTables";

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
              <Route path="basic-tables" element={<BasicTables />} />
              <Route path="user-profiles" element={<UserProfiles/>}/>
              <Route path="blank" element={<Blank/>}/>
            </Routes>
          }/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </ErrorBoundaryRoutes>
  );
}

export default AppRoutes;
