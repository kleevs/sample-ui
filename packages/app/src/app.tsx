import React from "react";
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

const domNode = document.getElementById('app')!;
const root = createRoot(domNode);
const appTheme = createTheme();

function App() {
    return <>
        <CssBaseline />
        <ThemeProvider theme={appTheme}>
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
    </>
}

root.render(<App />);