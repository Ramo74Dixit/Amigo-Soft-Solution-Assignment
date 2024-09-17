const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Admin = require('../models/Admin');
const College = require('../models/College');
const Student = require('../models/Student');
const Faculty = require('../models/Faculty');
const router = express.Router();
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
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, affiliationCode, enrollmentNumber, department, employeeId } = req.body;

    let existingUser;
    if (role === 'Admin') existingUser = await Admin.findOne({ email });
    if (role === 'College') existingUser = await College.findOne({ email });
    if (role === 'Student') existingUser = await Student.findOne({ email });
    if (role === 'Faculty') existingUser = await Faculty.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: `${role} already exists` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser;
    if (role === 'Admin') {
      newUser = new Admin({ name, email, password: hashedPassword, employeeId });
    } else if (role === 'College') {
      newUser = new College({ name, email, password: hashedPassword, affiliationCode, employeeId });
    } else if (role === 'Student') {
      const college = await College.findOne({ affiliationCode });
      if (!college) {
        return res.status(400).json({ message: 'Invalid college affiliation code' });
      }
      newUser = new Student({
        name,
        email,
        password: hashedPassword,
        enrollmentNumber,
        college: college._id,
        employeeId,
      });
    } else if (role === 'Faculty') {
      const college = await College.findOne({ affiliationCode });
      if (!college) {
        return res.status(400).json({ message: 'Invalid college affiliation code' });
      }
      newUser = new Faculty({
        name,
        email,
        password: hashedPassword,
        department,
        college: college._id,
        employeeId,
      });
    }

    await newUser.save();
    res.status(201).json({ message: `${role} registered successfully` });
  } catch (error) {
    console.error('Register Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;

    if (role === 'Admin') {
      user = await Admin.findOne({ email });
    } else if (role === 'College') {
      user = await College.findOne({ email });
    } else if (role === 'Student') {
      user = await Student.findOne({ email });
    } else if (role === 'Faculty') {
      user = await Faculty.findOne({ email });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, role });
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/students', authenticateToken, async (req, res) => {
  const { role, id } = req.user;

  try {
    let collegeId;

    if (role === 'College') {
      collegeId = id;
    } else if (role === 'Faculty') {
      const faculty = await Faculty.findById(id);
      if (!faculty) {
        return res.status(404).json({ message: 'Faculty not found' });
      }
      collegeId = faculty.college;
    } else {
      return res.status(403).json({ message: 'Access denied. Only Colleges and Faculty can access this route.' });
    }

    const students = await Student.find({ college: collegeId }).populate('college');
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/faculty', authenticateToken, async (req, res) => {
  const collegeId = req.user.id;
  try {
    const faculty = await Faculty.find({ college: collegeId }).populate('college');
    res.json(faculty);
  } catch (error) {
    console.error('Error fetching faculty:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
router.delete('/students/:id', authenticateToken, async (req, res) => {
  const studentId = req.params.id;

  try {
    const student = await Student.findByIdAndDelete(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
router.delete('/faculty/:id', authenticateToken, async (req, res) => {
  const facultyId = req.params.id;

  try {
    const faculty = await Faculty.findByIdAndDelete(facultyId);

    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    res.json({ message: 'Faculty deleted successfully' });
  } catch (error) {
    console.error('Error deleting faculty:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
router.put('/students/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, email, enrollmentNumber } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, email, enrollmentNumber },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(updatedStudent);
  } catch (error) {
    console.error('Error updating student:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
