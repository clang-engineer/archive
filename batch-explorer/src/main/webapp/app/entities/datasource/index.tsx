import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import Datasource from './datasource';

const DatasourceRoutes = () => (
    <ErrorBoundaryRoutes>
      <Route index element={<Datasource/>}/>
      {/*<Route path="new" element={<PointUpdate />} />*/}
      {/*<Route path=":id">*/}
      {/*  <Route index element={<PointDetail />} />*/}
      {/*  <Route path="edit" element={<PointUpdate />} />*/}
      {/*  <Route path="delete" element={<PointDeleteDialog />} />*/}
      {/*</Route>*/}
    </ErrorBoundaryRoutes>
);

export default DatasourceRoutes;
