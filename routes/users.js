var express = require('express');
var router = express.Router();
var events = require('events');
var eventEmitter = new events.EventEmitter();

/* GET users listing. */
router.get('/', function (req, res, next) {
    eventEmitter.emit("ev1");
    res.send('respond with a resource');
});

eventEmitter.on("ev1", eventFunction);

function eventFunction() {
    console.info("chufa----tgg--");
}

module.exports = router;
