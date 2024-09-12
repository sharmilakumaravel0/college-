import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDetails() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!adminAuthenticated) {
      navigate('/admin-login');
    } else {
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setStudents(data.students));
    }
  }, [navigate]);

  return (
    <div className="student-details-container">
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Registration</th>
            <th>Sports</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.registration}</td>
              <td>{student.sports.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;