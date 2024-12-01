import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import './Loginpage.css';

function Loginpage() {
    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');
    const [email2, setEmail2] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleLogin = (e, userType) => {
        e.preventDefault();
        // Add login logic here, like form validation or API call
        if (userType === 'customer') {
            if (email1 && password1) {
                // Navigate to App4 on successful login
                navigate('/App4');
            }
        } else {
            if (email2 && password2) {
                // Navigate to App4 on successful login
                navigate('/App4');
            }
        }
    };

    return (
        <>
            <div className="header-text">LOGIN HERE...</div>
            <div className="login-container">
                {/* Customer Login Box */}
                <div className="login-box">
                    <h2>CUSTOMER</h2>
                    <form onSubmit={(e) => handleLogin(e, 'customer')}>
                        <label htmlFor="email1">Email:</label>
                        <input
                            type="email"
                            id="email1"
                            value={email1}
                            onChange={(e) => setEmail1(e.target.value)}
                            required
                        />
                        <label htmlFor="password1">Password:</label>
                        <input
                            type="password"
                            id="password1"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>

                {/* Designer Login Box */}
                <div className="login-box">
                    <h2>DESIGNER</h2>
                    <form onSubmit={(e) => handleLogin(e, 'designer')}>
                        <label htmlFor="email2">Email:</label>
                        <input
                            type="email"
                            id="email2"
                            value={email2}
                            onChange={(e) => setEmail2(e.target.value)}
                            required
                        />
                        <label htmlFor="password2">Password:</label>
                        <input
                            type="password"
                            id="password2"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Loginpage;
