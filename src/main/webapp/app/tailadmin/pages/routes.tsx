import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import BasicTables from "app/tailadmin/pages/Tables/BasicTables";
import UserProfiles from "app/tailadmin/pages/UserProfiles";
import Blank from "app/tailadmin/pages/Blank";
import FormElements from "app/tailadmin/pages/Forms/FormElements";
import Dashboard from "app/tailadmin/pages/Dashboard";

export default () => {
  return (
      <div>
        <ErrorBoundaryRoutes>
          {/* prettier-ignore */}
          <Route path="user-profiles" element={<UserProfiles/>}/>
          <Route path="basic-tables" element={<BasicTables/>}/>
          <Route path="form-elements" element={<FormElements/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="blank" element={<Blank/>}/>
        </ErrorBoundaryRoutes>
      </div>
  );
};
