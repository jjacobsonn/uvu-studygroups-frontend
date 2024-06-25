import React from 'react';
import textbookIcon from '../icons/dg-textbooks-1.png';

const StyledHeader = ({ title }) => {
  return (
    <div className="styled-header-container text-center relative py-4">
      <h1 className="text-3xl font-bold text-green-800">{title}</h1>
      <div className="line-with-icon">
        <hr className="line" />
        <img src={textbookIcon} alt="Textbook Icon" className="icon" />
        <hr className="line" />
      </div>
    </div>
  );
};

export default StyledHeader;