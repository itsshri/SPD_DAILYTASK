import React from 'react';
import '../components/css/Bubble.css';

const Bubble = () => {
  return (
    <div className="container">
      <div className="bubble-wrap">
        {[...Array(90)].map((_, index) => (
          <div key={index} className="bubble"></div>
        ))}
      </div>
    </div>
  );
};

export default Bubble;
