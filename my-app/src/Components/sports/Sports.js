// src/App.js
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';


const App = () => {
  const [activeSection, setActiveSection] = useState('main-menu');
  const [eventTitle, setEventTitle] = useState('');
  const [formData, setFormData] = useState({
    collegeName: '',
    studentName: '',
    studentEmail: '',
    phoneNumber: ''
  });
  const [modalVisible, setModalVisible] = useState(false);

  const showEvents = (sectionId) => {
    setActiveSection(sectionId);
  };

  const showEventDetails = (event) => {
    setEventTitle(event);
    showEvents('event-details');
  };

  const goBack = (sectionId) => {
    showEvents(sectionId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitRegistration = () => {
    alert("Registration submitted!");
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
  };

  const downloadRegistration = (format) => {
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
      doc.text(eventTitle, 10, 20);
      let yOffset = 40;
      for (const [key, value] of Object.entries(formData)) {
        doc.setFontSize(12);
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
                  new TextRun('Registration Data'),
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

    closeModal();
  };

  return (
    <>
        <div className='b'>
    <div className="App">
      {/* Main Menu */}
      {activeSection === 'main-menu' && (
        <div className="section active">
          <h1>Select Event Category</h1>
          <button onClick={() => showEvents('sports-menu')}>Sports</button>
          <button onClick={() => showEvents('online-events-list')}>Online Events</button>
        </div>
      )}

      {/* Sports Category Selection */}
      {activeSection === 'sports-menu' && (
        <div className="section active">
          <h1>Sports Categories</h1>
          <button onClick={() => showEvents('outdoor-games-list')}>Outdoor Games</button>
          <button onClick={() => showEvents('indoor-games-list')}>Indoor Games</button>
          <button className="goback-button" onClick={() => goBack('main-menu')}>Go Back</button>
        </div>
      )}

      {/* Online Events List */}
      {activeSection === 'online-events-list' && (
        <div className="section active">
          <h1>Online Events</h1>
          <button onClick={() => showEventDetails('Clickography')}>Clickography</button>
          <button onClick={() => showEventDetails('Freeze-it (Photography)')}>Freeze-it (Photography)</button>
          <button onClick={() => showEventDetails('Memezone (Meme Creation)')}>Memezone (Meme Creation)</button>
          <button className="goback-button" onClick={() => goBack('main-menu')}>Go Back</button>
        </div>
      )}

      {/* Outdoor Games List */}
      {activeSection === 'outdoor-games-list' && (
        <div className="section active">
          <h1>Outdoor Games</h1>
          <button onClick={() => showEventDetails('Football')}>Football</button>
          <button onClick={() => showEventDetails('Basketball')}>Basketball</button>
          <button onClick={() => showEventDetails('Volleyball')}>Volleyball</button>
          <button onClick={() => showEventDetails('Cricket')}>Cricket</button>
          <button onClick={() => showEventDetails('Kho-Kho')}>Kho-Kho</button>
          <button className="goback-button" onClick={() => goBack('sports-menu')}>Go Back</button>
        </div>
      )}

      {/* Indoor Games List */}
      {activeSection === 'indoor-games-list' && (
        <div className="section active">
          <h1>Indoor Games</h1>
          <button onClick={() => showEventDetails('Carrom Board')}>Carrom Board</button>
          <button onClick={() => showEventDetails('Table Tennis')}>Table Tennis</button>
          <button onClick={() => showEventDetails('Chess')}>Chess</button>
          <button className="goback-button" onClick={() => goBack('sports-menu')}>Go Back</button>
        </div>
      )}

      {/* Event Details and Registration */}
      {activeSection === 'event-details' && (
        
        <div className="section active">
          <h1>{eventTitle}</h1>
          <p><strong>Start Date:</strong> September 10, 2024</p>
          <p><strong>End Date:</strong> September 12, 2024</p>

          <div className="registration-container">
            <div>
              <h2>Register for this Event</h2>
              <form id="registration-form">
                <label htmlFor="college-name">College Name:</label>
                <input type="text" id="college-name" name="collegeName" value={formData.collegeName} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="student-name">Student Name:</label>
                <input type="text" id="student-name" name="studentName" value={formData.studentName} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="student-email">Student Email:</label>
                <input type="email" id="student-email" name="studentEmail" value={formData.studentEmail} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="phone-number">Phone Number:</label>
                <input type="text" id="phone-number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required /><br /><br />

                <button type="button" onClick={submitRegistration}>Submit Registration</button>
              </form>
            </div>
            
            <button className="goback-button" onClick={() => goBack('sports-menu')}>Go Back</button>
            <button className="download-button" onClick={openModal}>Download Registration</button>
          </div>
        </div>
      )}

      {/* Modal for Download Options */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Download Registration</h2>
            <button onClick={() => downloadRegistration('pdf')}>Download as PDF</button>
            <button onClick={() => downloadRegistration('docx')}>Download as DOCX</button>
            <button onClick={() => downloadRegistration('txt')}>Download as TXT</button>
          </div>
        </div>
      )}
    </div>
    </div>
  </>
  );
};

export default App;
