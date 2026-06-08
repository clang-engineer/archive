import React from 'react';
import {Route} from 'react-router-dom';
import BatchSocket from "./modules/batch-socket";
import Home from "./modules/home";
import Loadable from 'react-loadable';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import AppLayout from "app/shared/tailadmin/layout/AppLayout";
import NotFound from "app/shared/tailadmin/pages/OtherPage/NotFound";

const loading = <div>loading ...</div>;

const EntityRoutes = Loadable({
  loader: () => import(/* webpackChunkName: "entity" */ 'app/entities/routes'),
  loading: () => loading,
});

const SampleRoutes = Loadable({
  loader: () => import(/* webpackChunkName: "sample" */ 'app/shared/tailadmin/pages/routes'),
  loading: () => loading,
});

const AppRoutes = () => {
  return (
      <ErrorBoundaryRoutes>
        <Route element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="batch-socket" element={<BatchSocket/>}/>
          <Route path="entities/*" element={<EntityRoutes/>}/>
          <Route path="sample/*" element={<SampleRoutes/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </ErrorBoundaryRoutes>
  );
}

export default AppRoutes;
