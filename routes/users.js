var express = require('express');
const passport = require('passport');
var router = express.Router();
var Passport = require('passport')

router.post('/login', passport.i, Passport.authenticate('local', {
    failureRedirect: '/register',
    successRedirect: '/profile'
}), async(req, res, next) => {

});

module.exports = router;