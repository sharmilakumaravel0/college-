import React, { useState } from 'react';
import './AdminDashboard.css'; // Make sure to style your dashboard

const AdminDashboard = () => {
    const [events] = useState([
        {
            id: 1,
            title: 'Tech Fest',
            date: '2023-09-15',
            location: 'Auditorium A',
            registeredStudents: 50,
        },
        {
            id: 2,
            title: 'Art Exhibition',
            date: '2023-09-20',
            location: 'Gallery Hall',
            registeredStudents: 30,
        },
        {
            id: 3,
            title: 'Sports Day',
            date: '2023-09-25',
            location: 'Sports Ground',
            registeredStudents: 100,
        },
    ]);

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleRowClick = (event) => {
        setSelectedEvent(event);
    };

    const closeDetails = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <h2>Admin Menu</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>Manage Events</li>
                    <li>View Registrations</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <main className="main-content">
                <h2>Event Management Dashboard</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Event Title</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Registered Students</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event.id} onClick={() => handleRowClick(event)}>
                                <td>{event.title}</td>
                                <td>{event.date}</td>
                                <td>{event.location}</td>
                                <td>{event.registeredStudents}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {selectedEvent && (
                    <div className="details-overlay" onClick={closeDetails}>
                        <div className="details-container" onClick={(e) => e.stopPropagation()}>
                            <h3>Event Details</h3>
                            <p><strong>Title:</strong> {selectedEvent.title}</p>
                            <p><strong>Date:</strong> {selectedEvent.date}</p>
                            <p><strong>Location:</strong> {selectedEvent.location}</p>
                            <p><strong>Registered Students:</strong> {selectedEvent.registeredStudents}</p>
                            <button onClick={closeDetails}>Close</button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
