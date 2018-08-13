const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.profileRead = function(req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
        .findOne({email: req.payload.email})
        .exec(function(err, user) {
          res.status(200)
              .json(user);
        });
  }

};