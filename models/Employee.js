const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  dni: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  task: [{
    type: ObjectId,
    ref: 'Task'
  }],
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  schedule: {
    monday: [{
      initHour: {
        type: Number,
        required: true
      },
      endHour: {
        type: Number,
        required: true
      }
    }],
    tuesday: [{
      initHour: {
        type: Number,
        required: true
      },
      endHour: {
        type: Number,
        required: true
      }
    }],
    wednesday: [{
      initHour: {
        type: Number,
        required: true
      },
      endHour: {
        type: Number,
        required: true
      }
    }],
    thursday: [{
      initHour: {
        type: Number,
        required: true
      },
      endHour: {
        type: Number,
        required: true
      }
    }],
    friday: [{
      initHour: {
        type: Number,
        required: true
      },
      endHour: {
        type: Number,
        required: true
      }
    }],
    saturday: [{
      initHour: {
        type: Number,
        required: true
      },
      endHour: {
        type: Number,
        required: true
      }
    }],
    sunday: [{
      initHour: {
        type: Number,
        required: true
      },
      endHour: {
        type: Number,
        required: true
      }
    }],
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;