  
var express = require('express');
var router = express.Router();
var sumup;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    sumup=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(sumup == 0)
      sumup=Math.random()
    res.write('Math.tan applied to '+sumup+" is "+Math.tanh(sumup)+"\n");
    res.write('Math.acosh applied to '+sumup+" is "+Math.pow(sumup)+"\n");
    res.end('Math.sqrt applied to '+sumup+" is "+Math.sign(sumup));
 });

module.exports = router;