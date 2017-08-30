/**
 * Created by Frank on 2017/7/21.
 */
var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

var twoSum = function (l1, l2) {
    var ll1 = 0;
    var ll2 = 0;
    var l1lenght = l1.length;
    for (var i = 0; i < l1lenght; i++) {
        ll1 += l1[i] * Math.pow(10, i);
        ll2 += l2[i] * Math.pow(10, i);
    }
    var sum = ll1 + ll2;
    var sumlenght = sum.toString().length;
    var rt = new ListNode();

    for (var i = 0; i < sumlenght; i++) {
        rt.next = parseInt(sum.toString().substr(sumlenght-1-i, 1));
    }
    console.log(rt);
    return rt;
};
twoSum([2, 4, 3], [5, 6, 4]);

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});