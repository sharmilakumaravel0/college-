import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CollegeList.css';
import Footer from '../footer/Footer';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons

const colleges = [
  { id: 'Indian Institute of Technology Madras (IIT Madras)', image: 'https://sc0.blr1.cdn.digitaloceanspaces.com/article/173423-vcsetfhpsr-1650631711.jpg', description: 'Leading technical institute in India.' },
  { id: 'Anna University', image: 'https://images.collegedunia.com/public/college_data/images/appImage/25863_cover.jpg?h=260&w=360&mode=crop', description: 'Renowned for its arts and science programs.' },
  { id: 'Madras Christian College (MCC)', image: 'https://www.lentlo.com/wp-content/uploads/2023/07/MCC.jpeg', description: 'A well-established institution offering diverse courses.' },
  { id: 'Presidency College', image: 'https://images.collegedunia.com/public/college_data/images/appImage/3479_PRESIDENCY.jpg', description: 'Offers a range of undergraduate and postgraduate programs.' },
  { id: 'SRM Institute of Science and Technology', image: 'https://images.shiksha.com/mediadata/images/1719317026phpTmdOdl.jpeg', description: 'Known for its engineering and management programs.' },
  { id: 'Sathyabama Institute of Science and Technology', image: 'https://content.jdmagicbox.com/v2/comp/chennai/92/044p4170492/catalogue/sathyabama-institute-of-science-and-technology-sholinganallur-chennai-engineering-colleges-3q8hdta.jpg', description: 'A prominent university with a focus on technology and engineering.' },
  { id: 'Stella Maris College', image: 'https://media.getmyuni.com/assets/images/articles/ln9ltaai23-26si0-an9r2telbm-e5ml1osu.jpg', description: 'Famous for its arts and science programs, especially for women.' },
  { id: 'Hindustan Institute of Technology and Science (HITS)', image: 'https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/2284/hindustan-college-of-arts-and-science-3-1705403544.webp', description: 'Provides a range of technical and management courses.' },
  { id: 'Saveetha College of Arts and Science', image: 'https://yt3.googleusercontent.com/wdHpyLY1gSHkFZ9uORYofsduS_T48sN5usBqn7p1ivp9SRdvqqNmzEtbNspE9iyyyekVxuBJFg=s900-c-k-c0x00ffffff-no-rj', description: 'Known for its research and engineering programs.' },
  { id: 'Loyola College', image: 'https://www.lentlo.com/wp-content/uploads/2024/05/Loyola-College-1.jpg', description: 'A prestigious institution with a strong emphasis on holistic education.' }
];

const CollegeList = () => {
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter and sort colleges
  const filteredColleges = colleges
    .filter(college => college.id.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (a.id.toLowerCase() === searchQuery.toLowerCase()) return -1;
      if (b.id.toLowerCase() === searchQuery.toLowerCase()) return 1;
      return 0;
    });

  return (
    <>
      <div className="college-list-container">
        <h1>Chennai Colleges</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Colleges..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <div className="college-list">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className={`college-item ${selectedCollege === college.id ? 'active' : ''}`}
              onClick={() => handleCollegeClick(college.id)}
            >
              <div className="college-image">
                <img src={college.image} alt={college.id} />
              </div>
              <div className="college-description">
                <h2>{college.id}</h2>
                <p>{college.description}</p>
              </div>
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
      <Footer />
    </>
  );
};

export default CollegeList;
