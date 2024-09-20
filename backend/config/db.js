// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auth-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Connection events for debugging
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to the database');
});
mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

module.exports = connectDB;
