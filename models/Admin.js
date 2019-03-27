const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

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
  employees: [{
    type: ObjectId,
    ref: 'Employee'
  }],
  company: {
    type: String,
    required: true,
  },
  phone: {
    type:  Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;