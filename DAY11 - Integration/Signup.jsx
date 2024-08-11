import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../pages/css/Signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      toast.error('Please agree to the terms and conditions.', {
        position: "bottom-right",
        autoClose: 2000,
        className: 'toast-custom',
        bodyClassName: 'toast-custom-body',
        progressClassName: 'toast-custom-progress',
      });
      return;
    }

    try {
      // Replace this URL with your actual backend URL
      const response = await axios.post('http://localhost:7777/api/auth/register', {
        name,
        email,
        password,
        phone
      });

      toast.success('Registered successfully!', {
        position: "bottom-right",
        autoClose: 2000,
        className: 'toast-custom',
        bodyClassName: 'toast-custom-body',
        progressClassName: 'toast-custom-progress',
      });

      setTimeout(() => {
        navigate('/login'); // Change to the correct path for Login.jsx if needed
      }, 2000);

    } catch (error) {
      // Log the error to inspect it
      console.error('Registration error:', error);

      // Show detailed error message if available
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      
      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 2000,
        className: 'toast-custom',
        bodyClassName: 'toast-custom-body',
        progressClassName: 'toast-custom-progress',
      });
    }
  };

  return (
    <div className="signup-background">
      <video
        className="signup-background__video"
        src="/files/video-bg.mp4"
        autoPlay
        muted
        loop
      ></video>
      <main className="signup-main">
        <div className="signup-card__image-container">
          <div className="signup-slide-images">
            <img
              className="signup-slide"
              src="src/assets/img/log.jpg"
              alt="Card Image"
            />
            <img
              className="signup-slide"
              src="src/assets/img/boy.jpg"
              alt="Card Image"
            />
            <img
              className="signup-slide"
              src="src/assets/img/school boy.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
          <h2 className="signup-heading">Register</h2>
          <div className="signup-input-group">
            <i className="far fa-user fa-lg signup-icon"></i>
            <input
              type="text"
              name="name"
              id="signup-name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="signup-input-group">
            <i className="far fa-envelope fa-lg signup-icon"></i>
            <input
              type="email"
              name="email"
              id="signup-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup-input-group">
            <i className="fas fa-unlock-alt fa-lg signup-icon"></i>
            <input
              type="password"
              name="password"
              id="signup-password"
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="signup-input-group">
            <i className="fas fa-phone fa-lg signup-icon"></i>
            <input
              type="tel"
              name="phone"
              id="signup-phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="signup-terms">
            <input
              type="checkbox"
              name="agree"
              id="signup-agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              required
            />
            <label htmlFor="signup-agree">
              Agree to terms and conditions
            </label>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          <hr className="signup-divider" />
          <Link to="/login" className="signup-login-button">Already have an account? Log In</Link>
          <center>
            <p className="signup-creator">Made with <span>❤</span> by Shri</p>
          </center>
        </form>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
    </div>
  );
};

export default Signup;
