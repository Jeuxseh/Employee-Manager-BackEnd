const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl:{
    type: String,
    default: 'https://res.cloudinary.com/mbcloud/image/upload/v1552231082/event-up-events/clmegdwiztitevgptcwi.png'
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