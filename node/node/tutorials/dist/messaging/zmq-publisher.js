"use strict";
var fs = require('fs');
var zmq = require('zmq');
var publisher = zmq.socket('pub');
var filename = process.argv[2];
fs.watch(filename, function () {
    publisher.send(JSON.stringify({
        type: 'changed',
        file: filename,
        timestamp: Date.now()
    }));
});
publisher.bind('tcp://*:5444', function (err) {
    if (err) {
        throw err;
    }
    console.log('Listening for ZMQ subscribers');
});
