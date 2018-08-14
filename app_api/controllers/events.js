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
            res.status(404)
                .json({
                  "message": "event not found"
                });
          } else if (err) {
            res.status(404)
                .json(err);
          } else {
            res.status(200)
                .json(event);
          }
        });
  } else {
    res.status(404)
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
  }

  _getUser(req, res, function (req, res, userName) {
    Eve
        .findById(req.params.eventid)
        .select('-createTime')
        .exec((err, event) => {
          if (!event) {
            res.status(404)
                .json({
                  "message": "The event id is not found"
                });
          } else if (err) {
            res.status(400)
                .json(err);
          } else {
            // modify event by organizer: can change event time and/or intro
            if (userName === event.organizer) {
              if (req.body.eventDate) {
                event.eventDate = req.body.eventDate;
              }
              if (req.body.address) {
                event.address = req.body.address;
              }
              if (req.body.intro) {
                event.intro = req.body.intro;
              }
            } else {
              // by participant: join or quit the event
              if (event.participants.indexOf(userName) === -1) {
                event.participants.push(userName);
              } else {
                event.participants = event.participants.filter(function (ele, index) {
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
          }
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
          .exec((err, event) => {
                if (err) {
                  res.status(404)
                      .json(err);
                } else if (!event) {
                  res.status(404)
                      .json({
                        "message": "only organizer can delete the event"
                      });
                } else {
                  event.remove();
                  res.status(204)
                      .json(null);
                }
              }
          );
    } else {
      res
          .status(404)
          .json({
            "message": "No event id in request"
          });
    }
  });
};

const _getUser = function (req, res, callback) {
  if (req.payload && req.payload.email) {
    User
        .findOne({_id: req.payload._id})
        .exec(function (err, user) {
          if (!user) {
            res.status(404)
                .json({
                  "message": "User not found"
                });
          } else if (err) {
            res.status(404)
                .json(err);
          }
          callback(req, res, user.name)
        });
  } else {
    res.status(404)
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