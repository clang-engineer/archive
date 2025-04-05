import React, {StrictMode} from 'react';
import {ThemeProvider} from "app/shared/tailadmin/context/ThemeContext";


import {createRoot} from 'react-dom/client';
import AppComponent from "./app";
import {Provider} from 'react-redux';
import getStore from "./config/store";
import {AppWrapper} from "app/shared/tailadmin/components/common/PageMeta";


const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const store = getStore();

const render = Component =>
    root.render(
        <StrictMode>
          <ThemeProvider>
            <AppWrapper>
              <Provider store={store}>
                <Component/>
              </Provider>
            </AppWrapper>
          </ThemeProvider>
        </StrictMode>
    );

render(AppComponent);