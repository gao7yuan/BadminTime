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
  userName: {
    type: String,
    unique: true,
    require: true
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
  eventDate: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  intro: {
    type: String,
  }
});

mongoose.model('Event', eventSchema);