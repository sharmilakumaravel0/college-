import React, { useState, useEffect } from 'react';
import "./AdminDashboard.css"
import axios from 'axios';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:3002/registrations', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`, // Add token if required
          },
        });
        setRegistrations(response.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className='nn'>
      <h1>Registrations List</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Phone Number</th>
            <th>College Name</th>
            <th>Event Title</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration, index) => (
            <tr key={index}>
              <td data-label="Student Name">{registration.studentName}</td>
              <td data-label="StudentE mail">{registration.studentEmail}</td>
              <td data-label="Phone Number">{registration.phoneNumber}</td>
              <td data-label="College Name">{registration.collegeName}</td>
              <td data-label="Event Title">{registration.eventTitle}</td>
              <td data-label="Registration Date">{new Date(registration.registrationDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default AdminDashboard;
