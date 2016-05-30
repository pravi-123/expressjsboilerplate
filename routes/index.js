var express = require('express');
var fs = require('fs');
var multiparty = require('multiparty');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html');
});

module.exports = router;
