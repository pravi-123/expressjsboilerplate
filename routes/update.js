var express = require('express');
var fs = require('fs');
var update=require("../custom_modules/update");
var multiparty = require('multiparty');
var router = express.Router();


//To update movie details
router.post('/', function(request, response) {

    var form = new multiparty.Form();
    form.parse(request, function(err, fields, files) {
        update(fields,files);
    });
    response.redirect('/');
});

module.exports = router;
