// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3002/login', formData);
//       localStorage.setItem('adminToken', response.data.token);
//       alert(response.data.message);
//       window.location.href = '/admin-dashboard'; // Redirect to dashboard
//     } catch (error) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;