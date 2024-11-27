import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme';
import Service from './components/Service';
import { getServiceFormBaseUrl } from '@rc-ses/mfe-host';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Service />}>
      <Route path='09eec1a3-0674-479b-85fe-b9140879de7b' element={<Service />} />
      <Route path='77ca7f18-07d3-4f4a-8da7-758e4fa7aee1' element={<Service />} />
    </Route>
  ),
  { basename: getServiceFormBaseUrl() },
);

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
