import './styles.css';
import '@mantine/core/styles.css';

import { theme } from '@gridfinity-planner/theme';
import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './app';
import { NavigationProvider } from './navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </MantineProvider>
  </StrictMode>
);
