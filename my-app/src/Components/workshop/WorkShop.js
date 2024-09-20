import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import QRCode from 'react-qr-code'; // Import QRCode component



function Workshops() {
  const [activeSection, setActiveSection] = useState('main-menu');
  const [workshopTitle, setWorkshopTitle] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(null); // State to handle payment amount
  const navigate = useNavigate(); // Hook for navigation

  // List of colleges for the dropdown
  const colleges = [
    'Select your college',
    'Indian Institute of Technology Madras (IIT Madras)',
    'Anna University',
    'Loyola College',
    'Madras Christian College (MCC)',
    'Presidency College',
    'SRM Institute of Science and Technology',
    'Sathyabama Institute of Science and Technology',
    'Stella Maris College',
    'Hindustan Institute of Technology and Science (HITS)',
    'Vellore Institute of Technology (VIT)',
    'Saveetha Institute of Medical and Technical Sciences'
  ];

  // Function to show different sections based on the type
  const showWorkshops = (type) => {
    if (type === 'technical') {
      setActiveSection('technical-workshops-list');
    } else if (type === 'nonTechnical') {
      setActiveSection('non-technical-workshops-list');
    }
  };

  // Function to show workshop details for the selected workshop
  const showWorkshopDetails = (workshopName, amount) => {
    setActiveSection('workshop-details');
    setWorkshopTitle(workshopName);
    setPaymentAmount(amount); // Set payment amount
  };

  // Function to navigate back to a previous section
  const goBack = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Function to handle registration form submission
  const submitRegistration = (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    // Navigate to the registration summary page with form data and workshop title
    navigate('/registration-summary', { state: { formData: data, eventTitle: workshopTitle } });
  };

  // Generate the booking URL
  const bookingURL = `https://example.com/register?title=${encodeURIComponent(workshopTitle)}&amount=${paymentAmount}`;

  return (
    <>
    <div className='aa'>

      
      {/* Main Menu */}
      <div id="main-menu" className={`section ${activeSection === 'main-menu' ? 'active' : ''}`}>
        <FaArrowLeft className="go-back-arrow" style={{ display: 'none' }} />
        <h1>Select Workshop Category</h1>
        <button onClick={() => showWorkshops('technical')}>Technical Workshops</button>
        <button onClick={() => showWorkshops('nonTechnical')}>Non-Technical Workshops</button>
      </div>

      {/* Technical Workshops List */}
      <div id="technical-workshops-list" className={`section ${activeSection === 'technical-workshops-list' ? 'active' : ''}`}>
        <FaArrowLeft className="go-back-arrow" onClick={() => goBack('main-menu')} />
        <h1>Technical Workshops</h1>
        <button onClick={() => showWorkshopDetails('Web Development', 200)}>Web Development</button>
        <button onClick={() => showWorkshopDetails('Data Science', 300)}>Data Science</button>
        <button onClick={() => showWorkshopDetails('Machine Learning', 250)}>Machine Learning</button>
        <button onClick={() => showWorkshopDetails('Cybersecurity', 150)}>Cybersecurity</button>
      </div>

      {/* Non-Technical Workshops List */}
      <div id="non-technical-workshops-list" className={`section ${activeSection === 'non-technical-workshops-list' ? 'active' : ''}`}>
        <FaArrowLeft className="go-back-arrow" onClick={() => goBack('main-menu')} />
        <h1>Non-Technical Workshops</h1>
        <button onClick={() => showWorkshopDetails('Creative Writing', 100)}>Creative Writing</button>
        <button onClick={() => showWorkshopDetails('Public Speaking', 120)}>Public Speaking</button>
        <button onClick={() => showWorkshopDetails('Leadership Skills', 150)}>Leadership Skills</button>
      </div>

      {/* Workshop Details and Registration */}
      <div id="workshop-details" className={`section ${activeSection === 'workshop-details' ? 'active' : ''}`}>
        <FaArrowLeft className="go-back-arrow" onClick={() => goBack('technical-workshops-list')} />
        <h1 id="workshop-title">Register for {workshopTitle} Workshop</h1>
        <p><strong>Start Date:</strong> October 15, 2024</p>
        <p><strong>End Date:</strong> October 17, 2024</p>
        <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>

        {/* QR Code for pre-booking */}
        <div className="qr-code-container">
          <QRCode value={bookingURL} size={128} />
        </div><br />

        <div className="registration-container">
          <form id="registration-form" onSubmit={submitRegistration}>
            <label htmlFor="student-name">Student Name:</label>
            <input type="text" id="student-name" name="studentName" required /><br /><br />

            <label htmlFor="student-email">Student Email:</label>
            <input type="email" id="student-email" name="studentEmail" required /><br /><br />

            <label htmlFor="phone-number">Phone Number:</label>
            <input type="text" id="phone-number" name="phoneNumber" required /><br /><br />

            <label htmlFor="college-name">College Name:</label>
            <select id="college-name" name="collegeName" required>
              {colleges.map((college, index) => (
                <option key={index} value={college}>{college}</option>
              ))}
            </select><br /><br />

            <button type="submit">Submit Registration</button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Workshops;
