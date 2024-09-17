const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  enrollmentNumber: { type: String, required: true },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' }, 
});

module.exports = mongoose.model('Student', studentSchema);
