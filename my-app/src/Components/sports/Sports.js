import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiMeditation } from 'react-icons/gi';
import { FaFutbol, FaArrowLeft, FaBasketballBall, FaHandRock, FaVolleyballBall, FaBaseballBall, FaChess, FaRunning, FaTableTennis, FaCircle } from 'react-icons/fa';
import myQRCode from '../Assets/myQRCode.jpg';

const Sports = () => {
  const [activeSection, setActiveSection] = useState('sports-menu');
  const [eventName, setEventName] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(null);
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    phoneNumber: '',
    collegeName: '',
    participatingCollege: ''
  });
  const [isScanning, setIsScanning] = useState(false);
  const [previousSection, setPreviousSection] = useState(null); // Store the previous section
  const navigate = useNavigate();

  const showEvents = (type) => {
    setPreviousSection('sports-menu');
    setActiveSection(type);
  };

  const eventDetails = (eventName, amount) => {
    setPreviousSection(activeSection); // Store the current section before navigating to event details
    setEventName(eventName);
    setPaymentAmount(amount);
    setActiveSection('event-details');
  };

  const goBack = (sectionId) => {
    if (sectionId === 'sports-menu') {
      navigate('/events'); // Navigating back to main event menu from sports categories
    } else {
      setActiveSection(sectionId);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const simulatePaymentScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const isPaid = window.confirm("Confirm that payment has been made via QR code.");
      setIsScanning(false);
      if (isPaid) {
        alert("Payment Successful!");
      } else {
        alert("Payment not completed. Please scan again.");
      }
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/registration-summary', { state: { formData, eventTitle: eventName } });
    setFormData({
      collegeName: '',
      studentName: '',
      studentEmail: '',
      phoneNumber: '',
      participatingCollege: ''
    });
  };

  const eventDetailsData = {
    Football: { startDate: '2024-09-15', endDate: '2024-09-16', startTime: '10:00 AM', endTime: '05:00 PM', paymentAmount: 200 },
    Basketball: { startDate: '2024-09-17', endDate: '2024-09-17', startTime: '11:00 AM', endTime: '04:00 PM', paymentAmount: 150 },
    Volleyball: { startDate: '2024-09-18', endDate: '2024-09-19', startTime: '12:00 PM', endTime: '06:00 PM', paymentAmount: 180 },
    Cricket: { startDate: '2024-09-20', endDate: '2024-09-21', startTime: '09:00 AM', endTime: '07:00 PM', paymentAmount: 250 },
    CarromBoard: { startDate: '2024-09-23', endDate: '2024-09-23', startTime: '10:00 AM', endTime: '04:00 PM', paymentAmount: 100 },
    TableTennis: { startDate: '2024-09-24', endDate: '2024-09-24', startTime: '11:00 AM', endTime: '03:00 PM', paymentAmount: 120 },
    Chess: { startDate: '2024-09-25', endDate: '2024-09-25', startTime: '02:00 PM', endTime: '06:00 PM', paymentAmount: 150 },
    Yoga: { startDate: '2024-09-28', endDate: '2024-09-28', startTime: '08:00 AM', endTime: '10:00 AM', paymentAmount: 100 },
    Handball: { startDate: '2024-09-29', endDate: '2024-09-29', startTime: '04:00 PM', endTime: '07:00 PM', paymentAmount: 130 }
  };

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

  return (
    <>
      <div className='b'>
        <div>
          <div id="sports-menu" className={`section ${activeSection === 'sports-menu' ? 'active' : ''}`}>
            <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
            <h1>Sports Categories</h1>
            <button className='in' onClick={() => showEvents('outdoor-games-list')}>Outdoor Games</button>
            <button className='in' onClick={() => showEvents('indoor-games-list')}>Indoor Games</button>
          </div>

          <div id="outdoor-games-list" className={`section ${activeSection === 'outdoor-games-list' ? 'active' : ''}`}>
            <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
            <h1>Outdoor Games</h1>
            {[
              { name: 'Football', icon: <FaFutbol />, amount: 200 },
              { name: 'Basketball', icon: <FaBasketballBall />, amount: 150 },
              { name: 'Volleyball', icon: <FaVolleyballBall />, amount: 180 },
              { name: 'Cricket', icon: <FaBaseballBall />, amount: 250 },
              { name: 'Kho-Kho', icon: <FaRunning />, amount: 100 }
            ].map(event => (
              <div className="Sports-event-box" key={event.name} onClick={() => eventDetails(event.name, event.amount)}>
                <div className="icon-circle">{event.icon}</div>
                <div className="event-text">{event.name}</div>
              </div>
            ))}
          </div>

          <div id="indoor-games-list" className={`section ${activeSection === 'indoor-games-list' ? 'active' : ''}`}>
            <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
            <h1>Indoor Games</h1>
            {[
              { name: 'CarromBoard', icon: <FaCircle />, amount: 100 },
              { name: 'TableTennis', icon: <FaTableTennis />, amount: 120 },
              { name: 'Chess', icon: <FaChess />, amount: 150 },
              { name: 'Yoga', icon: <GiMeditation />, amount: 100 },
              { name: 'Handball', icon: <FaHandRock />, amount: 130 } // Handball

            ].map(event => (
              <div className="Sports-event-box" key={event.name} onClick={() => eventDetails(event.name, event.amount)}>
                <div className="icon-circle">{event.icon}</div>
                <div className="event-text">{event.name}</div>
              </div>
            ))}
          </div>

          <div id="event-details" className={`section ${activeSection === 'event-details' ? 'active' : ''}`}>
            <FaArrowLeft className="go-back-arrow" onClick={() => goBack(previousSection)} />
            <h2>Register for {eventName} Event</h2>
            <p><strong>Start Date:</strong> {eventDetailsData[eventName]?.startDate}</p>
            <p><strong>End Date:</strong> {eventDetailsData[eventName]?.endDate}</p>
            <p><strong>Start Time:</strong> {eventDetailsData[eventName]?.startTime}</p>
            <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>
            <div className="qr-code-container">
              <img src={myQRCode} alt="QR Code" style={{ width: '128px', height: '128px' }} /><br />
              <button className='in' onClick={simulatePaymentScan} disabled={isScanning}>
                {isScanning ? 'Processing Payment...' : 'Scan to Confirm Payment'}
              </button>
            </div><br />

            <form id="registration-form" onSubmit={handleSubmit}>
              <b><label htmlFor="student-name">Student Name:  </label></b>
              <input type="text" id="student-name" name="studentName" value={formData.studentName} onChange={handleChange} required /><br /><br />

              <b><label htmlFor="student-email">Student Email:  </label></b>
              <input type="email" id="student-email" name="studentEmail" value={formData.studentEmail} onChange={handleChange} required /><br /><br />

              <b><label htmlFor="phone-number">Phone Number: </label></b>
              <input type="text" id="phone-number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required /><br /><br />

              <b><label htmlFor="college-name">College Name: </label></b>
              <select id="college-name" name="collegeName" value={formData.collegeName} onChange={handleChange} required>
                <option value="">Select your college</option>
                {colleges.map((college, index) => (
                  <option key={index} value={college}>{college}</option>
                ))}
              </select><br /><br />

              <b><label htmlFor="participating-college">Participating College: </label></b>
              <select id="participating-college" name="participatingCollege" value={formData.participatingCollege} onChange={handleChange} required>
                <option value="">Select participating college</option>
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
};

export default Sports;
