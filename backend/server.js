const studentRoutes = require('./routes/students');
const eventRoutes = require('./routes/events');
const adminRoutes = require('./routes/admin');

app.use('/api/students', studentRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/admin', adminRoutes);