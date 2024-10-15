import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';

import theme from './theme';
import Service from './components/Service';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Service />}>
      <Route path='00000000-0000-0000-0000-000000000000' element={<Service />} />
      <Route path='00000000-0000-0000-0000-000000000001' element={<Service />} />
    </Route>
  ),
  { basename: '/paslaugos/uzsakymas' },
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
