var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test MongoDB',details: 'To test, send post request with postman  to http://localhost:3000/users page.',author:'@mreorhan' });
});

module.exports = router;
