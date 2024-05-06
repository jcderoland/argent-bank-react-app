import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import DashboardPage from './pages/DashboardPage';

const Routes = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <RouterRoutes>
            <Route path="/argent-bank-react-app" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/signin" />} />
        </RouterRoutes>
    );
};

export default Routes;
