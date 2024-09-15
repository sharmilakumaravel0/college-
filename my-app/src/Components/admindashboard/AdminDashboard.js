import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/registrations');
        setRegistrations(response.data);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>College Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg, index) => (
            <tr key={index}>
              <td>{reg.studentName}</td>
              <td>{reg.collegeName}</td>
              <td>{reg.phoneNumber}</td>
              <td>{reg.studentEmail}</td>
              <td>{reg.eventTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
