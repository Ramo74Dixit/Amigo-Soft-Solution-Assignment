const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacultySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },  
  college: { type: Schema.Types.ObjectId, ref: 'College' }, 
});

module.exports = mongoose.model('Faculty', FacultySchema);
