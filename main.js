/*
  Created By: Lightnet
  Information: Server Entry
  
*/

'use strict';

import express from 'express';
import session from 'express-session';
import passport from 'passport';

import path from 'path';
import refresh from 'passport-oauth2-refresh';
import socketIO from 'socket.io';

var Strategy = require('passport-discord').Strategy

var app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;
//discord bots
var bots = [];

//Site API
const DISCORDAPIID = process.env.DISCORDAPIID || '';
const DISCORDAPISECERT = process.env.DISCORDAPISECERT || '';
const DISCORDAPICALLBACK = process.env.DISCORDAPICALLBACK || '';
//Bot
const DISCORDBOTTOKEN = process.env.DISCORDBOTTOKEN || '';

app.use(express.static('public'));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//var scopes = ['identify', 'email', 'guilds', 'guilds.join'];
var scopes = ['identify', 'guilds'];

passport.use(new Strategy({
    clientID: DISCORDAPIID,
    clientSecret: DISCORDAPISECERT,
    callbackURL: DISCORDAPICALLBACK,
    scope: scopes
}, function(accessToken, refreshToken, profile, done) {
    //profile.refreshToken = refreshToken; // store this for later refreshes
    console.log(refreshToken);
    process.nextTick(function() {
        return done(null, profile);
    });
}));

// set the view engine to ejs
app.set('view engine', 'ejs');

var sessionMiddleware = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
})

//session
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
//index page
app.get('/', checkAuth, function(req, res) {
  //console.log(res);
  //console.log("req.session.user");
  //console.log(req.session.passport.user.username);
  console.log(req.session.passport.user);
  res.render('index',{user:req.session.passport.user});
});
//login url
app.get('/login', passport.authenticate('discord', { scope: scopes }), function(req, res) {});
//authenticate access
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/callback',
    passport.authenticate('discord', { failureRedirect: '/' }),
      function(req, res) { 
        res.redirect('/');
        //res.redirect('/info')
        //res.sendFile(path.join(__dirname + '/index.html'));
      } // auth success
);
//logout url
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
// user data
app.get('/info', checkAuth, function(req, res) {
    //console.log(req.user)
    res.json(req.user);
});
//check authenticate 
function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    //res.send('not logged in :(');
    res.render('basics',{user:"Guest"});
}
//server listen start
let requestHandler = app.listen(PORT, function (err) {
    if (err) return console.log(err)
    console.log(`Listening at http://${process.env.PROJECT_DOMAIN}:${PORT}`)
});

const io = socketIO(requestHandler);

io.use(function(socket, next){
  // Wrap the express middleware
  sessionMiddleware(socket.request, {}, next);
});

//socket.io connect event
io.on('connection', function(socket){
  //check if pastport exist
  console.log("bots:",bots.length);
  let passport = socket.request.session.passport;
  if(passport){
    if(!passport.user){
      console.log("No User ID ");  
      return;
    }
    var userId = socket.request.session.passport.user.username;
    console.log("Your User ID is", userId);
  }else{
    console.log("No User ID ");
  }

  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

//init discord app
const Discord = require('discord.js');
var CommandSet = require('discord-routes').CommandSet;

import DSJSBot from './src/server/DSJSBot';

function addbot(token){
  //init client bot
  const client = new Discord.Client();

  //require('./src/server/DSJSBot')(client);
  let bot = new DSJSBot(client);
  //client.on('ready', () => {
    //console.log(`Logged in as ${client.user.tag}!`);
  //});
  //client.on('message', msg => {
    //if (msg.content === 'ping') {
      //msg.reply('Pong!');
    //}
  //});

  //login as bot
  client.login(token);
  return client;
}

let client = addbot(DISCORDBOTTOKEN);
bots.push(client);

//<iframe src="https://discordapp.com/widget?id=xxxx&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>