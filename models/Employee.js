const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const employeeSchema = new Schema({
  adminId:{
    type: ObjectId,
    ref: 'Admin',
    require: true
  },

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
        type: Number
      },
      endHour: {
        type: Number
      }
    }],
    tuesday: [{
      initHour: {
        type: Number
      },
      endHour: {
        type: Number
      }
    }],
    wednesday: [{
      initHour: {
        type: Number
      },
      endHour: {
        type: Number
      }
    }],
    thursday: [{
      initHour: {
        type: Number
      },
      endHour: {
        type: Number
      }
    }],
    friday: [{
      initHour: {
        type: Number
      },
      endHour: {
        type: Number
      }
    }],
    saturday: [{
      initHour: {
        type: Number
      },
      endHour: {
        type: Number
      }
    }],
    sunday: [{
      initHour: {
        type: Number
      },
      endHour: {
        type: Number
      }
    }],
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;