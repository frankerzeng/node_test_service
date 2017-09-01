var mysql = require('mysql');
var config = require("../config/mysql");
var util = require("util");

var mysqlHelper = {
    query: function (query, callback) {
        var connection = mysql.createConnection(config);
        connection.connect();
        connection.query(query, function (err, rows, fields) {
            if (err) throw err;
            rows = JSON.stringify(rows);
            callback(rows);
            connection.end();
        });
    },
    queryPool: function (query, callback) {
        var connection = mysql.createPool(config);
        connection.on('connection', function () {
            console.log('event connection');
        });
        connection.query(query, function (err, rows, fields) {
            if (err) throw err;
            rows = JSON.stringify(rows);
            callback(rows);
            connection.end();
        });
    }
};

module.exports = mysqlHelper;
