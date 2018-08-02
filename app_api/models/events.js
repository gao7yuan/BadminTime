const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    require: true
  },
  lastName : {
    type: String,
    required: true
  }
});

const eventSchema = new mongoose.Schema({
  organizer: {
    type: userSchema,
    required: true,
  },
  participants: {
    type: [userSchema],
    required: true,
  },
  createTime: {
    type: Date,
    'default': Date.now,
  },
  eventTime: {
    type: Date,
    required: true,
  },
  intro: {
    type: String,
  }
});

mongoose.model('Event', eventSchema);