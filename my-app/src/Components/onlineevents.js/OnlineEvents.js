import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnlineEvents.css';
import { FaArrowLeft, FaCamera, FaImage, FaLaugh, FaGlasses, FaSearch } from 'react-icons/fa';
import myQRCode from '../Assets/myQRCode.jpg';

const OnlineEvents = () => {
    const [activeSection, setActiveSection] = useState('online-events-list');
    const [eventName, setEventName] = useState('');
    const [formData, setFormData] = useState({
        collegeName: '',
        studentName: '',
        studentEmail: '',
        phoneNumber: ''
    });
    const [paymentAmount, setPaymentAmount] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();
    const showEventDetails = (eventName) => {
        setEventName(eventName);
        const paymentAmounts = {
            'Clickography': 100,
            'Freeze-it (Photography)': 150,
            'Memezone (Meme Creation)': 200,
            'Virtual Reality Quiz': 250,
            'Online Scavenger Hunt': 120
        };
        setPaymentAmount(paymentAmounts[eventName]);
        setActiveSection('event-details');
    };

    const goBackToEvents = () => {
        navigate('/events'); // Navigate back to the events page
    };

    const goBackToOnlineEvents = () => {
        setActiveSection('online-events-list'); // Switch back to the online events list
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
            setPaymentCompleted(true);
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
            phoneNumber: ''
        });
    };

    const eventDetailsData = {
        'Clickography': { startDate: '2024-09-30', endDate: '2024-09-30' },
        'Freeze-it (Photography)': { startDate: '2024-10-01', endDate: '2024-10-01' },
        'Memezone (Meme Creation)': { startDate: '2024-10-02', endDate: '2024-10-02' },
        'Virtual Reality Quiz': { startDate: '2024-10-03', endDate: '2024-10-03' },
        'Online Scavenger Hunt': { startDate: '2024-10-04', endDate: '2024-10-04' }
    };

    const eventIcons = {
        'Clickography': <FaCamera />,
        'Freeze-it (Photography)': <FaImage />,
        'Memezone (Meme Creation)': <FaLaugh />,
        'Virtual Reality Quiz': <FaGlasses />,
        'Online Scavenger Hunt': <FaSearch />
    };

    return (
        <div className='f'>
            <div className="online-events-container">
                <div id="online-events-list" className={`section ${activeSection === 'online-events-list' ? 'active' : ''}`}>
                    <FaArrowLeft className="go-back-arrow" onClick={goBackToEvents} />
                    <h1>Online Events</h1>
                    {Object.keys(eventDetailsData).map(event => (
                        <div key={event} className="Online-event-box" onClick={() => showEventDetails(event)}>
                            <span className="event-icon">{eventIcons[event]}</span>
                            {event}
                        </div>
                    ))}
                </div>

                <div id="event-details" className={`section ${activeSection === 'event-details' ? 'active' : ''}`}>
                    <FaArrowLeft className="go-back-arrow" onClick={goBackToOnlineEvents} />
                    <h2>Register for {eventName} Event</h2>
                    <p><strong>Start Date:</strong> {eventDetailsData[eventName]?.startDate}</p>
                    <p><strong>End Date:</strong> {eventDetailsData[eventName]?.endDate}</p>
                    <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>

                    <div className="qr-code-container">
            <img src={myQRCode} alt="QR Code" style={{ width: '128px', height: '128px' }} /><br></br>
            <button className='in' onClick={simulatePaymentScan} disabled={isScanning}>
              {isScanning ? 'Processing Payment...' : 'Scan to Confirm Payment'}
            </button>
          </div><br />


          <form id="registration-form" onSubmit={handleSubmit}>
            <b><label htmlFor="student-name">Student Name: </label></b>
            <input
              type="text"
              id="student-name"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="student-email">Student Email: </label></b>
            <input
              type="email"
              id="student-email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="phone-number">Phone Number: </label></b>
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="college-name">College Name: </label></b>
            <select
              id="college-name"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              required
            >
              <option value="">Select your college</option>
              {['Indian Institute of Technology Madras (IIT Madras)', 'Anna University', 'Loyola College', 'Madras Christian College (MCC)', 'Presidency College', 'SRM Institute of Science and Technology', 'Sathyabama Institute of Science and Technology', 'Stella Maris College', 'Hindustan Institute of Technology and Science (HITS)', 'Vellore Institute of Technology (VIT)', 'Saveetha Institute of Medical and Technical Sciences'].map((college, index) => (
                <option key={index} value={college}>{college}</option>
              ))}
            </select><br /><br />

            {/* Participating College Field */}
            <b><label htmlFor="participating-college">Participating College: </label></b>
            <select
              id="participating-college"
              name="participatingCollege"
              value={formData.participatingCollege}
              onChange={handleChange}
              required
            >
              <option value="">Select participating college</option>
              {['IIT Madras', 'Anna University', 'VIT', 'SRM Institute', 'Presidency College','Loyola College', 'Madras Christian College (MCC)', 'Presidency College', 'SRM Institute of Science and Technology', 'Sathyabama Institute of Science and Technology', 'Stella Maris College', 'Hindustan Institute of Technology and Science (HITS)', 'Vellore Institute of Technology (VIT)', 'Saveetha Institute of Medical and Technical Sciences'].map((college, index) => (
                <option key={index} value={college}>{college}</option>
              ))}
            </select><br /><br />

            <button type="submit">Submit Registration</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlineEvents;
