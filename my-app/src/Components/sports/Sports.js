import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sports.css';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon from react-icons
import axios from 'axios'; // Import axios or any other HTTP client

const Sports = () => {
  const [activeSection, setActiveSection] = useState('main-menu');
  const [eventName, setEventName] = useState('');
  const [formData, setFormData] = useState({
    collegeName: '',
    studentName: '',
    studentEmail: '',
    phoneNumber: ''
  });
  const navigate = useNavigate();

  const showEvents = (type) => {
    setActiveSection(type === 'sports' ? 'sports-menu' : type);
  };

  const showEventDetails = (eventName) => {
    setEventName(eventName);
    setActiveSection('event-details');
  };

  const goBack = (sectionId) => {
    if (sectionId === 'main-menu') {
      navigate('/main-menu'); // Navigate to main menu
    } else {
      setActiveSection(sectionId); // Switch to the specified section
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitRegistration = async () => {
    const { collegeName, studentName, studentEmail, phoneNumber } = formData;

    if (collegeName && studentName && studentEmail && phoneNumber) {
      // Store registration data in localStorage
      const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
      registrations.push({ eventTitle: eventName, ...formData });
      localStorage.setItem('registrations', JSON.stringify(registrations));

      try {
        // Call your backend to create a payment session
        const response = await axios.post('/api/create-payment-session', {
          eventTitle: eventName,
          amount: 100, // Example amount
        });

        // Redirect to the payment URL
        window.location.href = response.data.paymentUrl;
      } catch (error) {
        console.error('Payment session creation failed:', error);
        alert('An error occurred while processing the payment.');
      }
    } else {
      alert('Please fill in all the fields.');
    }
  };

  // Handle payment success redirect (depends on your payment provider's callback setup)
  React.useEffect(() => {
    if (window.location.pathname === '/payment-success') {
      navigate('/registration-summary', { state: { formData, eventTitle: eventName } });
    }
  }, [navigate, formData, eventName]);

  return (
    <div className='b'>
      <div>
        {/* Main Menu */}
        <div id="main-menu" className={`section ${activeSection === 'main-menu' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => navigate('/main-menu')} />
          <h1>Select Event Category</h1>
          <button onClick={() => showEvents('sports-menu')}>Sports</button>
        </div>

        {/* Sports Category Selection */}
        <div id="sports-menu" className={`section ${activeSection === 'sports-menu' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('main-menu')} />
          <h1>Sports Categories</h1>
          <button onClick={() => showEvents('outdoor-games-list')}>Outdoor Games</button>
          <button onClick={() => showEvents('indoor-games-list')}>Indoor Games</button>
        </div>

        {/* Outdoor Games List */}
        <div id="outdoor-games-list" className={`section ${activeSection === 'outdoor-games-list' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
          <h1>Outdoor Games</h1>
          <button onClick={() => showEventDetails('Football')}>Football</button>
          <button onClick={() => showEventDetails('Basketball')}>Basketball</button>
          <button onClick={() => showEventDetails('Volleyball')}>Volleyball</button>
          <button onClick={() => showEventDetails('Cricket')}>Cricket</button>
          <button onClick={() => showEventDetails('Kho-Kho')}>Kho-Kho</button>
        </div>

        {/* Indoor Games List */}
        <div id="indoor-games-list" className={`section ${activeSection === 'indoor-games-list' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
          <h1>Indoor Games</h1>
          <button onClick={() => showEventDetails('Carrom Board')}>Carrom Board</button>
          <button onClick={() => showEventDetails('Table Tennis')}>Table Tennis</button>
          <button onClick={() => showEventDetails('Chess')}>Chess</button>
        </div>

        {/* Event Details and Registration */}
        <div id="event-details" className={`section ${activeSection === 'event-details' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
          <h1 id="event-title">{eventName}</h1>
          <p><strong>Start Date:</strong> September 10, 2024</p>
          <p><strong>End Date:</strong> September 12, 2024</p>

          <div className="registration-container">
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
        </div>
      </div>
    </div>
  );
};

export default Sports;
