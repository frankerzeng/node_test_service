var express = require('express');
var fs = require("fs");
var url = require("url");
var router = express.Router();
var mysqlHelp = require('../helper/mysqlHelper');

/* GET home page. */
router.get('/', function (req, res, next) {
    mysqlHelp.query('select * from db_user_formal.users where users.id = 1');
    console.log('u -----dd------');
    res.send('respond with a resource u');
});


module.exports = router;
