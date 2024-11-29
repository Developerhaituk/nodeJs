const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const adminmodel = require('../models/adminmodel');

passport.use(new passportLocal({
    usernameField: 'email',
}, async (email, password, done) => {
    try {
        let user = await adminmodel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log('email or password are invalid!!!');
            return done(null, false)
        }
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await adminmodel.findById(id);
        return done(null, user);
    } catch (err) {
        return done(null, false);
    }
})

passport.checkUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/')
}

passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.user
    }
    return next();
}

module.exports = passport;