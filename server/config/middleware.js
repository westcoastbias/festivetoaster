// var morgan = require('morgan'); // used for logging incoming request
var bodyParser = require('body-parser');
var helpers = require('./helpers.js'); // our custom middleware

var partials = require('express-partials');

module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  var userRouter = express.Router();
  var apiRouter = express.Router();

  app.set('views', __dirname + '/../../client/templates');
  app.set('view engine', 'ejs');
  app.use(partials());

  // app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/dashboard', function (req, res) {
    res.render('dashboard');
  });

  app.get('/profile', function (req, res) {
    res.render('profile');
  });

  app.get('/connect', function (req, res) {
    res.render('connect');
  });

  app.get('/signin', function (req, res) {
    res.render('signin');
  });

  app.use(express.static(__dirname + '/../../client'));

  app.use('/users', userRouter); // use user router for all user request

  // authentication middleware used to decode token and made available on the request
  //app.use('/api/links', helpers.decode);
  app.use('/api', apiRouter); // user link router for link request
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  require('../controllers/userRoutes.js')(userRouter);
  require('../controllers/apiRoutes.js')(apiRouter);
};
