import React from 'react';
import CourseCard from './CourseCard';
import customIcon from '../icons/dg-textbooks-1.png';

const Courses = () => {
  const courses = [
    { name: "CS3060: Operating Systems Theory" },
    { name: "MATH1050: College Algebra" },
    { name: "CHEM1210: Principles of Chemistry I" },
    { name: "POLS1000: American Heritage" },
  ];

  return (
    <div className="search-section-container py-16">
      <div className="styled-header-container">
        <h2 className="text-center text-green-800 text-4xl rajdhani-bold mb-6">EXPLORE STUDY GROUPS</h2>
        <div className="line-with-icon" style={{ marginBottom: '4rem' }}>
          <div className="line"></div>
          <img src={customIcon} alt="Icon" className="icon" />
          <div className="line"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className="text-center mt-8" style={{ marginTop: '4rem' }}>
        <button className="outline-button">VIEW ALL PROGRAMS & DEGREES</button>
      </div>
    </div>
  );
};

export default Courses;