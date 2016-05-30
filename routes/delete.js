var express = require('express');
var fs = require('fs');
var del=require("../custom_modules/delete");
var multiparty = require('multiparty');
var router = express.Router();

//delete movie from json array
router.get("/", function(request, response) {

  del(request.param('title'));
    response.redirect('/');
});
module.exports = router;
