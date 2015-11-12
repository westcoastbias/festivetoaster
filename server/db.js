// var mysql = require('mysql');


// var connection = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "chat"
// });

// connection.connect();

// module.exports = connection;


// var Sequelize = require("sequelize");
// var orm = new Sequelize("chat", "root", "");


// // we define the models we need using js--we don't need a schema file!
// var User = orm.define('User', {
//   username: Sequelize.STRING
// });

// var Message = orm.define('Message', {
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// // puts a UserId column on each Message instance
// // also gives us the `.setUser` method, available inside the .success callback
// // after creating a new instance of Message
// Message.belongsTo(User);
// // enables bi-directional associations between Users and Messages
// User.hasMany(Message);


// User.sync();
// Message.sync();
// // creates these tables in MySQL if they don't already exist. Pass in {force: true}
// // to drop any existing user and message tables and make new ones.

// exports.User = User;
// exports.Message = Message;