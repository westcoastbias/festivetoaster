var apiController = require('./apiController.js');


module.exports = function (app) {
  // app === apiRouter injected from middlware.js

  app.get('/fitbit', userController.fitbit);
  app.get('/twitter', userController.twitter);
  app.get('/github', userController.github);
};
