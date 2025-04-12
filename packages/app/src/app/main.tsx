import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from './users/layout';
import Users from './users/page';
import User from './users/[id]/page';
import CssBaseline from "@mui/material/CssBaseline";
import { red } from '@mui/material/colors';

const domNode = document.getElementById('app')!;
const root = createRoot(domNode);
const appTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

function App() {
    return <StrictMode>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="users" element={<Layout><Outlet /></Layout>}>
                        <Route index element={<Users />} />
                        <Route path=":id" element={<User />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
}

root.render(<App />);