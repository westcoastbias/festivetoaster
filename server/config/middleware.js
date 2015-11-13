// var morgan = require('morgan'); // used for logging incoming request
var partials = require('express-partials');
var bodyParser = require('body-parser');
var helpers = require('./helpers.js'); // our custom middleware
var passport = require('passport');
var session = require('express-session');
var FacebookStrategy = require('passport-facebook').Strategy;
var cookieParser = require('cookie-parser');
var db = require('./../config.js');

var FACEBOOK_APP_ID = "1631022490495363";
var FACEBOOK_APP_SECRET = "94fb8b098c0b2ffcd7287f1a00dcd05a";

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
  app.use(express.static(__dirname + '/../../client'));
  app.use(cookieParser());
  app.use(session({ secret: 'saxaphone mongoose' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());

  //////////////////////////////
  //                          //
  //  FACEBOOK AUTH PORTION   //
  //                          //
  //////////////////////////////


  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8000/auth/facebook/callback"
  },
    function (accessToken, refreshToken, profile, done) {
      // To keep the example simple, the user's Facebook profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Facebook account with a user record in your database,
      // and return that user instead.
      db.User
        .findOrCreate({where: {
          username: profile.displayName,
          fbID: profile.id
        }})
        .spread(function (user, created) {
          // console.log(user.get({
          //   plain: true
          // }));
          // console.log(created);
        });
      return done(null, profile);
    }
  ));

  app.get('/auth/facebook',
    passport.authenticate('facebook'),
    function (req, res) {
      // The request will be redirected to Facebook for authentication, so this
      // function will not be called.
    });

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/signin' }),
    function (req, res) {
      res.redirect('/dashboard');
    });

  //////////////////////////////
  //                          //
  //   END FACEBOOK PORTION   //
  //                          //
  //////////////////////////////

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/dashboard', function (req, res) {
    res.render('index');
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


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
}


