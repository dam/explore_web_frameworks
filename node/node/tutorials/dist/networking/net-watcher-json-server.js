'use strict';
var fs = require('fs');
var net = require('net');
var filename = process.argv[2];
var port = 5444;
var host = '127.0.0.1';
var unix_socket = '/tmp/watcher.sock';
var server = net.createServer(function (socket) {
    console.log('Subscriber connected');
    socket.write(JSON.stringify({
        type: 'watching',
        file: filename
    }) + '\n');
    var watcher = fs.watch(filename, function () {
        socket.write(JSON.stringify({
            type: 'changed',
            file: filename,
            timestamp: Date.now()
        }) + '\n');
    });
    socket.on('close', function () {
        console.log('Subscriber disconnected');
        watcher.close();
    });
});
if (!filename) {
    throw Error('No target filename specified');
}
server.listen(port, host);
server.on('listening', function () {
    console.log("Listening for new connections on port " + port);
});
