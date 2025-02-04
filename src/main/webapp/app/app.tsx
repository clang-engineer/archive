import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes";

import "./app.scss";

const App = () => <>
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
</>;

export default App;