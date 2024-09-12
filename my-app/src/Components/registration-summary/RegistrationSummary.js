// src/Components/registration-summary/RegistrationSummary.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import './RegistrationSummary.css';

const RegistrationSummary = () => {
  const location = useLocation();
  const { formData, eventTitle } = location.state || {};
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (formData && eventTitle) {
      // Save to local storage
      const existingData = JSON.parse(localStorage.getItem('registrations')) || [];
      existingData.push({ formData, eventTitle });
      localStorage.setItem('registrations', JSON.stringify(existingData));
    }
  }, [formData, eventTitle]);

  if (!formData || !eventTitle) {
    return <div>No registration data available.</div>;
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
  };

  const downloadFile = (format) => {
    let content = '';
    for (const [key, value] of Object.entries(formData)) {
      content += `${capitalize(key)}: ${value}\n`;
    }

    if (format === 'txt') {
      const blob = new Blob([content], { type: 'text/plain' });
      saveAs(blob, 'registration_data.txt');
    } else if (format === 'pdf') {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.text(`Event: ${eventTitle}`, 10, 20);
      doc.setFontSize(16);
      let yOffset = 40;
      for (const [key, value] of Object.entries(formData)) {
        doc.text(`${capitalize(key)}: ${value}`, 10, yOffset);
        yOffset += 10;
      }
      doc.save('registration_data.pdf');
    } else if (format === 'docx') {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun('Registration Summary'),
                  new TextRun({ text: `Event: ${eventTitle}`, bold: true }),
                  new TextRun({ text: '\n\n' + content, break: 1 })
                ]
              })
            ]
          }
        ]
      });

      Packer.toBlob(doc).then(blob => {
        saveAs(blob, 'registration_data.docx');
      });
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
              <td>{capitalize(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={openModal}>Download</button>

      {/* Modal for Download Options */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Download Registration Data</h2>
            <button onClick={() => downloadFile('pdf')}>Download as PDF</button>
            <button onClick={() => downloadFile('docx')}>Download as DOCX</button>
            <button onClick={() => downloadFile('txt')}>Download as TXT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationSummary;
