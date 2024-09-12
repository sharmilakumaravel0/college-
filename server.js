const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000; // or any port you prefer

app.use(bodyParser.json());
app.use(express.static('public'));

// Path to the JSON file
const registrationsFilePath = path.join(__dirname, 'registrations.json');

// Endpoint to get all registrations
app.get('/api/registrations', (req, res) => {
  fs.readFile(registrationsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read registrations file' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to add a new registration
app.post('/api/registrations', (req, res) => {
  const newRegistration = req.body;

  fs.readFile(registrationsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read registrations file' });
    }

    const registrations = JSON.parse(data);
    registrations.push(newRegistration);

    fs.writeFile(registrationsFilePath, JSON.stringify(registrations, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save registration' });
      }
      res.status(201).json(newRegistration);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
