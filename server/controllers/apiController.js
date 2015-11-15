// var User = require('./userModel.js'); //find correct path
var db = require('./../config.js');


module.exports = {
  fitbit: {
    //comment all this back in when working on it
    get: function (req, res) {
      var userID = req.userID;
      db.AccountFitBit.findOne({
        where: { userID: userID }
      })
      .then(function (fitBitAccount) {
        res.json(fitBitAccount);
      });
    },
    post: function (req, res) {
      
    //   db.AccountFitBit.findOrCreate({where: placeholder/*fill this in*/})
    //     .then(function(account) {
    //       //fill this in
    //     });
    }

  },

  twitter: {
    //comment all this back in when working on it
    get: function (req, res) {
    //       db.AccountTwitter.findOne(/*fill this in*/)
    //         .then(function(account) {
    //           res.json(account);
    //         });
        },
    post: function (req, res) {
    //   db.AccountTwitter.findOrCreate({where: placeholder/*fill this in*/})
    //     .then(function(account) {
    //       //fill this in
    //     });
    }

  },

  github: {
    //comment all this back in when working on it
    get: function (req, res) {
    //       db.AccountGitHub.findOne(/*fill this in*/)
    //         .then(function(account) {
    //           res.json(account);
    //         });
        },
    post: function (req, res) {
    //   db.AccountGitHub.findOrCreate({where: placeholder/*fill this in*/})
    //     .then(function(account) {
    //       //fill this in
    //     });
    }
  },

  facebook: {
    //comment all this back in when working on it
    get: function (req, res) {
    //       db.AccountFacebook.findOne(/*fill this in*/)
    //         .then(function(account) {
    //           res.json(account);
    //         });
        },
    post: function (req, res) {
    //   db.AccountFacebook.findOrCreate({where: placeholder/*fill this in*/})
    //     .then(function(account) {
    //       //fill this in
    //     });
    }
  }
};
