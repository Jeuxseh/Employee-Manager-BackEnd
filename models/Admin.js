const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  company: {
    type: String, 
    required: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;