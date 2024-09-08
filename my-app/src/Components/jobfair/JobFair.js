// src/JobFairs.js
import React from 'react';
import Footer from '../footer/Footer';
// Ensure this path is correct

const jobs = [
  { id: 1, name: "Tech Career Fair", date: "October 10, 2024", location: "San Francisco, CA", description: "Explore opportunities with leading tech companies." },
  { id: 2, name: "Engineering Job Expo", date: "November 5, 2024", location: "New York, NY", description: "Connect with top engineering firms and recruiters." },
  { id: 3, name: "Business and Finance Fair", date: "December 1, 2024", location: "Chicago, IL", description: "Meet professionals and explore career options in business and finance." },
  { id: 4, name: "Healthcare Careers Day", date: "January 15, 2025", location: "Los Angeles, CA", description: "Discover job opportunities in the healthcare industry." },
  { id: 5, name: "Marketing & Sales Expo", date: "February 20, 2025", location: "Boston, MA", description: "Network with marketing and sales experts." },
  { id: 6, name: "IT & Cybersecurity Job Fair", date: "March 12, 2025", location: "Seattle, WA", description: "Find career opportunities in IT and cybersecurity." },
  { id: 7, name: "Education and Training Fair", date: "April 8, 2025", location: "Philadelphia, PA", description: "Explore careers in education and training sectors." }
];

function JobFairs() {
  return (
    <>
      <div className="job-fair">
        <h1>Upcoming Job Fairs</h1>
        <div className="job-list">
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <h2>{job.name}</h2>
              <p><strong>Date:</strong> {job.date}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description:</strong> {job.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobFairs;
