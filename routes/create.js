var express = require('express');
var fs = require('fs');
var create=require("../custom_modules/create");
var multiparty = require('multiparty');
var router = express.Router();



//Post request to add new movie
router.post('/', function(request, response) {
    var form = new multiparty.Form();
    //parse form using multiparty module to get files and fields
    form.parse(request, function(err, fields, files) {
      create(fields,files);
    });
    //redirect to home page
    response.redirect('/');

});

module.exports = router;
