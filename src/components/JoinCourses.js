import React from 'react';
import CourseCard from './CourseCard';
import customIcon from '../icons/dg-textbooks-1.png';
import '../styles/Pagination.css';

const JoinCourses = () => {
  const courses = [
    { name: "CS3060: Operating Systems Theory" },
    { name: "MATH1050: College Algebra" },
    { name: "CHEM1210: Principles of Chemistry I" },
    { name: "POLS1000: American Heritage" },
    { name: "CS3410: Algorithms and Data Structures" },
    { name: "BIOL1010: General Biology" },
    { name: "HIST1700: American Civilization" },
    { name: "ENGL2010: Intermediate Writing" },
  ];

  return (
    <div className="search-section-container py-16">
      <div className="styled-header-container">
        <h2 className="text-center text-green-800 text-4xl rajdhani-bold mb-6">ONGOING STUDY GROUPS</h2>
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
      <div className="pagination-container flex justify-center mt-8">
        <button className="pagination-button">❮</button>
        <button className="pagination-button">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">...</button>
        <button className="pagination-button">9</button>
        <button className="pagination-button">10</button>
        <button className="pagination-button">❯</button>
      </div>
    </div>
  );
};

export default JoinCourses;