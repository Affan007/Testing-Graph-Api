var express = require('express');
//var path = require('path');
//var expressValidator = require('express-validator');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//var mongoose = require('./mongo');
//var passport = require('passport');
//var LocalStrategy = require('passport-local');
//var expressSession = require('express-session');
var config = require('./config')[process.env.NODE_ENV || 'dev'];
//var compression = require('compression');


var app = express();
//app.use(compression());

//require('./models/usage');
//require('./models/error');
//require('./models/users');
//mongoose.connect('mongodb://localhost/gkrypt');


//app.use(bodyParser.json());
//app.use(cookieParser());
//app.use(expressSession(
//    {
//        secret: 'mySecretKey',
//        'resave': true,
//        'saveUninitialized': true,
//        cookie: {maxAge: 31556952000}
//    }
//));
//app.use(expressSession({secret: 'mySecretKey'}));
//app.use(passport.initialize());
//app.use(passport.session());


//app.use(bodyParser.json()); // parse application/json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
//app.use(expressValidator());
//comment this out before checking in
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users




//comment these 3 lines out before checking in
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/libs', express.static(__dirname + '/public/libs'));
app.use('/styles', express.static(__dirname + '/public/styles'));

//routes for user signup
// app.use('/api/user' , require('./routes/user'));
//app.use('/api/usage' , require('./routes/usage'));
//app.use('/api/error' , require('./routes/error'));
//app.use('/api/user' , require('./routes/user'));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

//adding passprot.js config
//require('./config/passport')(passport, LocalStrategy);


var server = app.listen(config.port, function() {
	console.log('server started. Listening on port '+config.port);
});
