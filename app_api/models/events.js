const mongoose = require('mongoose');
require('./users');

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