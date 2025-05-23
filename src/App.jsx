import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import CareerMap from './pages/CareerMap/CareerMap';
// import CertificationCards from './components/CertificationCards/CertificationCards';
import ResourcePage from './components/Resources/ResourcePage';
// import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder';
// import CustomCalendar from './components/CustomCalendar/CustomCalendar';
import QuestionnairePage from './components/QuestionnairePage/QuestionnairePage';
import UserProfile from './pages/UserProfile/UserProfile';
import Registration from './pages/Registration/Registration';

import PrivateRoute from './components/PrivateRoute';
// import TestAPICalls from './pages/TestAPICalls/TestAPICalls';
// import TestOnetAPI from './pages/TestAPICalls/TestOnetAPI';
// import TestMap from './pages/CareerMap/TestCareerMap';

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// const upcoming = [
//   { title: 'BCCA Workshop', start: new Date(2025, 3, 10, 14, 0), end: new Date(2025, 3, 10, 16, 0) },
//   { title: 'Interview Prep', start: new Date(2025, 3, 12, 10, 0), end: new Date(2025, 3, 12, 11, 0) },
// ];

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, {navigate});

  return (

      <div className="app-wrapper">
        <nav className='nav'>
          <NavBar />
        </nav>

        <main className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/careermap" element={<CareerMap />} />
            <Route path="/resources" element={<ResourcePage />} />
            <Route path="/questionnaire" element={<QuestionnairePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          </Routes>
        </main>

        <footer className='footer'>
          <Footer />
        </footer>
      </div>

  );
}

export default App;
