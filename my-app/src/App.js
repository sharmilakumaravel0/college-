import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header/Header'

import "./Components/carousel/Carousel.css"
import "./Components/eventinfo/EventInfo.css"
import "./Components/footer/Footer.css"
import "./Components/header/Header.css"
import "./Components/eventproviders/EventProviders.css"
import Home from './Components/eventproviders/EventProviders'
import About from './Components/about/About'
import StudentRegistration from './Components/studentregistration/StudentRegistration';
import ContactUs from './Components/contactus/ContactUs';
import Login from './Components/login/Login';
import CollegeList from './Components/CollegeList/collegeList';
import Events from './Components/events/Events';
import JobFairs from './Components/jobfair/JobFair';
import "./Components/studentregistration/StudentRegistration.css";
import "./Components/contactus/ContactUs.css"
import "./Components/login/Login.css"
import "./Components/events/Events.css"
import "./Components/herosection/HeroSection.css"

import "./Components/jobfair/JobFair.css";






function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studentregistration" element={<StudentRegistration />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/colleges" element={<CollegeList />} />
        <Route path="/" element={<Events />} />
        <Route path="/jobfair" element={<JobFairs />} />
        

       
       
       
      </Routes>
    
    </Router>
  );
}

export default App;
