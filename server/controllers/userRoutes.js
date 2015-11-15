var userController = require('./userController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  app.get('/profile', userController.getProfile);
  app.post('/tile', userController.newTile);
  app.get('/users', userController.getUsers);
};
