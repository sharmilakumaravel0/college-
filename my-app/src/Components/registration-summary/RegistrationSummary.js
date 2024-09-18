// src/Components/RegistrationSummary.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const RegistrationSummary = () => {
    const location = useLocation();
    const { formData, eventTitle } = location.state || {};

    if (!formData || !eventTitle) {
        return <div>No registration data available.</div>;
    }

    return (
        <div className="registration-summary">
            <h1>Registration Summary</h1>
            <h2>Event: {eventTitle}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(formData).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => window.print()}>Print Summary</button>
        </div>
    );
};

export default RegistrationSummary;
