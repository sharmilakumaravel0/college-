import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaLaptopCode, FaChartBar, FaMicroscope, FaStethoscope, FaBook, FaPencilAlt, FaLeaf, FaUniversity, FaDollarSign } from 'react-icons/fa';
import './JobFair.css';
import myQRCode from '../Assets/myQRCode.jpg'; 

const JobFair = () => {
    const [activeSection, setActiveSection] = useState('job-fair-list');
    const [jobFairTitle, setJobFairTitle] = useState('');
    const [jobDescriptions, setJobDescriptions] = useState([]);
    const [formData, setFormData] = useState({
        collegeName: '',
        studentName: '',
        studentEmail: '',
        phoneNumber: '',
        jobRole: ''
    });
    const [paymentAmount, setPaymentAmount] = useState(null);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const navigate = useNavigate();
  
  

    const companies = [
        {
            name: 'TechCorp',
            roles: [
                {
                    title: 'Software Engineer',
                    qualifications: "Bachelor's in Computer Science or related field",
                    icon: <FaLaptopCode />
                },
                {
                    title: 'Data Scientist',
                    qualifications: "Master's in Data Science or related field",
                    icon: <FaChartBar />
                }
            ]
        },
        {
            name: 'HealthPlus',
            roles: [
                {
                    title: 'Healthcare Consultant',
                    qualifications: 'Degree in Healthcare Management',
                    icon: <FaStethoscope />
                },
                {
                    title: 'Medical Researcher',
                    qualifications: 'PhD in Medical Research or related field',
                    icon: <FaMicroscope />
                }
            ]
        },
        {
            name: 'EduWorld',
            roles: [
                {
                    title: 'Educational Consultant',
                    qualifications: 'Degree in Education or related field',
                    icon: <FaBook />
                },
                {
                    title: 'Curriculum Developer',
                    qualifications: 'Experience in curriculum design',
                    icon: <FaPencilAlt />
                }
            ]
        },
        {
            name: 'FinTrack',
            roles: [
                {
                    title: 'Financial Analyst',
                    qualifications: 'Degree in Finance or related field',
                    icon: <FaChartBar />
                },
                {
                    title: 'Investment Banker',
                    qualifications: 'Experience in banking or financial services',
                    icon: <FaDollarSign />
                }
            ]
        },
        {
            name: 'EcoGreen',
            roles: [
                {
                    title: 'Environmental Scientist',
                    qualifications: 'Degree in Environmental Science or related field',
                    icon: <FaLeaf />
                },
                {
                    title: 'Sustainability Consultant',
                    qualifications: 'Experience in sustainability projects',
                    icon: <FaUniversity />
                }
            ]
        }
    ];

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
        'NIT Trichy'
    ];

    const showJobFairDetails = (company) => {
        setJobFairTitle(company.name);
        setJobDescriptions(company.roles);
        setPaymentAmount(100); // Example registration amount
        setActiveSection('job-fair-details');
    };

    const goBackToJobFairList = () => {
        setActiveSection('job-fair-list');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
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
        navigate('/registration-summary', { state: { formData, eventTitle: jobFairTitle } });
        setFormData({
            collegeName: '',
            studentName: '',
            studentEmail: '',
            phoneNumber: '',
            jobRole: ''
        });
    };

    return (
        
        <div className='gg'>
            <div className='job-fair'>
                <div className="container">
                    {/* Job Fair List Section  */}
                    <div id="job-fair-list" className={ `section ${activeSection === 'job-fair-list' ? 'active' : ''} `}>
                        <FaArrowLeft className="go-back-arrow" onClick={() => navigate('/events')} />
                        <h1>Job Fairs</h1>
                        {companies.map((company, index) => (
                            <div key={index} className="jobfair-event-box" onClick={() => showJobFairDetails(company)}>
                                <div className="event-icon">
                                    {company.roles[0].icon} {/* Show first role icon as an example */}
                                </div>
                                {company.name}
                            </div>
                        ))}
                    </div>

                    {/* Job Fair Details Section */}
                    <div id="job-fair-details" className={  `section ${activeSection === 'job-fair-details' ? 'active' : ''}  `}>
                        <FaArrowLeft className="go-back-arrow" onClick={goBackToJobFairList} />
                        <h2>Register for {jobFairTitle} Job Fair</h2>
                        <p><strong>Start Date:</strong> November 1, 2024</p>
                        <p><strong>End Date:</strong> November 3, 2024</p>
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
    </div>

  );
};
 
                      
export default JobFair;