var express = require('express');
var router = express.Router();
var events = require('events');
var url = require('url');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var arg = url.parse(req.url, true).query;
    var page = arg.page;

    // GET 参数
    console.log(arg);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.end(JSON.stringify([{key: "title1111", value: "content11"}, {key: "title2222", value: "content2222"}]));
});
module.exports = router;
