const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

const ctrlEvents = require('../controllers/events');
const ctrlAuth = require('../controllers/authentication');

// events
router
    .route('/events')
    .get(ctrlEvents.getEventList)
    .post(auth, ctrlEvents.addEvent);

router
    .route('/events/:eventid')
    .get(ctrlEvents.getEvent)
    .put(auth, ctrlEvents.modifyEvent)
    .delete(auth, ctrlEvents.deleteEvent);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;