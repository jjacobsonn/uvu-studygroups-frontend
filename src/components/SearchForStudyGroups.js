import React from 'react';
import { SearchIcon, AdjustmentsIcon } from '@heroicons/react/outline'; // Correctly import icons

import customIcon from '../icons/digital-books-2.png';

const SearchForStudyGroups = () => {
  return (
    <div className="search-section-container py-16">
      <div className="styled-header-container">
        <h2 className="text-center text-green-800 text-4xl rajdhani-bold mb-6">SEARCH FOR STUDY GROUPS</h2>
        <div className="line-with-icon">
          <div className="line" style={{ backgroundColor: '#FFFFFF' }}></div>
          <img src={customIcon} alt="Icon" className="icon" />
          <div className="line" style={{ backgroundColor: '#FFFFFF' }}></div>
        </div>
      </div>

      <div className="text-left mt-12">
        <h3 className="text-green-800 text-3xl rajdhani-bold mb-4">Looking For A Specific Group?</h3>
        <p className="mb-8 lato-regular" style={{ fontFamily: 'Lato, sans-serif', color: 'black' }}>
          Discover the perfect study group tailored to your needs with our versatile search tool. Whether you're on campus, online, or off-campus, our search function offers customizable filters to match your exact preferences. Simply enter your location—from any building on campus to online settings or off-campus spots—and refine your search by selecting from our gender-specific options and available days and times. With just a few clicks, connect with like-minded peers ready to collaborate, learn, and succeed together. Our user-friendly interface ensures that finding your ideal study group is seamless and efficient, helping you make the most of your academic journey.
        </p>
      </div>

      <div className="search-bar-container mx-auto mt-8 flex justify-center items-center">
      <input type="text" placeholder="SEARCH" className="search-input px-4 py-2" style={{ backgroundColor: '#275D38', color: '#FFFFFF!important', outline: 'none' }}/>
        <button className="search-button p-2" style={{ backgroundColor: '#275D38' }}>
          <SearchIcon className="h-6 w-6" style={{ color: '#FFFFFF' }} />
        </button>
        <button className="filter-button p-2 ml-2" style={{ backgroundColor: '#275D38' }}>
          <AdjustmentsIcon className="h-6 w-6" style={{ color: '#FFFFFF' }} />
        </button>
      </div>
    </div>
  );
};

export default SearchForStudyGroups;