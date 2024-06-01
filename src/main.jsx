import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ROUTES } from './routes/Routes';

import { Home } from './pages/home/Home';
import { Details } from './pages/details/Details';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path={ROUTES.index} />
        <Route element={<Details/>} path={ROUTES.details + "/:id"} />
      </Routes>
    </BrowserRouter>
)
