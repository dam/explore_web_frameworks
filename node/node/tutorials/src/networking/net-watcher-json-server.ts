/// <reference path="../../typings/node/node.d.ts" />
'use strict';
import * as fs from 'fs';
import * as net from 'net';

var filename = process.argv[2];
let port = 5444;
let host = '127.0.0.1';
let unix_socket = '/tmp/watcher.sock';

let server = net.createServer((socket) => {
  console.log('Subscriber connected');
  socket.write(JSON.stringify({ 
    type: 'watching', 
	  file: filename
  }) + '\n');
  
  //watcher setup
  let watcher = fs.watch(filename, () => {
    socket.write(JSON.stringify({ 
	  type: 'changed',
	  file: filename,
	  timestamp: Date.now()
    }) + '\n');	  
  });	
  
  //Cleanup
  socket.on('close', () => {
    console.log('Subscriber disconnected');	  
	watcher.close();
  });
});

if(!filename) {
  throw Error('No target filename specified');	
}

// NOTE: using normal sockets
server.listen(port, host);
server.on('listening', () => {
  console.log(`Listening for new connections on port ${port}`);	
});

//example using UNIX sockets
// server.listen(unix_socket, () => {
//   console.log('Listening for subscribers on Unix socket');	
// });
