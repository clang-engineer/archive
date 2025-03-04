import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes";

import "./app.scss";
import { LoadingBar } from "react-redux-loading-bar";

const App = () => <>
  <BrowserRouter>
    <LoadingBar style={{backgroundColor: "blue", height: "5px"}}/>
    <AppRoutes/>
  </BrowserRouter>
</>;

export default App;