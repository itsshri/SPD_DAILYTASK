import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'; // Adjust the path as needed
import '../pages/css/Home.css';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const marquee = document.querySelector('.marquee-inner');
    const speed = 1; // Scrolling Speed
    let scrollAmount = 0;
    let isHovered = false;

    // Duplicate the content
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;

    const startScrolling = () => {
      if (!isHovered) {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(startScrolling);
    };

    marquee.addEventListener('mouseover', () => {
      isHovered = true;
    });

    marquee.addEventListener('mouseout', () => {
      isHovered = false;
    });

    startScrolling();
  }, []);

  const handleMouseEnter = (name, rating) => {
    setHoveredCard({ name, rating });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="home">
      
      <div className="container">
      </div>
      <div className="marquee">
        <div className="marquee-inner">
          <img 
            src="src/assets/img/tom_and_jerry.jpg" 
            alt="Image 1" 
            className="card"
            onMouseEnter={() => handleMouseEnter('Tom and Jerry', '4.5/5')}
            onMouseLeave={handleMouseLeave}
          />
          <img 
            src="src/assets/img/shinchan1.jpg" 
            alt="Image 2" 
            className="card"
            // onMouseEnter={() => handleMouseEnter('Shinchan', '4.0/5')}
            onMouseLeave={handleMouseLeave}
          />
          <img 
            src="src/assets/img/iceage.jpg" 
            alt="Image 3" 
            className="card"
            // onMouseEnter={() => handleMouseEnter('Ice Age', '4.2/5')}
            onMouseLeave={handleMouseLeave}
          />
          <img 
            src="src/assets/img/angry_birds.jpg" 
            alt="Image 4" 
            className="card"
            // onMouseEnter={() => handleMouseEnter('Angry Birds', '4.3/5')}
            onMouseLeave={handleMouseLeave}
          />
          <img 
            src="src/assets/img/oggy.jpg" 
            alt="Image 5" 
            className="card"
            // onMouseEnter={() => handleMouseEnter('Oggy', '4.1/5')}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      
      {hoveredCard && (
        <div className="popup">
          <h3>{hoveredCard.name}</h3>
          <p>Rating: {hoveredCard.rating}</p>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Home;
