const express=require('express')

const port=9000

const app=express()

app.use(express.urlencoded())

app.set('view engine', 'ejs')

const passport = require('passport');
const passportlocal = require('./config/passportlocal');
const session = require('express-session');

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


let path=require('path')

app.use('/',express.static(path.join(__dirname,'/public')))

app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use('/',require('./routes/indexroutes'))

const db = require('./config/db')

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("server is runing",port);
})