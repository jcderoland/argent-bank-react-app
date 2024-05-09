import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArgentBankLogo from '../img/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/authSlice';

// NavBar component that contains navigation links and logout functionality
const NavBar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const userName = useSelector(state => state.auth.user.userName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logOut());
        navigate('/argent-bank-react-app');
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/argent-bank-react-app">
                <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="navigation-items">
                {!isAuthenticated ? (
                    <Link className="main-nav-item" to="/signin" aria-label="Sign in">
                        <FontAwesomeIcon icon={faUserCircle} />
                        <span>Sign In</span>
                    </Link>
                ) : (
                    <div className='username-logout'>
                        <Link to="/dashboard" aria-label="User profile">
                            <FontAwesomeIcon icon={faUserCircle}/>
                            <span>{userName}</span>
                        </Link>
                        <button className="main-nav-item" onClick={handleLogout} aria-label="Sign out">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span>Sign Out</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
