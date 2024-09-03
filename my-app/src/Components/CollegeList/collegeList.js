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
      navigate(`/events?college=${selectedCollege}`);
    }
  };

  return (
    <>
    <div className="college-list-container">
      <button
        id="view-events-btn"
        disabled={!selectedCollege}
        onClick={handleViewEvents}
      >
        View Events
      </button>

      <div className="college-list">
        <h1>Chennai Colleges</h1>
        {['srm', 'vels', 'loyola', 'anna', 'mit', 'psg', 'shiva', 'vni', 'bharath', 'sankara'].map((collegeId) => (
          <div
            key={collegeId}
            className={`college-item ${selectedCollege === collegeId ? 'active' : ''}`}
            onClick={() => handleCollegeClick(collegeId)}
          >
            <a href="#">{collegeId}</a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CollegeList;
