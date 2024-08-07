import React, { useEffect } from 'react';
import Banner from './Banner';
import StudentResources from './StudentResources';
import '../styles/JoinGroup.css';
import customIcon from '../icons/dg-person-7.png';

const JoinGroup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="join-group-page">
      <Banner />
      <div className="join-group-header text-center mb-8">
        <h2 className="text-4xl text-green-800 font-bold mb-4">JOIN A GROUP</h2>
        <div className="join-group-line-with-icon flex items-center justify-center">
          <div className="join-group-line border-t border-green-800 flex-grow mx-4"></div>
          <img src={customIcon} alt="Icon" className="join-group-icon" />
          <div className="join-group-line border-t border-green-800 flex-grow mx-4"></div>
        </div>
        <p className="text-green-800 lato-regular mb-8" style={{ fontSize: '1.25rem' }}>
          Join a group and collaborate with other students in study sessions.
        </p>
      </div>
      <div className="join-group-form-container bg-green-800 rounded-lg p-8 mx-auto max-w-4xl">
        <h3 className="text-white text-3xl rajdhani-bold text-center mb-4">JOIN A STUDY GROUP</h3>
        <p className="text-white text-center mb-6" style={{ fontSize: '1.2rem' }}>
          Connect with peers and enhance your learning
        </p>
        <div className="line-divider"></div>
        <form className="join-group-form grid gap-4">
          <div className="form-group">
            <label className="text-white">Group Name</label>
            <input type="text" value="College Algebra (X01)" readOnly className="form-control bg-white text-green-800" />
          </div>
          <div className="form-group">
            <label className="text-white">Course Name</label>
            <input type="text" value="MATH1050" readOnly className="form-control bg-white text-green-800" />
          </div>
          <div className="form-group col-span-2">
            <label className="text-white">Description of Group Focus and Goals</label>
            <textarea value="The focus of this study group is to deepen understanding of College Algebra concepts through collaborative learning and peer assistance. We will tackle a wide range of topics from linear equations to polynomial functions, ensuring each member solidifies their foundation in algebraic principles." readOnly className="form-control bg-white text-green-800" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label className="text-white">Meeting Days</label>
            <input type="text" value="Monday & Thursday" readOnly className="form-control bg-white text-green-800" />
          </div>
          <div className="form-group">
            <label className="text-white">Meeting Time</label>
            <input type="text" value="1:00pm - 3:30pm" readOnly className="form-control bg-white text-green-800" />
          </div>
          <div className="form-group col-span-2">
            <label className="text-white">Group Meeting Location</label>
            <input type="text" value="Liberal Arts (LA) Building - Room (#): 205" readOnly className="form-control bg-white text-green-800" />
          </div>
          <div className="form-group col-span-2">
            <label className="text-white">Maximum Group</label>
            <input type="text" value="3 / 5" readOnly className="form-control bg-white text-green-800" />
          </div>
          <div className="text-center col-span-2" style={{ marginTop: '1.5rem' }}>
            <button className="btn-green">JOIN GROUP</button>
          </div>
        </form>
      </div>
      <StudentResources />
    </div>
  );
};

export default JoinGroup;