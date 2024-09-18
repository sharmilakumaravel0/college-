
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header/Header';
import "./Components/carousel/Carousel.css"
import "./Components/eventinfo/EventInfo.css"
import "./Components/footer/Footer.css"
import "./Components/header/Header.css"

import "./Components/eventproviders/EventProviders.css"
import Home from './Components/eventproviders/EventProviders'
import About from './Components/about/About'

import ContactUs from './Components/contactus/ContactUs';
import Login from './Components/login/Login';
import CollegeList from './Components/CollegeList/collegeList';
import Events from './Components/events/Events';
import JobFair from './Components/jobfair/JobFair';
import Signup from './Components/signup/Signup';
import "./Components/contactus/ContactUs.css"

import "./Components/events/Events.css"
import "./Components/herosection/HeroSection.css"
import AdminLogin from './AdminLogin';

import "./Components/jobfair/JobFair.css";
import Workshop from './Components/workshop/WorkShop';
import Sports from './Components/sports/Sports';
import "./Components/sports/Sports.css"
import OnlineEvents from './Components/onlineevents.js/OnlineEvents';
import RegistrationSummary from './Components/registration-summary/RegistrationSummary';
import AdminDashboard from './Components/admindashboard/AdminDashboard';
import Technical from './Components/technical/Technical';
import NonTechEvents from './Components/nontech/NonTechEvents';
import EventProvides from './Components/eventproviders/EventProviders';

import Registration from './Components/register/Registration';
import "./Auth.css"






function App() {
  
  return (
    <>
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/colleges" element={<CollegeList />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobfair" element={<JobFair />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/eventproviders" element={<EventProvides />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/adminlogin/" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/registration-summary" element={<RegistrationSummary />} />
        
        <Route path="/onlineevents" element={<OnlineEvents />} />
        <Route path="/technical" element={<Technical/>} />
        <Route path="/nontech" element={<NonTechEvents/>} />
        <Route path="/register" element={<Registration/>} />
        
       
        
       

      </Routes>
       
        
        

       
       
       

    
    </Router>
    </>
  );
}

export default App;
