import React from 'react';
import Courses from './components/Courses';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import HomeAbtSection from './components/HomeAbtSection';
import StyledHeader from './components/StyledHeader';
import SearchForStudyGroups from './components/SearchForStudyGroups';

import './styles/index.css';
import './styles/SearchForStudyGroups.css';
import './styles/CourseCard.css';
import './styles/StyledHeader.css';

const App = () => (
  <div className="App app-container">
    <NavigationBar />
    <Banner />
    <HomeAbtSection />
    <SearchForStudyGroups />
    <Courses />
  </div>
);

export default App;