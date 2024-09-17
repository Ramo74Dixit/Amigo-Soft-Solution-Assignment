const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collegeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  affiliationCode: { type: String, required: true, unique: true, index: true },   
});
collegeSchema.pre('save', function (next) {
  this.affiliationCode = this.affiliationCode.toLowerCase();
  next();
});

module.exports = mongoose.model('College', collegeSchema);
