import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes";

import "./app.scss";
import { LoadingBar } from "react-redux-loading-bar";

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

const App = () => <>
  <BrowserRouter basename={baseHref}>
    <LoadingBar style={{backgroundColor: "blue", height: "5px"}}/>
    <AppRoutes/>
  </BrowserRouter>
</>;

export default App;