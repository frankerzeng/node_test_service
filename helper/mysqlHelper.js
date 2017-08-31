var mysql = require('mysql');
var config = require("../config/mysql");
var util = require("util");

var mysqlHelper = {
    query: function (query, callback) {
        var connection = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password
        });
        connection.connect();
        connection.query(query, function (err, rows, fields) {
            if (err) throw err;
            rows = JSON.stringify(rows);
            callback(rows);
        });

        connection.end();
    }
};

module.exports = mysqlHelper;
