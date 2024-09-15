import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import QRCode from 'react-qr-code'; // Import QRCode component

function JobFairs() {
  const [activeSection, setActiveSection] = useState('main-menu');
  const [jobFairTitle, setJobFairTitle] = useState('');
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  const [formData, setFormData] = useState({
    collegeName: '',
    studentName: '',
    studentEmail: '',
    phoneNumber: '',
    jobRole: ''
  });
  const [paymentAmount, setPaymentAmount] = useState(0); // Add payment amount state
  const navigate = useNavigate(); // Initialize useNavigate

  // List of colleges for the dropdown
  const colleges = [
    'Hindustan University',
    'SRM Institute of Science and Technology',
    'VIT University',
    'Amity University',
    'Manipal University',
    'Delhi University',
    'IIT Bombay',
    'IIT Delhi',
    'IIT Madras',
    'NIT Trichy',
    // Add more colleges as needed
  ];

  // Company Job Fairs with roles and qualifications
  const companies = [
    {
      name: 'TechCorp',
      roles: [
        {
          title: 'Software Engineer',
          qualifications: 'Bachelor\'s in Computer Science or related field'
        },
        {
          title: 'Data Scientist',
          qualifications: 'Master\'s in Data Science or related field'
        }
      ]
    },
    {
      name: 'HealthPlus',
      roles: [
        {
          title: 'Healthcare Consultant',
          qualifications: 'Degree in Healthcare Management'
        },
        {
          title: 'Medical Researcher',
          qualifications: 'PhD in Medical Research or related field'
        }
      ]
    },
    {
      name: 'EduWorld',
      roles: [
        {
          title: 'Educational Consultant',
          qualifications: 'Degree in Education or related field'
        },
        {
          title: 'Curriculum Developer',
          qualifications: 'Experience in curriculum design'
        }
      ]
    },
    {
      name: 'FinTrack',
      roles: [
        {
          title: 'Financial Analyst',
          qualifications: 'Degree in Finance or related field'
        },
        {
          title: 'Investment Banker',
          qualifications: 'Experience in banking or financial services'
        }
      ]
    },
    {
      name: 'EcoGreen',
      roles: [
        {
          title: 'Environmental Scientist',
          qualifications: 'Degree in Environmental Science or related field'
        },
        {
          title: 'Sustainability Consultant',
          qualifications: 'Experience in sustainability projects'
        }
      ]
    },
    // Add more companies as needed
  ];

  // Function to show job fair details for the selected company
  const showJobFairDetails = (company) => {
    setActiveSection('job-fair-details');
    setJobFairTitle(company.name);
    setJobDescriptions(company.roles);
    setSelectedRole('');
    setSelectedQualification('');
    // Set payment amount (if applicable)
    setPaymentAmount(100); // Example amount for registration
  };

  // Function to navigate back to a previous section
  const goBack = () => {
    setActiveSection('main-menu');
  };

  // Function to handle registration form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.collegeName && formData.studentName && formData.studentEmail && formData.phoneNumber && formData.collegeName !== 'Select your college') {
      // Navigate to RegistrationSummary with form data
      navigate('/registration-summary', {
        state: {
          formData: { ...formData, jobRole: selectedRole },
          eventTitle: jobFairTitle
        }
      });
      // Reset form data
      setFormData({
        collegeName: '',
        studentName: '',
        studentEmail: '',
        phoneNumber: '',
        jobRole: ''
      });
      setSelectedRole('');
      setSelectedQualification('');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  // Handle role selection to show qualifications
  const handleRoleSelection = (e) => {
    const selectedJob = jobDescriptions.find((job) => job.title === e.target.value);
    setSelectedRole(selectedJob?.title || '');
    setSelectedQualification(selectedJob?.qualifications || '');
    setFormData(prev => ({ ...prev, jobRole: selectedJob?.title || '' }));
  };

  // Generate the booking URL
  const bookingURL = `https://example.com/register?title=${encodeURIComponent(jobFairTitle)}&amount=${paymentAmount}`;

  return (
    <div className="job-fairs">
      {/* Main Menu */}
      <div id="main-menu" className={`section ${activeSection === 'main-menu' ? 'active' : ''}`}>
        <h1>Select a Company Job Fair</h1>
        {activeSection !== 'main-menu' && (
          <FaArrowLeft className="go-back-arrow" onClick={goBack} />
        )}
        {companies.map((company, index) => (
          <button key={index} onClick={() => showJobFairDetails(company)}>
            {company.name} Job Fair
          </button>
        ))}
      </div>

      {/* Job Fair Details and Registration */}
      <div id="job-fair-details" className={`section ${activeSection === 'job-fair-details' ? 'active' : ''}`}>
        <FaArrowLeft className="go-back-arrow" onClick={goBack} />
        <h1>Register for {jobFairTitle} Job Fair</h1>
        <p><strong>Start Date:</strong> November 1, 2024</p>
        <p><strong>End Date:</strong> November 3, 2024</p><br />

        {/* Registration Form */}
        <div className="registration-container">
          <form id="registration-form" onSubmit={handleSubmit}>
            <label htmlFor="student-name">Student Name:</label>
            <input
              type="text"
              id="student-name"
              name="studentName"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              required
            /><br /><br />

            <label htmlFor="student-email">Student Email:</label>
            <input
              type="email"
              id="student-email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
              required
            /><br /><br />

            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
            /><br /><br />

            <label htmlFor="college-name">College Name:</label>
            <select
              id="college-name"
              name="collegeName"
              value={formData.collegeName}
              onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
              required
            >
              <option value="">Select your college</option>
              {colleges.map((college, index) => (
                <option key={index} value={college}>{college}</option>
              ))}
            </select><br /><br />

            {/* Job Role Dropdown */}
            <label htmlFor="job-role">Select Job Role:</label>
            <select
              id="job-role"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleRoleSelection}
              required
            >
              <option value="">Select a Role</option>
              {jobDescriptions.map((job, index) => (
                <option key={index} value={job.title}>{job.title}</option>
              ))}
            </select><br /><br />

            <button type="submit">Submit Registration</button>
          </form>

          {/* Job Description Container */}
          {selectedRole && (
            <div className="job-description-container">
              <h2>Job Description</h2>
              <h3>Role: {selectedRole}</h3>
              <p><strong>Qualifications:</strong> {selectedQualification}</p>
            </div>
          )}

          {/* QR Code for payment */}
          <div className="qr-code-container">
            <QRCode value={bookingURL} size={128} />
            <p>Scan the QR code to complete your registration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobFairs;
