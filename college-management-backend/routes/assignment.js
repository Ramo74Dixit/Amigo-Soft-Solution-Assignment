const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Assignment = require('../models/Assignment');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};
const uploadDirectory = path.join(__dirname, '../uploads/assignments');
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'));
    }
    cb(null, true);
  }
});
router.post('/upload', authenticateToken, upload.single('file'), async (req, res) => {
  try {
    const { subject } = req.body;
    const fileUrl = req.file.path.replace(/\\/g, '/'); 

    const newAssignment = new Assignment({
      subject,
      fileUrl,
      uploadedAt: new Date()
    });

    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    console.error('Error uploading assignment:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', authenticateToken, async (req, res) => {
  try {
    console.log('GET /assignments route hit'); 
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (error) {
    console.error('Error fetching assignments:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
