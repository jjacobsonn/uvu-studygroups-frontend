import React from 'react';
import resourcesIcon from '../icons/dg-resources.png';
import humanitiesIcon from '../icons/dg-humanities.png';
import anthropologyIcon from '../icons/dg-anthropology.png';
import staffImage from '../images/Card_Staff.png';
import '../styles/StudentResources.css';

const StudentResources = () => {
  return (
    <div className="student-resources-container py-16 px-8">
      <div className="student-resources-header text-center mb-8">
        <h2 className="text-4xl text-green-800 font-bold mb-4">STUDENT RESOURCES</h2>
        <div className="student-resources-line-with-icon flex items-center justify-center">
          <div className="student-resources-line border-t border-green-800 flex-grow mx-4"></div>
          <img src={resourcesIcon} alt="Resources Icon" className="student-resources-icon" />
          <div className="student-resources-line border-t border-green-800 flex-grow mx-4"></div>
        </div>
      </div>

      <div className="resources-content flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="testimonials w-full max-w-md">
            <img src={humanitiesIcon} alt="Humanities Icon" className="w-16 mb-4 mx-auto lg:mx-0" />
            <h3 className="text-xl font-bold text-green-800">TESTIMONIALS</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Purus eget id pulvinar ultricies.</p>
            <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">View More</button>
          </div>

          <div className="resources w-full max-w-md">
            <img src={anthropologyIcon} alt="Anthropology Icon" className="w-16 mb-4 mx-auto lg:mx-0" />
            <h3 className="text-xl font-bold text-green-800">RESOURCES</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Purus eget id pulvinar ultricies.</p>
            <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">View Resource</button>
          </div>
        </div>

        <div className="staff-image-container flex justify-center lg:justify-end">
          <img src={staffImage} alt="Kelly Johnson" className="w-full max-w-lg lg:max-w-xl" />
        </div>
      </div>
    </div>
  );
};

export default StudentResources;