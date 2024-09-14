import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon from react-icons

function JobFairs() {
  const [activeSection, setActiveSection] = useState('main-menu');
  const [jobFairTitle, setJobFairTitle] = useState('');
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');

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

  // Company Job Fairs with roles and qualifications
  const companies = [
    {
      name: 'Google',
      roles: [
        {
          title: 'Software Engineer',
          qualifications: 'BSc/MSc in Computer Science or related field, experience with Python, Java, C++.'
        },
        {
          title: 'Product Manager',
          qualifications: 'MBA or equivalent experience, strong communication and leadership skills.'
        },
        {
          title: 'Data Scientist',
          qualifications: 'Experience with machine learning, data analysis, and Python, R, or SQL.'
        }
      ]
    },
    {
      name: 'Microsoft',
      roles: [
        {
          title: 'Cloud Engineer',
          qualifications: 'Experience with Azure, AWS, or GCP, and knowledge of cloud security.'
        },
        {
          title: 'Software Developer',
          qualifications: 'BSc/MSc in Software Engineering, experience with C#, .NET, or JavaScript.'
        },
        {
          title: 'UX Designer',
          qualifications: 'Experience with UI/UX design tools like Figma, Adobe XD, and prototyping skills.'
        }
      ]
    },
    {
      name: 'Amazon',
      roles: [
        {
          title: 'Operations Manager',
          qualifications: 'Experience in supply chain management, leadership, and problem-solving skills.'
        },
        {
          title: 'DevOps Engineer',
          qualifications: 'Experience with automation tools, Docker, Kubernetes, and cloud services.'
        },
        {
          title: 'Front-End Developer',
          qualifications: 'Proficiency in HTML, CSS, JavaScript, and frameworks like React or Angular.'
        }
      ]
    },
    {
      name: 'Tesla',
      roles: [
        {
          title: 'Mechanical Engineer',
          qualifications: 'Degree in Mechanical Engineering, CAD experience, and problem-solving skills.'
        },
        {
          title: 'Software Engineer',
          qualifications: 'Experience in embedded systems, C++, Python, and system architecture.'
        },
        {
          title: 'Data Analyst',
          qualifications: 'Strong Excel skills, experience with SQL, Python, or R for data analysis.'
        }
      ]
    },
    {
      name: 'Meta',
      roles: [
        {
          title: 'AR/VR Engineer',
          qualifications: 'Experience with 3D development, Unity, or Unreal Engine, and AR/VR devices.'
        },
        {
          title: 'Full Stack Developer',
          qualifications: 'Proficiency in front-end/back-end technologies like Node.js, React, and databases.'
        },
        {
          title: 'Product Designer',
          qualifications: 'Experience with product design lifecycle, prototyping, and design software.'
        }
      ]
    },
    {
      name: 'Apple',
      roles: [
        {
          title: 'iOS Developer',
          qualifications: 'Experience in Swift, Objective-C, and iOS application development.'
        },
        {
          title: 'Machine Learning Engineer',
          qualifications: 'Experience with machine learning models, TensorFlow, and big data technologies.'
        },
        {
          title: 'Security Analyst',
          qualifications: 'Strong understanding of cybersecurity threats, penetration testing, and monitoring tools.'
        }
      ]
    },
    {
      name: 'IBM',
      roles: [
        {
          title: 'AI Researcher',
          qualifications: 'PhD or MSc in AI or ML, with experience in deep learning frameworks and algorithms.'
        },
        {
          title: 'Software Tester',
          qualifications: 'Experience in automated testing tools, scripting languages, and QA processes.'
        },
        {
          title: 'Data Engineer',
          qualifications: 'Experience with ETL pipelines, data warehousing, and cloud data platforms.'
        }
      ]
    }
  ];

  // Function to show job fair details for the selected company
  const showJobFairDetails = (company) => {
    setActiveSection('job-fair-details');
    setJobFairTitle(company.name);
    setJobDescriptions(company.roles);
    setSelectedRole('');
    setSelectedQualification('');
  };

  // Function to navigate back to a previous section
  const goBack = () => {
    setActiveSection('main-menu');
  };

  // Function to handle registration form submission
  const submitRegistration = () => {
    const collegeName = document.getElementById('college-name').value;
    const studentName = document.getElementById('student-name').value;
    const studentEmail = document.getElementById('student-email').value;
    const phoneNumber = document.getElementById('phone-number').value;

    if (collegeName && studentName && studentEmail && phoneNumber && collegeName !== 'Select your college') {
      alert('Registration Successful!');
      document.getElementById('registration-form').reset();
    } else {
      alert('Please fill in all the fields.');
    }
  };

  // Handle role selection to show qualifications
  const handleRoleSelection = (e) => {
    const selectedJob = jobDescriptions.find((job) => job.title === e.target.value);
    setSelectedRole(selectedJob.title);
    setSelectedQualification(selectedJob.qualifications);
  };

  return (
    <>
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
            <form id="registration-form">
              <label htmlFor="student-name">Student Name:</label>
              <input type="text" id="student-name" name="studentName" required placeholder="Enter your Full name" /><br /><br />

              <label htmlFor="student-email">Student Email:</label>
              <input type="email" id="student-email" name="studentEmail" required placeholder="Enter your Email id" /><br /><br />

              <label htmlFor="phone-number">Phone Number:</label>
              <input type="text" id="phone-number" name="phoneNumber" required placeholder="Enter your Phone number" /><br /><br />

              <label htmlFor="college-name">College Name:</label>
              <select id="college-name" name="collegeName" required>
                {colleges.map((college, index) => (
                  <option key={index} value={college}>{college}</option>
                ))}
              </select><br /><br />

              {/* Job Role Dropdown */}
              <label htmlFor="job-role">Select Job Role:</label>
              <select id="job-role" name="jobRole" required onChange={handleRoleSelection}>
                <option value="">Select a Role</option>
                {jobDescriptions.map((job, index) => (
                  <option key={index} value={job.title}>{job.title}</option>
                ))}
              </select><br /><br />

              <button type="button" onClick={submitRegistration}>Submit Registration</button>
            </form>

            {/* Job Description Container */}
            {selectedRole && (
              <div className="job-description-container">
                <h2>Job Description</h2>
                <h3>Role: {selectedRole}</h3>
                <p><strong>Qualifications:</strong> {selectedQualification}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobFairs;
