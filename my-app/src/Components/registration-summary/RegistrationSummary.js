// src/Components/RegistrationSummary.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const RegistrationSummary = () => {
    const location = useLocation();
    const { formData, eventTitle } = location.state || {};
    const [showDownloadOptions, setShowDownloadOptions] = useState(false);

    if (!formData || !eventTitle) {
        return <div>No registration data available.</div>;
    }

    const downloadTxtFile = () => {
        const data = Object.entries(formData)
            .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
            .join('\n');

        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'registration-summary.txt';
        a.click();
        URL.revokeObjectURL(url);
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text('Registration Summary', 20, 20);
        doc.setFontSize(16);
        doc.text(`Event: ${eventTitle}`, 20, 30);

        let y = 40; // Start position for table
        doc.text('Field', 20, y);
        doc.text('Value', 100, y);
        y += 10;

        Object.entries(formData).forEach(([key, value]) => {
            doc.text(key.charAt(0).toUpperCase() + key.slice(1), 20, y);
            doc.text(value.toString(), 100, y);
            y += 10;
        });

        doc.save('registration-summary.pdf');
    };

    const downloadCV = () => {
        const cvUrl = '/path/to/cv.pdf'; // Update with your CV file path
        const a = document.createElement('a');
        a.href = cvUrl;
        a.download = 'cv.pdf';
        a.click();
    };

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
            <button onClick={() => setShowDownloadOptions(!showDownloadOptions)}>
                {showDownloadOptions ? 'Hide Download Options' : 'Show Download Options'}
            </button>
            {showDownloadOptions && (
                <div className="download-options">
                    <button onClick={downloadTxtFile}>Download TXT</button>
                    <button onClick={downloadPDF}>Download PDF</button>
                    <button onClick={downloadCV}>Download CV</button>
                </div>
            )}
        </div>
    );
};

export default RegistrationSummary;
