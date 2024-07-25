import React, { useState, useEffect } from 'react';
import Courses from './components/Courses';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import HomeAbtSection from './components/HomeAbtSection';
import StyledHeader from './components/StyledHeader';
import SearchForStudyGroups from './components/SearchForStudyGroups';
import StudentResources from './components/StudentResources';
import Footer from './components/Footer';
import JoinStudyGroup from './components/JoinStudyGroup';
import JoinGroup from './components/JoinGroup'; // Import the JoinGroup component

import './styles/index.css';
import './styles/SearchForStudyGroups.css';
import './styles/CourseCard.css';
import './styles/StyledHeader.css';
import './styles/StudentResources.css';
import './styles/Footer.css';
import './styles/JoinGroup.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll to top whenever the currentPage changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Banner />
            <HomeAbtSection />
            <SearchForStudyGroups />
            <Courses setCurrentPage={setCurrentPage} />
            <StudentResources />
          </>
        );
      case 'join-study-group':
        return <JoinStudyGroup setCurrentPage={setCurrentPage} />;
      case 'join-group':
        return <JoinGroup />;
      default:
        return (
          <>
            <Banner />
            <HomeAbtSection />
            <SearchForStudyGroups />
            <Courses setCurrentPage={setCurrentPage} />
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