import React, { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// SignInPage handles user login functionality
const SignInPage = () => {
    const [email, setEmail] = useState(''); // State to store email input
    const [password, setPassword] = useState(''); // State to store password input
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(''); // State to store login error message
    const dispatch = useDispatch(); // Allows dispatching actions to redux store
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = (e) => {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        dispatch(loginUser({ email, password }))
            .unwrap()
            .then(() => {
                navigate('/dashboard'); // Navigate to dashboard after successful login
            })
            .catch((error) => {
                setError(error.message || "Login failed"); // Set error if login fails
            });
    };

    return (
        <div>
            <NavBar />
            <main className="main bg-dark">
                <div className="sign-in-container">
                    <section className="sign-in-content">
                    <FontAwesomeIcon icon={faUserCircle}/>
                        <h1>Sign In</h1>
                        <form onSubmit={handleLogin}>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            {error && <div className="error">{error}</div>}
                            <button type="submit" className="sign-in-button">Sign In</button>
                        </form>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SignInPage;
