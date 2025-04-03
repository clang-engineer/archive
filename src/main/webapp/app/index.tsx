import React from 'react';
import {StrictMode} from "react";
import {ThemeProvider} from "./tailadmin/context/ThemeContext";


import {createRoot} from 'react-dom/client';
import AppComponent from "./app";
import {Provider} from 'react-redux';
import getStore from "./config/store";


const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const store = getStore();

const render = Component =>
    root.render(
        <StrictMode>
            <ThemeProvider>
                <Provider store={store}>
                    <Component/>
                </Provider>
            </ThemeProvider>
        </StrictMode>
    );

render(AppComponent);