import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArgentBankLogo from '../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/authSlice';

// NavBar component that contains navigation links and logout functionality
const NavBar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Check if user is authenticated
    const dispatch = useDispatch(); // Allows dispatching actions to redux store
    const navigate = useNavigate(); // Hook for navigation

    const handleLogout = () => {
        dispatch(logOut()); // Dispatch logout action
        navigate('/argent-bank-react-app'); // Redirect to home page after logout
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/argent-bank-react-app">
                <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {!isAuthenticated ? (
                    <Link className="main-nav-item" to="/signin">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </Link>
                ) : (
                    <button className="main-nav-item" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faUserCircle} />
                        Log Out
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
