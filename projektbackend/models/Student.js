const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mongoose is included and used to create studentSchema with correct data-type
let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
}, {
  collection: 'students'
})

// The schema is exported as Student
module.exports = mongoose.model('Student', studentSchema)