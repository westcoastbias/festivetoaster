// var User = require('./userModel.js'); //find correct path
var db = require('./../config.js');
var api = require('./apiController.js');



module.exports = {
  getProfile: function (req, res) {
  },

  getUsers: function (callback) {
    var userArray = [];
    db.User.findAll()
    .then(function (allUsers) {
      allUsers.forEach(function (user) {
        db.AccountFitBit.findOne({
          where: { userID: user.id }
        })
        .then(function (fitBitAccount) {
          userArray.push({
            userID: user.id,
            username: user.username,
            steps: fitBitAccount.stepCount,
            stepsDate: fitBitAccount.stepDate
          });
        });
      });
    })
    .done(function () {
      callback( userArray );
    });
  },

  newTile: function () {

  }


};
