'use strict';
var net = require('net');
var ldj = require('./ldj');
var netClient = net.connect({ port: 5444 });
var ldjClient = ldj.connect(netClient);
ldjClient.on('message', function (message) {
    if (message.type === 'watching') {
        console.log("Now watching " + message.file);
    }
    else if (message.type === 'changed') {
        var date = new Date(message.timestamp);
        console.log("File " + message.file + " changed at " + date);
    }
    else {
        throw Error("Unrecognized message type " + message.type);
    }
});
