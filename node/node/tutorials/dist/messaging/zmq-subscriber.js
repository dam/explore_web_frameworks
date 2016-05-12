"use strict";
var zmq = require('zmq');
var subscriber = zmq.socket('sub');
subscriber.subscribe('');
subscriber.on('message', function (data) {
    var message = JSON.parse(data.toString());
    var type = message.type, file = message.file, timestamp = message.timestamp;
    var date = new Date(timestamp);
    console.log("File " + file + " changed at " + date);
});
subscriber.connect('tcp://localhost:5444');
