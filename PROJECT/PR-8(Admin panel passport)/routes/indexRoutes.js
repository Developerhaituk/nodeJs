const express = require('express');

const routes = express.Router();

const passport=require("passport")

const { loginPage,loginUser,Register,registerUser,dashBoard, logout, forgotPassword,submitEmail, otpPage, submitotp } = require('../controllers/admincontroller');

routes.get('/',loginPage);
routes.post('/loginuser',passport.authenticate('local', { failureRedirect: '/' }),loginUser);
routes.get('/register',Register);
routes.post('/registeruser',registerUser);
routes.get('/dashboard',passport.checkUser,dashBoard)
routes.get('/forgotpass',forgotPassword)
routes.post('/submitemail',submitEmail)
routes.get('/otp',otpPage)
routes.post('/submitotp',submitotp)
routes.get('/logout',logout)

module.exports = routes;