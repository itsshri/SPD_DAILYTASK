import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/css/Navbar.css'; // Ensure this path is correct
import { Menu, LogOut, ScanEye, Bird, LibraryBig, HopOff, Podcast, House, BookOpen, BadgePercent, Sun, MoonStar, Sparkle, ScanFace, NotebookText } from 'lucide-react';
import Loader from './Loader'; // Import the Loader component
import { Album } from 'lucide-react';

const Navbar = ({ onMenuClick, theme, toggleTheme }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Generic navigation handler
  const handleNavigation = (e, path) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 2000); // Adjust the delay as needed
  };

  return (
    <header className="navbar">
      {loading && <Loader />}
      <div className="navbar-logo">
        LittleLooms <HopOff />
      </div>
      <nav className="navbar-navigation">
        <a href="/home" onClick={(e) => handleNavigation(e, '/home')}><House /></a>
        <a href="/podcast" onClick={(e) => handleNavigation(e, '/podcast')}><Podcast /></a>
        <a href="/premium" onClick={(e) => handleNavigation(e, '/premium')}><BookOpen /></a>
        <a href="/userdash" onClick={(e) => handleNavigation(e, '/userdash')}><BadgePercent /></a>
        <a href="/signup" onClick={(e) => handleNavigation(e, '/signup')}><NotebookText /></a>
        <a href="/login" onClick={(e) => handleNavigation(e, '/login')}><ScanFace /></a>
        <a href="/userdash" onClick={(e) => handleNavigation(e, '/userdash')}><LibraryBig /></a>
      </nav>
      <button className="navbar-theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? <MoonStar /> : <Sun />}
      </button>
    </header>
  );
};

export default Navbar;
