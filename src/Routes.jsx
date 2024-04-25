import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
  </RouterRoutes>
);

export default Routes;
