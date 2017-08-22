var express = require('express');
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('u -----dd--dd------');
    console.log('u -----dd--dd------');
    console.log('u -----dd--dd------');
    console.log('u -----dd--dd------');
    console.log('u -----dd--dd------');
    console.log('u -----dd--dd------');
    console.log('u -----dd--dd------');
    console.log(url.parse(req.url).query);
    console.log(url.parse(req.url).pathname);
    console.log(querystring.parse(req.url)['p']);
    res.send('respond with a resource u');
});


var buffer1 = new Buffer('test');
var buffer2 = buffer1.slice(0, 1);
console.log(buffer1.toString());
console.log(buffer2.toString());

var readerStream = fs.createReadStream('app.js');
console.log("1111111111");

module.exports = router;
