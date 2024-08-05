import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import '../pages/css/Signup.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display the toast notification
    toast.success('Registered successfully!', {
      position: "bottom-right",
      autoClose: 2000,
      className: 'toast-custom',
      bodyClassName: 'toast-custom-body',
      progressClassName: 'toast-custom-progress',
    });

    // Navigate to Admindash.jsx
    setTimeout(() => {
      navigate('/admindash'); // Update with your actual route
    }, 2000); // Delay to match toast duration
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
        <form className="signup-form" action="#" autoComplete="off" onSubmit={handleSubmit}>
          <h2 className="signup-heading">Register</h2>
          <div className="signup-input-group">
            <i className="far fa-user fa-lg signup-icon"></i>
            <input
              type="text"
              name="name"
              id="signup-name"
              placeholder="Name"
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
              required
            />
          </div>
          <div className="signup-input-group">
            <i className="fas fa-globe fa-lg signup-icon"></i>
            <select
              name="country"
              id="signup-country"
              className="signup-select"
              required
            >
              <option value="" disabled selected>Select Country</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              <option value="india">India</option>
              <option value="china">China</option>
              <option value="japan">Japan</option>
              <option value="brazil">Brazil</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="signup-terms">
            <input
              type="checkbox"
              name="agree"
              id="signup-agree"
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
