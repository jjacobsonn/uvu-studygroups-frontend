import React from 'react';

const CourseCard = ({ course, setCurrentPage }) => {
  return (
    <div className="course-card-container bg-green-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="course-card-content flex flex-col justify-end h-full">
        <div className="course-card-title p-4 bg-white text-green-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold rajdhani-bold">{course.name}</h2>
          <button 
            className="learn-more-button mt-2 bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => setCurrentPage('join-group')}
          >
            Learn More
            <svg className="ml-2 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
