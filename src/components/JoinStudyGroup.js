import React from 'react';
import Banner from './Banner';
import img3 from '../images/img-3.jpg';
import SearchForStudyGroups from './SearchForStudyGroups';
import JoinCourses from './JoinCourses'; // Ensure you are using the correct component name
import StudentResources from './StudentResources';

const JoinStudyGroup = ({ setCurrentPage }) => {
  return (
    <div>
      <Banner />
      <div className="flex flex-col md:flex-row justify-between items-center p-8" style={{ background: '#FFFFFF' }}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold rajdhani-bold mb-4" style={{ color: '#275D38' }}>
            JOIN A <span style={{ fontWeight: 'bold' }}>STUDY GROUP</span>
          </h2>
          <p className="lato-regular mb-6">
            Lorem ipsum dolor sit amet consectetur. At nascetur commodo et hendrerit massa. Mi interdum massa diam convallis metus nunc elit. Molestie duis ipsum eget turpis. Nisl odio quisque turpis nibh nibh sit. Netus duis aliquam tincidunt egestas dignissim porta aenean vitae facilisi. Euismod imperdiet massa nisl laoreet ut tristique turpis nullam sed. Et consectetur egestas augue nisi nec est metus. Velit nisi proin consequat pellentesque volutpat duis imperdiet semper dictum.
          </p>
          <button 
            className="outline-button"
            onClick={() => setCurrentPage('home')} // Navigate to the homepage
          >
            Learn More About Us
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={img3} alt="Study Group" className="home-abt-image" />
        </div>
      </div>
      <SearchForStudyGroups />
      <JoinCourses setCurrentPage={setCurrentPage} /> {/* Ensure the component name and props are correct */}
      <StudentResources />
    </div>
  );
};

export default JoinStudyGroup;