var express = require('express');
var router = express.Router();
var events = require('events');
var querystring = require('querystring');
var util = require("util");

var postHTML = '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head><body><form method="post">' +
    '网站名：<input name="name"><br>网站 URL： <input name="url"><br><input type="submit"></form></body></html>';

/* GET users listing. */
router.get('/', function (req, res, next) {
    var body = '';
    req.on('data', function (da) {
        body += da;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if (body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
});

router.post('/', function (req, res, next) {
    var body = {name: "", title: ""};
    body.name = req.body.name;
    body.url = req.body.url;
    res.write("网站名：" + body.name);
    res.write("<br>");
    res.write("网站 URL：" + body.url);

    // 设置响应头部信息及编码
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.end();
});

module.exports = router;

