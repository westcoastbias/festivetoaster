var apiController = require('./apiController.js');


module.exports = function (app) {
  // app === apiRouter injected from middlware.js

  app.get('/fitbit', apiController.fitbit);
  app.get('/twitter', apiController.twitter);
  app.get('/github', apiController.github);
};
