import React, { useState } from 'react';
import { FaArrowLeft, FaCode, FaChartBar, FaLock, FaPenNib, FaComments, FaChalkboardTeacher } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import myQRCode from '../Assets/myQRCode.jpg'; 
import './WorkShop.css';

const Workshops = () => {
  const [activeSection, setActiveSection] = useState('workshops-list');
  const [workshopTitle, setWorkshopTitle] = useState('');
  const [formData, setFormData] = useState({
    collegeName: '',
    studentName: '',
    studentEmail: '',
    phoneNumber: '',
    participatingCollege: ''  // Added state for Participating College
  });
  const [paymentAmount, setPaymentAmount] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const showWorkshopDetails = (workshopName, amount) => {
    setWorkshopTitle(workshopName);
    setPaymentAmount(amount);
    setActiveSection('workshop-details');
  };

  const goBackToWorkshops = () => {
    setActiveSection('workshops-list');
  };

  const goBackToMainMenu = () => {
    navigate('/events');
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
    navigate('/registration-summary', { 
      state: { 
        formData, 
        eventTitle: workshopTitle, 
        paymentCompleted 
      } 
    });
    setFormData({
      collegeName: '',
      studentName: '',
      studentEmail: '',
      phoneNumber: '',
      participatingCollege: ''  // Reset participatingCollege
    });
  };

  const workshops = [
    { name: 'Web Development', amount: 200, icon: <FaCode /> },
    { name: 'Data Science', amount: 300, icon: <FaChartBar /> },
    { name: 'Machine Learning', amount: 250, icon: <FaLock /> },
    { name: 'Cybersecurity', amount: 150, icon: <FaLock /> },
    { name: 'Creative Writing', amount: 100, icon: <FaPenNib /> },
    { name: 'Public Speaking', amount: 120, icon: <FaComments /> },
    { name: 'Leadership Skills', amount: 150, icon: <FaChalkboardTeacher /> },
  ];

  const eventDetailsData = {
    'Web Development': { startDate: '2024-10-15', endDate: '2024-10-17' },
    'Data Science': { startDate: '2024-10-18', endDate: '2024-10-20' },
    'Machine Learning': { startDate: '2024-10-21', endDate: '2024-10-23' },
    'Cybersecurity': { startDate: '2024-10-24', endDate: '2024-10-26' },
    'Creative Writing': { startDate: '2024-10-27', endDate: '2024-10-29' },
    'Public Speaking': { startDate: '2024-10-30', endDate: '2024-11-01' },
    'Leadership Skills': { startDate: '2024-11-02', endDate: '2024-11-04' },
  };

  return (
    <div className='qw'>
      <div className='workshop-container'>
        <div id="workshops-list" className={`section ${activeSection === 'workshops-list' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={goBackToMainMenu} />
          <h1>Workshops</h1>
          {workshops.map(workshop => (
            <div key={workshop.name} className="Workshop-event-box" onClick={() => showWorkshopDetails(workshop.name, workshop.amount)}>
              <span className="event-icon">{workshop.icon}</span>
              {workshop.name}
            </div>
          ))}
        </div>

        <div id="workshop-details" className={`section ${activeSection === 'workshop-details' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={goBackToWorkshops} />
          <h2>Register for {workshopTitle} Workshop</h2>
          <p><strong>Start Date:</strong> {eventDetailsData[workshopTitle]?.startDate}</p>
          <p><strong>End Date:</strong> {eventDetailsData[workshopTitle]?.endDate}</p>
          <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>

          <div className="qr-code-container">
            <img src={myQRCode} alt="QR Code" style={{ width: '128px', height: '128px' }} /><br></br>
            <button className='in' onClick={simulatePaymentScan} disabled={isScanning}>
              {isScanning ? 'Processing Payment...' : 'Scan to Confirm Payment'}
            </button>
          </div><br />

          <form id="registration-form" onSubmit={handleSubmit}>
            <b><label htmlFor="student-name">Student Name:</label></b>
            <input
              type="text"
              id="student-name"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="student-email">Student Email:</label></b>
            <input
              type="email"
              id="student-email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="phone-number">Phone Number:</label></b>
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="college-name">College Name:</label></b>
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
            <b><label htmlFor="participating-college">Participating College:</label></b>
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

export default Workshops;
