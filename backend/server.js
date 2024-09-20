const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Add this line


const connectDB = require('./config/db'); // Adjust based on your folder structure


const adminRoutes = require('./routes/admin');

const app = express();
const PORT = 5002;
const JWT_SECRET = 'your_jwt_secret_key';

app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());

// Connect to MongoDB
connectDB();

const transporter = nodemailer.createTransport({
    service: 'gmail', // or another service
    auth: {
      user: 'your-email@gmail.com', // Your email
      pass: 'your-email-password'    // Your email password (or app password)
    }
  });


// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/eventManagement', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

// Routes
app.use('/admin', adminRoutes);

// Email sending route
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, studentId, email, phone, message } = req.body;

    // Configure nodemailer or your email service
    const transporter = nodemailer.createTransport({
        // Your email configuration
    });

    const mailOptions = {
        from: email,
        to: 'your-email@example.com',
        subject: `Contact Us Message from ${name}`,
        text: `Name: ${name}\nStudent ID: ${studentId}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send message.' });
    }
});
 

// mongoose.connect('mongodb://localhost:27017/auth-app', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// Update the UserSchema to include a username field
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).send('Username or email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Invalid credentials');
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).send('Invalid credentials');
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
