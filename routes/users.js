var express = require('express');
var router = express.Router();
var flag = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  flag+=1;
  res.send(`Users Accesses are: ${flag}`);
});

module.exports = router;
