import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase'; // Assuming you have a firebase.js file
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";
import { collection, addDoc } from 'firebase/firestore'; // Import collection and addDoc from Firebase Firestore

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationType, setRegistrationType] = useState('client'); // Default to 'client'
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if password and confirmation password match
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
  
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Add user details to Firestore collection
      await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        registrationType: registrationType // Save registration type in Firestore
      });
  
      // Clear error state
      setError(null);
  
      // Display success toast
      toast.success("Registration successful!", {
        position: 'top-center'
      });
  
      // Navigate to login page
      navigate('/');
  
    } catch (error) {
      setError(error.message);
    }

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <div
        id="login"
        className="register-component-container register-component-root-class-name1"
      >
        <span className="register-component-text"><span>REGISTER</span></span>
        <div className="register-component-container1"></div>
        <div className="register-component-container2"></div>
        <span className="register-component-text5">
            <span>Register as:</span>
            <select value={registrationType} onChange={(e) => setRegistrationType(e.target.value)}>
              <option value="client">Client</option>
              <option value="lawyer">Lawyer</option>
            </select>
          </span>
        <div className="register-component-container3">
          <span className="register-component-text1"><span>Name</span></span>
          <input
            type="text"
            placeholder="Name"
            autoComplete="name"
            className="register-component-textinput input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="register-component-text2">
            <span>Email Id</span>
          </span>
          <input
            type="email"
            placeholder="Email Id"
            autoComplete="email"
            className="register-component-textinput1 input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="register-component-text3"><span>Password</span></span>
          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className="register-component-textinput2 input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="register-component-text4">
            <span>Confirm Password</span>
          </span>
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="new-password"
            className="register-component-textinput3 input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          
        </div>
        <div className="register-component-container4"></div>
        <button type="button" className="register-component-button button" onClick={handleSubmit}>
          <span>Register</span>
        </button>
        {error && <div className="error-message">{error}</div>}
        <span className="register-component-text5">
          <Link to="/login"><span>Already have an account ?</span></Link>
        </span>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
