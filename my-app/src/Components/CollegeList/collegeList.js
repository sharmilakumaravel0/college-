import React, { useState } from 'react';
import './CollegeList.css'; // Import your CSS styles
import Footer from '../footer/Footer';


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

  const filteredColleges = colleges.filter(college =>
    college.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className='cc'>
    <div className="college-list-container">
      <h2 className='ii'>Chennai Colleges</h2>
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search Colleges..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="college-list">
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="college-item"
            onClick={() => window.location.href =   `/events?college=  $ {encodeURIComponent(college.id)} `}
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
      <button id="view-events-btn">View Events</button>
    
    </div>
    </div>
    <Footer/>
</>

  );
};

export default CollegeList;