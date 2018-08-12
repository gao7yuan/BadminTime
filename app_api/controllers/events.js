const mongoose = require('mongoose');
const Eve = mongoose.model('Event');

const getEventList = function (req, res) {
  Eve.find({}, (err, events) => {
    if (err) {
      res.status(400)
          .json(err);
    } else {
      res.status(200)
          .json(events);
    }
  });
};

const addEvent = function (req, res) {
  // for debugging:
  console.log("from api:", req.body);
  // console.log("from api:", req.body.organizer.email);
  Eve.create({
    organizer: {
      email:req.body.email,
      // password:req.body.password,
      userName:req.body.userName
    },
    participants: [{
      email:req.body.email,
      // password:req.body.password,
      userName:req.body.userName
    }],
    eventDate: req.body.eventDate,
    address: req.body.address,
    intro: req.body.intro
  }, (err, event) => {
    if (err) {
      res.status(400)
          .json(err);
    } else {
      res.status(201)
          .json(event)
    }
  });
};

const getEvent = function (req, res) {
  if (req.params && req.params.eventid) {
    Eve
        .findById(req.params.eventid)
        .exec((err, event) => {
          if (!event) {
            res
                .status(404)
                .json({
                  "message": "event not found"
                });
            return;
          } else if (err) {
            res
                .status(404)
                .json(err);
            return;
          }
          res
              .status(200)
              .json(event);
        });
  } else {
    res
        .status(404)
        .json({
          "message": "No event id in request"
        });
  }
};

const modifyEvent = function (req, res) {
  if (!req.params || !req.params.eventid) {
    res.status(404)
        .json({
          "message": "The event id is required"
        });
    return;
  }

  Eve.findById(req.params.eventid)
      .select('-organizer -createTime')
      .exec((err, event) => {
        if (!event) {
          res.status(404)
              .json({
                "message": "The event id is not found"
              });
          return;
        } else if (err) {
          res.status(400)
              .json(err);
          return;
        }

        // modify event by organizer: can change event time and/or intro
        if (req.body.userName===event.organizer.userName) {
          event.eventDate = req.body.eventDate;
          event.address = req.body.address;
          event.intro = req.body.intro;
        } else {
          // by participant: join or quit the event
          event.participants.push(req.body.user);
        }

        event.save((err, event) => {
          if (err) {
            res.status(404)
                .json(err);
          } else {
            res.status(200)
                .json(event);
          }
        })
      });
};

const deleteEvent = function (req, res) {
  const eventid = req.params.eventid;
  if (eventid) {
    Eve
        .findByIdAndRemove(eventid)
        .exec((err) => {
              if (err) {
                res
                    .status(404)
                    .json(err);
                return;
              }
              res
                  .status(204)
                  .json(null);
            }
        );
  } else {
    res
        .status(404)
        .json({
          "message": "No No event id in request"
        });
  }
};

module.exports = {
  getEventList,
  addEvent,
  getEvent,
  modifyEvent,
  deleteEvent
};