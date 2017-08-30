var mysql = require('mysql');
var config = require("../config/mysql");
var util = require("util");

var mysqlHelper = {
    query: function (query) {
        connection.connect();
        connection.query(query, function (err, rows, fields) {
            if (err) throw err;
            return rows;
        });
        connection.close();
    }
};
var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password
});

module.exports = mysqlHelper;
