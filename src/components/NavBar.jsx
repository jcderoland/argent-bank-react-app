import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArgentBankLogo from '../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/authSlice';

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logOut());
        navigate('/'); 
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
