var express = require('express');
var router = express.Router();
var x =Math.floor(Math.random() * 10);

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.x!= null && req.query.x!=undefined) {
    x= req.query.x
  }
    res.send(`Math.cos() applied to ${x} is ${Math.cos(x)}`+"<br></br>"
    +`Math.asin() applied to ${x} is ${Math.asin(x)}`+"<br></br>"
      +`Math.asinh() applied to ${x} is ${Math.asinh(x)}`);
    
});

module.exports = router;
