import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../admin/Adminlogin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adminlogin = () => {
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

    // Navigate to Admindash.jsx
    setTimeout(() => {
      navigate('/admindash'); // Ensure this matches your routing configuration
    }, 2000); // Delay to match toast duration
  };

  return (
    <div className="unique-login-background">
      <video
        className="unique-login-background__video"
        src="/files/video-bg.mp4"
        autoPlay
        muted
        loop
      ></video>
      <main className="unique-login-main">
        <div className="unique-login-card__image-container">
          <div className="unique-login-slide-images">
            <img
              className="unique-login-slide"
              src="https://i.pinimg.com/564x/54/bb/96/54bb962a32c1093f999cb45d89c9dc0e.jpg"
              alt="Card Image"
            />
            <img
              className="unique-login-slide"
              src="https://i.pinimg.com/564x/14/13/38/1413387c9de2609825b61f0719f024d4.jpg"
              alt="Card Image"
            />
            <img
              className="unique-login-slide"
              src="https://i.pinimg.com/564x/6a/46/40/6a4640fd2df70f1e76f388175ffb0349.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <form className="unique-login-form" action="#" autoComplete="off" onSubmit={handleSubmit}>
          <h2 className="unique-login-heading">Admin Log-In</h2>
          <div className="unique-login-input-group">
            <i className="far fa-user fa-lg unique-login-icon"></i>
            {/* <input
              type="text"
              name="username"
              id="unique-login-username"
              placeholder="Username"
              required
            /> */}
          </div>
          <div className="unique-login-input-group">
            <i className="far fa-envelope fa-lg unique-login-icon"></i>
            <input
              type="email"
              name="email"
              id="unique-login-email"
              placeholder="Email"
              required
            />
          </div>
          <div className="unique-login-input-group">
            <i className="fas fa-unlock-alt fa-lg unique-login-icon"></i>
            <input
              type="password"
              name="password"
              id="unique-login-password"
              placeholder="Password"
              required
            />
          </div>
          <div className="unique-login-remember">
            <input type="checkbox" name="remember" id="unique-login-remember" />
            <label htmlFor="unique-login-remember">
              Remember me
            </label>
          </div>
          <button type="submit" className="unique-login-button">Log In</button>
          <hr className="unique-login-divider" />
          <center>
            <p className="unique-login-creator">Made with <span>❤</span> by Shri</p>
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

export default Adminlogin;
