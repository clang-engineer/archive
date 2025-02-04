import React from 'react';
import AppRoutes from "./routes";
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';


const App = () => <>
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
</>;

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
