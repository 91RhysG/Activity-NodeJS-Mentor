var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', header: 'Index page', description: 'This is the index page of the application.' });
});

/* Variation home page. */
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'This is a test page' });
});



module.exports = router;
