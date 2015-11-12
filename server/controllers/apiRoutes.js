var apiController = require('./apiController.js');


module.exports = function (app) {
  // app === apiRouter injected from middlware.js

  app.get('/fitbit', apiController.fitbit.get);
  app.get('/twitter', apiController.twitter.get);
  app.get('/github', apiController.github.get);
  app.get('/facebook', apiController.facebook.get);
  app.post('/fitbit', apiController.fitbit.post);
  app.post('/twitter', apiController.twitter.post);
  app.post('/github', apiController.github.post);
  app.post('/facebook', apiController.facebook.post);

};
