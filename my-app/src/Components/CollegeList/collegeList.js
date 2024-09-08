import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CollegeList.css';
import Footer from '../footer/Footer';

const CollegeList = () => {
  const [selectedCollege, setSelectedCollege] = useState('');
  const navigate = useNavigate();

  const handleCollegeClick = (collegeId) => {
    setSelectedCollege(collegeId);
  };

  const handleViewEvents = () => {
    if (selectedCollege) {
      navigate(   `/events?college=${selectedCollege} `);
    }
  };

  return (
    <>
      <div className="college-list-container">
        <h1>Chennai Colleges</h1>
        <div className="college-list">
          {[
            'Indian Institute of Technology Madras (IIT Madras)',
            'Anna University',
            'Loyola College',
            'Madras Christian College (MCC)',
            'Presidency College',
            'SRM Institute of Science and Technology',
            'Sathyabama Institute of Science and Technology',
            'Stella Maris College',
            'Hindustan Institute of Technology and Science (HITS)',
            'Vellore Institute of Technology (VIT) Chennai Campus'
          ].map((collegeId) => (
            <div
              key={collegeId}
              className={ `college-item ${selectedCollege === collegeId ? 'active' : ''}  `}
              onClick={() => handleCollegeClick(collegeId)}
            >
              {collegeId}
            </div>
          ))}
        </div>
        <button
          id="view-events-btn"
          
          disabled={!selectedCollege}
          onClick={handleViewEvents}
        >
          View Events
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default CollegeList;


