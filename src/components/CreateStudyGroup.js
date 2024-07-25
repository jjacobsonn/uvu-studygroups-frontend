import React from 'react';
import Banner from './Banner';
import CreateGroupForm from './CreateGroupForm';
import StudentResources from './StudentResources';
import customIcon from '../icons/dg-person-7.png';
import studyGroupImage from '../images/img-4.jpg';

const CreateStudyGroup = ({ setCurrentPage }) => {
  return (
    <div>
      <Banner />
      <div className="flex flex-col md:flex-row justify-between items-center p-8" style={{ background: '#FFFFFF' }}>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold rajdhani-bold mb-4" style={{ color: '#275D38' }}>
            CREATE YOUR <span style={{ fontWeight: 'bold' }}>STUDY GROUP</span>
          </h2>
          <p className="lato-regular mb-6">
            Lorem ipsum dolor sit amet consectetur. At nascetur commodo et hendrerit massa. Mi interdum massa diam convallis metus nunc elit. Molestie duis ipsum eget turpis. Nisl odio quisque turpis nibh nibh sit. Netus duis aliquam tincidunt egestas dignissim porta aenean vitae facilisi. Euismod imperdiet massa nisl laoreet ut tristique turpis nullam sed. Et consectetur egestas augue nisi nec est metus. Velit nisi proin consequat pellentesque volutpat duis imperdiet semper dictum.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={studyGroupImage} alt="Study Group" className="home-abt-image" />
        </div>
      </div>
      <div className="create-study-group-header text-center mb-8">
        <h2 className="text-4xl text-green-800 font-bold mb-4">FORM A GROUP</h2>
        <div className="create-study-group-line-with-icon flex items-center justify-center">
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
          <img src={customIcon} alt="Icon" className="create-study-group-icon" />
          <div className="create-study-group-line border-t border-green-800 flex-grow mx-4"></div>
        </div>
        <p className="text-green-800 lato-regular mb-8" style={{ fontSize: '1.25rem' }}>
          Create a group to invite other students to join you in collaborative study sessions.
        </p>
      </div>
      <CreateGroupForm />
      <StudentResources />
    </div>
  );
};

export default CreateStudyGroup;