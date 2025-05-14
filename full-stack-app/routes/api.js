var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('API endpoint hit');
});

/* Variation home page. */
router.get('/users', function(req, res) {
  res.json({ user: 'John Doe', age: 30})
});



module.exports = router;
