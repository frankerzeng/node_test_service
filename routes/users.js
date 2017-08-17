var express = require('express');
var router = express.Router();
var events = require('events');
var eventEmitter = new events.EventEmitter();

/* GET users listing. */
router.get('/', function (req, res, next) {
    eventEmitter.emit("ev1");
    eventEmitter.emit("ev2", "fuestck", "12");
    eventEmitter.emit("ev_arr", "1", "2");
    res.send('respond with a resource');
});

eventEmitter.on("ev1", eventFunction);
eventEmitter.on("ev2", eventFunction1);

eventEmitter.addListener('ev_arr', function () {
    console.log(1);
});

eventEmitter.addListener('ev_arr', function () {
    console.log(2);
});

function eventFunction() {
    console.info(eventEmitter.listenerCount());
    console.info("chufa----tgg-56-");
}

function eventFunction1(param1, param2) {
    console.info("chufa----tgg--" + param1 + param2);
}

module.exports = router;
