import React from 'react';
import { SearchIcon } from '@heroicons/react/outline'; // Ensure you have heroicons installed

const NavigationBar = () => {
  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="text-2xl font-bold" style={{ color: '#275D38' }}>UVU STUDY GROUPS</div>
        <div className="flex items-center space-x-4">
          <button className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: '#275D38', color: '#FFFFFF' }}>
            GET STARTED
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-green-900 font-semibold py-2 px-4 rounded" style={{ backgroundColor: '#DDDDDD', color: '#275D38', borderColor: '#275D38' }}>
            ACTIVE GROUPS
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-green-900 font-semibold py-2 px-4 rounded" style={{ backgroundColor: '#DDDDDD', color: '#275D38', borderColor: '#275D38' }}>
            CREATE GROUP
          </button>
          <SearchIcon className="h-6 w-6" style={{ color: '#275D38' }} />
        </div>
      </nav>
      <nav className="p-2 flex justify-between items-center" style={{ backgroundColor: '#EFEFEF', color: '#1A1A1A' }}>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-gray-400 font-semibold">HOME</a>
          <a href="#" className="hover:text-gray-400 font-semibold">JOIN GROUPS</a>
          <a href="#" className="hover:text-gray-400 font-semibold">CREATE A GROUP</a>
          <a href="#" className="hover:text-gray-400 font-semibold">LOGIN</a>
          <a href="#" className="hover:text-gray-400 font-semibold">SIGN UP</a>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
