import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import DashboardPage from './pages/DashboardPage';

// Routes component to handle different paths
const Routes = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Accessing authentication state

    return (
        <RouterRoutes>
            <Route path="/argent-bank-react-app" element={<HomePage />} /> {/* Public route */}
            <Route path="/signin" element={<SignInPage />} /> {/* Public route */}
            <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/signin" />} /> {/* Private route */}
        </RouterRoutes>
    );
};

export default Routes;
