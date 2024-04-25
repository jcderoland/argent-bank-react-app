import React from 'react';
import { Link } from 'react-router-dom';
import ArgentBankLogo from '../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return (
  <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={ArgentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
    {!isAuthenticated && (
        <Link className="main-nav-item" to="/signin">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>)}
    
          </div>
          
  </nav>
);
};

export default NavBar;
