const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  organizer: {
    type: String,
    required: true,
  },
  participants: {
    type: [String],
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