import React, { useState } from 'react';
import Courses from './components/Courses';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import HomeAbtSection from './components/HomeAbtSection';
import StyledHeader from './components/StyledHeader';
import SearchForStudyGroups from './components/SearchForStudyGroups';
import StudentResources from './components/StudentResources';
import Footer from './components/Footer';
import JoinStudyGroup from './components/JoinStudyGroup'; // Import the new page

import './styles/index.css';
import './styles/SearchForStudyGroups.css';
import './styles/CourseCard.css';
import './styles/StyledHeader.css';
import './styles/StudentResources.css';
import './styles/Footer.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Banner />
            <HomeAbtSection />
            <SearchForStudyGroups />
            <Courses />
            <StudentResources />
          </>
        );
      case 'join-study-group':
        return <JoinStudyGroup />;
      default:
        return (
          <>
            <Banner />
            <HomeAbtSection />
            <SearchForStudyGroups />
            <Courses />
            <StudentResources />
          </>
        );
    }
  };

  return (
    <div className="App app-container">
      <NavigationBar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;