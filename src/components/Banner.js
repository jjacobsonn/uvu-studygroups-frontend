// src/components/Banner.js
import React from 'react';
import backgroundImage from '../images/img-1.jpg';

const Banner = () => {
  return (
    <div className="relative text-center text-white font-bold text-4xl" style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      UVU STUDY GROUPS
    </div>
  );
};

export default Banner;