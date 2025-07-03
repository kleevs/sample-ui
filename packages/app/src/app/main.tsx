import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './tailwind.css';
import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppProvider } from '@packages/features';
import CssBaseline from "@mui/material/CssBaseline";
import { red } from '@mui/material/colors';
import { Calendar, Projects, Project,  User, Users, Link } from '../components';
import { LinkComponentProvider } from '@packages/design-system';

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
        <LinkComponentProvider Link={Link} >        
          <CssBaseline />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<AppProvider><Outlet /></AppProvider>}>
                      <Route path="users">
                          <Route index element={<Users />} />
                          <Route path=":id" Component={() => <User email={useParams().id || ''} />} />
                      </Route>
                      <Route path="projects">
                          <Route index element={<Projects />} />
                          <Route path=":id" Component={() => <Project id={+(useParams().id || '0')} />} />
                      </Route>
                      <Route path="calendar">
                          <Route index element={<Calendar />} />
                      </Route>
                  </Route>
              </Routes>
          </BrowserRouter>
        </LinkComponentProvider>
      </ThemeProvider>
    </StrictMode>
}

root.render(<App />);