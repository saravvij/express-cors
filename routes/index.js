var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a header : xaccesstoken = ' + req.headers.xaccesstoken);
});

module.exports = router;
