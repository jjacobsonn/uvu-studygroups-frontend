import React from 'react';
import { SearchIcon } from '@heroicons/react/outline'; // Ensure you have heroicons installed
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center nav-container">
        <div className="text-2xl font-bold" style={{ color: '#275D38' }}>UVU STUDY GROUPS</div>
        <div className="flex items-center space-x-4 nav-buttons">
          <button className="btn-green">GET STARTED</button>
          <button className="btn-gray">ACTIVE GROUPS</button>
          <button className="btn-gray">CREATE GROUP</button>
          <SearchIcon className="h-6 w-6 search-icon" />
        </div>
      </nav>
      <nav className="p-2 flex justify-between items-center secondary-nav">
        <div className="flex space-x-4 text-sm secondary-nav-links">
          <button className="link-button font-semibold">HOME</button>
          <button className="link-button font-semibold">JOIN GROUPS</button>
          <button className="link-button font-semibold">CREATE A GROUP</button>
          <button className="link-button font-semibold">LOGIN</button>
          <button className="link-button font-semibold">SIGN UP</button>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;