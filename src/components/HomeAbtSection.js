import React from 'react';
import studyGroupImage from '../images/img-2.jpg';


const HomeAbtSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8" style={{ background: '#FFFFFF' }}>
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold rajdhani-bold mb-4" style={{ color: '#275D38' }}>LEARN ABOUT UVU STUDY GROUPS</h2>
        <p className="lato-regular mb-6">
          Lorem ipsum dolor sit amet consectetur. At nascetur commodo et hendrerit massa. Mi interdum massa diam convallis metus nunc elit. Molestie duis ipsum eget turpis. Nisl odio quisque turpis nibh nibh sit. Netus duis aliquam tincidunt egestas dignissim porta aenean vitae facilisi. Euismod imperdiet massa nisl laoreet ut tristique turpis nullam sed. Et consectetur egestas augue nisi nec est metus. Velit nisi proin consequat pellentesque volutpat duis imperdiet semper dictum.
        </p>
        <button className="outline-button">
          Learn More About Us
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={studyGroupImage} alt="Study Group" className="home-abt-image" />
      </div>
    </div>
  );
};

export default HomeAbtSection;