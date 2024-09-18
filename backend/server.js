const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auth-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body; // Extract data from request body
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = new User({ username, email, password: hashedPassword }); // Create new user
        await newUser.save(); // Save user to database
        res.status(201).send('User created'); // Respond with success
    } catch (error) {
        res.status(500).send('Error creating user'); // Handle error
    }
});


// ... (login route and other middleware)

app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});
