const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const employeeSchema = new Schema({
  adminId:{
    type: ObjectId,
    ref: 'Admin',
    require: true
  },
  imageUrl:{
    type: String,
    default: 'https://res.cloudinary.com/mbcloud/image/upload/v1552231082/event-up-events/clmegdwiztitevgptcwi.png'
  },
  username: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
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
    monday: {
      initHour: {
        type: String
      },
      endHour: {
        type: String
      }
    },
    tuesday: {
      initHour: {
        type: String
      },
      endHour: {
        type: String
      }
    },
    wednesday: {
      initHour: {
        type: String
      },
      endHour: {
        type: String
      }
    },
    thursday: {
      initHour: {
        type: String
      },
      endHour: {
        type: String
      }
    },
    friday: {
      initHour: {
        type: String
      },
      endHour: {
        type: String
      }
    },
    saturday: {
      initHour: {
        type: String
      },
      endHour: {
        type: String
      }
    },
    sunday: {
      initHour: {
        type: String
      },
      endHour: {
        type: String
      }
    },
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;