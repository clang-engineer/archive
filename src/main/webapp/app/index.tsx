import React from 'react';
import { createRoot } from 'react-dom/client';
import AppComponent from "./app";
import { Provider } from 'react-redux';
import getStore from "./config/store";


const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const store = getStore();

const render = Component =>
    root.render(
        <Provider store={store}>
          <Component/>
        </Provider>
    );

render(AppComponent);