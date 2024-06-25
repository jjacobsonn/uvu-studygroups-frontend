import React from 'react';
import Courses from './components/Courses';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import HomeAbtSection from './components/HomeAbtSection';
import StyledHeader from './components/StyledHeader';
import SearchForStudyGroups from './components/SearchForStudyGroups';
import StudentResources from './components/StudentResources';

import './styles/index.css';
import './styles/SearchForStudyGroups.css';
import './styles/CourseCard.css';
import './styles/StyledHeader.css';
import './styles/StudentResources.css';

const App = () => (
  <div className="App app-container">
    <NavigationBar />
    <Banner />
    <HomeAbtSection />
    <SearchForStudyGroups />
    <Courses />
    <StudentResources />
  </div>
);

export default App;