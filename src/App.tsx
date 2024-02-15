import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import theme from './theme';
import Service from './components/Service';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/demo-paslaugos/react' element={<Service />} />
  ),
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
