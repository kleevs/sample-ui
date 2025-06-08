import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './tailwind.css';
import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppProvider, Projects, Project, User, Calendar } from '@packages/features';
import CssBaseline from "@mui/material/CssBaseline";
import { red } from '@mui/material/colors';
import { CustomAppLayout, CustomLink } from "@packages/components";
import '@packages/design-system';

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
                <Route path="/" element={<AppProvider><Outlet /></AppProvider>}>
                    <Route path="users">
                        <Route index element={<></>} />
                        <Route path=":id" element={<User PageLayout={CustomAppLayout} />} />
                    </Route>
                    <Route path="projects">
                        <Route index element={<Projects PageLayout={CustomAppLayout} Link={CustomLink} />} />
                        <Route path=":id" element={<Project PageLayout={CustomAppLayout} Link={CustomLink} />} />
                    </Route>
                    <Route path="calendar">
                        <Route index element={<Calendar PageLayout={CustomAppLayout} />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
}

root.render(<App />);