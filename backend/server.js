const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Here you would handle the contact form submission,
  // e.g., send an email or store in a database.
  console.log('Contact form submission:', { name, email, message });

  res.status(200).json({ success: true, message: 'Message received' });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

