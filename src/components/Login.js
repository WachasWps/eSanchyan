import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Assuming you have a firebase.js file
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client'); // Default to 'client'
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      toast.success("Login successful!", {
        position: 'top-center'
      });

      navigate('/');
      // You can redirect or perform other actions here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="kesha">
        <link href="./login-component.css" rel="stylesheet" />
        <div id="login" className="login-component-container">
          <span className="login-component-text"><span>LOGIN</span></span>
          <div className="login-component-container1"></div>
          <div className="login-component-text4">
              <span>Login as:</span>
              <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value="client">Client</option>
                <option value="lawyer">Lawyer</option>
              </select>
            </div>
          <div className="login-component-container2">
            <span className="login-component-text1">
              <span>Username / Email Id</span>
            </span>
            <input
              type="text"
              placeholder="Username / Email Id"
              autoComplete="email"
              className="login-component-textinput input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="login-component-text2"><span>Password</span></span>
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="login-component-textinput1 input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="login-component-text3">
              <span>Forget Password ?</span>
            </span>
            
          </div>
          <div className="login-component-container3">
            <button type="button" className="login-component-button button" onClick={handleLogin}>
              <span>Login</span>
            </button>
          </div>
          <div className="login-component-container4"></div>
          <div className="login-component-container5"></div>
          {error && <div className="error-message">{error}</div>}
          <Link to="/register" className="login-component-navlink">
            <span>Create a new account</span>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
