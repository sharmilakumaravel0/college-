// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminRegister = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3002/register', formData);
//       alert(response.data.message);
//       window.location.href = '/admin-login'; // Redirect to login page
//     } catch (error) {
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default AdminRegister;