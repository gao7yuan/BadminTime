const mongoose = require('mongoose');
const Eve = mongoose.model('Event');
const User = mongoose.model('User');

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
  _getUser(req, res, function (req, res, userName) {
    Eve.create({
      organizer: userName,
      participants: [userName],
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

  _getUser(req, res, function (req, res, userName) {
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
          if (userName === event.organizer) {
            event.eventDate = req.body.eventDate;
            event.address = req.body.address;
            event.intro = req.body.intro;
          } else {
            // by participant: join or quit the event
            if (event.participants.indexOf(userName) === -1) {
              event.participants.push(userName);
            } else {
              event = event.filter(function (ele, index) {
                return (ele !== userName);
              });
            }
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
  });
};

const deleteEvent = function (req, res) {
  const eventid = req.params.eventid;
  _getUser(req, res, function (req, res, userName) {
    if (eventid) {
      Eve
          .findOne({
            _id: eventid,
            organizer: userName
          })
          .remove()
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
  });
};

const _getUser = function (req, res, callback) {
  if (req.payload && req.payload.email) {
    User
        .findOne({email: req.payload.email})
        .exec(function (err, user) {
          if (!user) {
            res
                .status(404)
                .json({
                  "message": "User not found"
                });
            return;
          } else if (err) {
            console.log(err);
            res
                .status(404)
                .json(err);
            return;
          }
          callback(req, res, user.name)
        });
  } else {
    res
        .status(404)
        .json({
          "message": "User not found"
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