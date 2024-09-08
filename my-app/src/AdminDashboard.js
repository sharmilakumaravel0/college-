// src/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticated = localStorage.getItem('adminAuthenticated');
    if (authenticated) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        const response = await fetch('/path/to/data.json');
        const data = await response.json();
        setStudents(data.students);
      };
      fetchData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/adminlogin" />; // Redirect to login if not authenticated
  }

  return (
    <div>
      <h2>Student Registrations</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Course</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
