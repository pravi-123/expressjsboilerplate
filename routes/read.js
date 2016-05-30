var express = require('express');
var read=require("../custom_modules/read");
var router = express.Router();


/* GET json data. */
router.get('/', function(request, response) {
    var counter=request.param('counter');
    response.send(read(counter));
});
module.exports = router;
