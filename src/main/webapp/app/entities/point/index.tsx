import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

const PointRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<div>
      Point
    </div> } />
    {/*<Route path="new" element={<PointUpdate />} />*/}
    {/*<Route path=":id">*/}
    {/*  <Route index element={<PointDetail />} />*/}
    {/*  <Route path="edit" element={<PointUpdate />} />*/}
    {/*  <Route path="delete" element={<PointDeleteDialog />} />*/}
    {/*</Route>*/}
  </ErrorBoundaryRoutes>
);

export default PointRoutes;
