// módulos
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var session = require('express-session');
var flash = require('connect-flash');
var sessionStore = new session.MemoryStore;
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configurações de autenticação
app.use(cookieParser('secret'));
app.use(session({
    cookie: {
        maxAge: 900000
    },
    store: sessionStore,
    saveUninitialized: true,
    resave: true,
    secret: 'secret'
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

load('controllers')
    .then('configuration')
    .then('routes')
    .into(app);

server.listen(3000);
console.log('App no ar ...');

module.exports = app;
