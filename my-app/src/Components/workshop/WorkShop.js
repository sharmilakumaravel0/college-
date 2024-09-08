import React from 'react';
 // Ensure you create this CSS file for styling

const workshops = [
    {
        id: 1,
        name: "Introduction to React",
        date: "October 15, 2024",
        location: "Online",
        description: "Learn the basics of React and how to build interactive web applications."
    },
    {
        id: 2,
        name: "Advanced JavaScript",
        date: "November 10, 2024",
        location: "New York, NY",
        description: "Deep dive into advanced JavaScript concepts and best practices."
    },
    {
        id: 3,
        name: "Python for Data Science",
        date: "December 5, 2024",
        location: "San Francisco, CA",
        description: "Explore Python libraries and tools for data analysis and visualization."
    },
    {
        id: 4,
        name: "UX/UI Design Basics",
        date: "January 20, 2025",
        location: "Los Angeles, CA",
        description: "Understand the fundamentals of user experience and interface design."
    },
    {
        id: 5,
        name: "Cybersecurity Essentials",
        date: "February 25, 2025",
        location: "Chicago, IL",
        description: "Learn about essential cybersecurity practices to protect your digital assets."
    },
    {
        id: 6,
        name: "Machine Learning Introduction",
        date: "March 15, 2025",
        location: "Boston, MA",
        description: "Get started with machine learning concepts and techniques."
    },
    {
        id: 7,
        name: "Project Management Skills",
        date: "April 10, 2025",
        location: "Philadelphia, PA",
        description: "Enhance your project management skills with practical techniques and tools."
    }
];

function Workshops() {
    return (
        <div className="workshops">
            <h1>Upcoming Workshops</h1>
            <div className="workshop-list">
                {workshops.map(workshop => (
                    <div key={workshop.id} className="workshop-card">
                        <h2>{workshop.name}</h2>
                        <p><strong>Date:</strong> {workshop.date}</p>
                        <p><strong>Location:</strong> {workshop.location}</p>
                        <p><strong>Description:</strong> {workshop.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Workshops;