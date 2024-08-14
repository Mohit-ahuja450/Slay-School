// backend/index.js
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');  // For generating unique referral codes

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Hardcoded credentials for demonstration
const USERNAME = 'testuser';
const PASSWORD = 'password123';

app.post('/login', (req, res) => {
  const { username, password, rememberMe } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const referralCode = uuidv4(); // Generate unique referral code

    // Set a cookie if "Remember Me" is checked
    if (rememberMe) {
      res.cookie('username', username, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // 30 days
      res.cookie('referralCode', referralCode, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // 30 days
    }
    res.json({ success: true, message: 'Login successful', referralCode });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

// New route to handle paraphrasing
app.post('/paraphrase', (req, res) => {
  const { text } = req.body;
  const paraphrasedText = `The text is paraphrased: ${text}`;
  res.json({ paraphrasedText });
});

// New route to handle "Sound More Academic"
app.post('/sound-academic', (req, res) => {
  const { text } = req.body;
  const academicText = `Sounding academic: ${text}`;
  res.json({ academicText });
});

// New route to handle file uploads
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Save files with unique names
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ success: true, message: 'File uploaded successfully', filePath: req.file.path });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
