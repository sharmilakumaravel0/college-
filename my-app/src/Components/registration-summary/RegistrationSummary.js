import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Used for JPG image capture

const RegistrationSummary = () => {
    const location = useLocation();
    const { formData, eventTitle, paymentCompleted } = location.state;
    const [showDropdown, setShowDropdown] = useState(false);

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([`Workshop Registration Summary\nEvent Name: ${eventTitle}\nStudent Name: ${formData.studentName}\nStudent Email: ${formData.studentEmail}\nPhone Number: ${formData.phoneNumber}\nCollege Name: ${formData.collegeName}\nParticipating College: ${formData.participatingCollege}\nPayment Status: ${paymentCompleted ? 'Payment Successful' : 'Payment Pending'}`], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "registration-summary.txt";
        document.body.appendChild(element);
        element.click();
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text('Workshop Registration Summary', 10, 20);
        doc.setFontSize(12);

        const details = `Event Name: ${eventTitle}\nStudent Name: ${formData.studentName}\nStudent Email: ${formData.studentEmail}\nPhone Number: ${formData.phoneNumber}\nCollege Name: ${formData.collegeName}\nParticipating College: ${formData.participatingCollege}\nPayment Status: ${paymentCompleted ? 'Payment Successful' : 'Payment Pending'}`;

        doc.text(details, 10, 40);
        doc.save('registration-summary.pdf');
    };

    const downloadJPG = () => {
        const element = document.querySelector('.registration-summary');
        html2canvas(element).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg');
            link.download = 'registration-summary.jpg';
            link.click();
        });
    };

    const handleDownloadOption = (option) => {
        if (option === 'pdf') downloadPDF();
        if (option === 'txt') downloadTxtFile();
        if (option === 'jpg') downloadJPG();
        setShowDropdown(false);
    };

    return (
        <div className="registration-summary">
            <h2>Workshop Registration Summary</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Event Name</th>
                        <td>{eventTitle}</td>
                    </tr>
                    <tr>
                        <th>Student Name</th>
                        <td>{formData.studentName}</td>
                    </tr>
                    <tr>
                        <th>Student Email</th>
                        <td>{formData.studentEmail}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{formData.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>College Name</th>
                        <td>{formData.collegeName}</td>
                    </tr>
                    <tr>
                        <th>Participating College</th>
                        <td>{formData.participatingCollege}</td>
                    </tr>
                    <tr>
                        <th>Payment Status</th>
                        <td>{paymentCompleted ? 'Payment Successful' : 'Payment Pending'}</td>
                    </tr>
                </tbody>
            </table>

            <div className="download-section">
                <div className="dropdown">
                    <button className="download-btn" onClick={() => setShowDropdown(!showDropdown)}>
                        Download Options
                    </button>
                    {showDropdown && (
                        <ul className="dropdown-menu">
                            <li onClick={() => handleDownloadOption('pdf')}>PDF</li>
                            <li onClick={() => handleDownloadOption('txt')}>Text</li>
                            <li onClick={() => handleDownloadOption('jpg')}>JPG</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegistrationSummary;
