/**
 * Created by Frank on 2017/7/21.
 */
var app = require("./app");

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例， 访问地址为 http://%s:%s", host, port);
    console.log("应用实例， 访问地址为 http://%s:%s", host, port);
});