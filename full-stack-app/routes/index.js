var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', header: 'Index page', description: 'This is the index page of the application.' });
});


module.exports = router;
