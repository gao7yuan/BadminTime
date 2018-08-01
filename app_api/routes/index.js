const express = require('express');
const router = express.Router();
const ctrlEvents = require('../controllers/events');

// events
router
    .route('/events')
    .get(ctrlEvents.getEventList)
    .post(ctrlEvents.addEvent);

router
    .route('/events/:eventid')
    .get(ctrlEvents.getEvent)
    .put(ctrlEvents.modifyEvent)
    .delete(ctrlEvents.deleteEvent);

module.exports = router;