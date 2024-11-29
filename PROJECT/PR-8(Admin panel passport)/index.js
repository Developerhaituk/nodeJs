const express = require('express');

const port = 8000;

const app = express();

app.use(express.urlencoded());

app.set('view engine', 'ejs');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passportlocal');

app.use(session({
    secret: 'haituk',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

const path = require('path');

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/',require('./routes/indexRoutes'));

const db = require('./config/db');



app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("server is runing",port);
})