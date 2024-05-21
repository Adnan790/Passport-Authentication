const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('UserData');

// Passport Local Strategy
passport.use(new LocalStrategy(async(username, password, done) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return done(null, false, { message: 'User Does not exist.' });
        }

        if (user.password !== password) {
            return done(null, false, { message: 'Incorrect Passowrd.' })
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

// Serialize user to store user id in session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user to retrieve user from session id
passport.deserializeUser(async(id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});