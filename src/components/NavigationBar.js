import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import '../styles/NavigationBar.css';

const NavigationBar = ({ setCurrentPage }) => {
  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center nav-container">
        <div className="text-2xl font-bold" style={{ color: '#275D38' }}>UVU STUDY GROUPS</div>
        <div className="flex items-center space-x-4 nav-buttons">
          <button className="nav-button nav-button-green" onClick={() => setCurrentPage('home')}>GET STARTED</button>
          <button className="nav-button nav-button-gray" onClick={() => setCurrentPage('join-study-group')}>ACTIVE GROUPS</button>
          <button className="nav-button nav-button-gray" onClick={() => setCurrentPage('create-study-group')}>CREATE GROUP</button>
          <SearchIcon className="h-6 w-6 search-icon" />
        </div>
      </nav>
      <nav className="p-2 flex justify-between items-center secondary-nav">
        <div className="flex space-x-4 text-sm secondary-nav-links">
          <button className="link-button font-semibold" onClick={() => setCurrentPage('home')}>HOME</button>
          <button className="link-button font-semibold" onClick={() => setCurrentPage('join-study-group')}>JOIN GROUPS</button>
          <button className="link-button font-semibold" onClick={() => setCurrentPage('create-study-group')}>CREATE A GROUP</button>
          <button className="link-button font-semibold" onClick={() => setCurrentPage('login')}>LOGIN</button>
          <button className="link-button font-semibold" onClick={() => setCurrentPage('sign-up')}>SIGN UP</button>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
