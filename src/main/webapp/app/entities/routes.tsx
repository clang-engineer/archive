import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Point from './point';
import Datasource from './datasource';

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="point/*" element={<Point />} />
        <Route path="datasource/*" element={<Datasource />} />
      </ErrorBoundaryRoutes>
    </div>
  );
};
