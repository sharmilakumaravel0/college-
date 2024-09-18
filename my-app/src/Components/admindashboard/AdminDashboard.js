// src/Components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                const response = await axios.get('http://localhost:5002/admin/registrations');
                setRegistrations(response.data);
            } catch (error) {
                console.error('Error fetching registrations:', error);
            }
        };

        fetchRegistrations();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>College Name</th>
                        <th>Event Title</th>
                    </tr>
                </thead>
                <tbody>
                    {registrations.map((registration, index) => (
                        <tr key={index}>
                            <td>{registration.studentName}</td>
                            <td>{registration.studentEmail}</td>
                            <td>{registration.phoneNumber}</td>
                            <td>{registration.collegeName}</td>
                            <td>{registration.eventTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
