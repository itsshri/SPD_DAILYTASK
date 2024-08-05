import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import '../pages/css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display the toast notification
    toast.success('Logged in successfully!', {
      position: "bottom-right",
      autoClose: 2000,
      className: 'toast-custom',
      bodyClassName: 'toast-custom-body',
      progressClassName: 'toast-custom-progress',
    });

    // Navigate to Userdash.jsx
    setTimeout(() => {
      navigate('/userdash'); // Update with your actual route
    }, 2000); // Delay to match toast duration
  };

  const handleAdminLoginClick = () => {
    navigate('/adminlogin'); // Update with your actual route
  };

  return (
    <div className="login-background">
      <video
        className="login-background__video"
        src="/files/video-bg.mp4"
        autoPlay
        muted
        loop
      ></video>
      <main className="login-main">
        <div className="login-card__image-container">
          <div className="login-slide-images">
            <img
              className="login-slide"
              src="src/assets/img/log.jpg"
              alt="Card Image"
            />
            <img
              className="login-slide"
              src="src/assets/img/school boy.jpg"
              alt="Card Image"
            />
            <img
              className="login-slide"
              src="src/assets/img/boy.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <form className="login-form" action="#" autoComplete="off" onSubmit={handleSubmit}>
          <h2 className="login-heading">User-Log In</h2>
          <div className="login-input-group">
            <i className="far fa-user fa-lg login-icon"></i>
          </div>
          <div className="login-input-group">
            <i className="far fa-envelope fa-lg login-icon"></i>
            <input
              type="email"
              name="email"
              id="login-email"
              placeholder="Email"
              required
            />
          </div>
          <div className="login-input-group">
            <i className="fas fa-unlock-alt fa-lg login-icon"></i>
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="Password"
              required
            />
          </div>
          <div className="login-remember">
            <input type="checkbox" name="remember" id="login-remember" />
            <label htmlFor="login-remember">
              Remember me
            </label>
          </div>
          <button type="submit" className="login-button">Log In</button>
          <hr className="login-divider" />
          <Link to="/signup" className="login-signup-button">Don't have an account? Sign Up</Link> {/* Updated link */}
          <center>
            <p className="login-creator">Made with <span>❤</span> by Shri</p>
            <br></br>
            <button type="button" className="login-admin-button" onClick={handleAdminLoginClick}>
              Admin Login
            </button>
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

export default Login;
