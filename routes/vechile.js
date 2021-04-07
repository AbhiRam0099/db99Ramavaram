var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vechile', { title: 'Search Results vechile' });
});

module.exports = router;


