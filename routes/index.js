var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});


router.get('/register', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});


router.get('/login', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});


module.exports = router;