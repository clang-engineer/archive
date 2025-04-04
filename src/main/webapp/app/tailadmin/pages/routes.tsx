import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import BasicTables from "app/tailadmin/pages/Tables/BasicTables";
import UserProfiles from "app/tailadmin/pages/UserProfiles";
import Blank from "app/tailadmin/pages/Blank";

export default () => {
  return (
      <div>
        <ErrorBoundaryRoutes>
          {/* prettier-ignore */}
          <Route path="basic-tables" element={<BasicTables/>}/>
          <Route path="user-profiles" element={<UserProfiles/>}/>
          <Route path="blank" element={<Blank/>}/>
        </ErrorBoundaryRoutes>
      </div>
  );
};
