/// <reference path="../../typings/tsd.d.ts" />
'use strict';
import * as net from 'net';
import ldj = require('./ldj');

let netClient = net.connect({ port: 5444 });
let ldjClient = ldj.connect(netClient);

ldjClient.on('message', (message: ldj.Message) => {	
  if(message.type === 'watching') {
    console.log(`Now watching ${message.file}`);  
  }
  else if (message.type === 'changed') {
    let date = new Date(message.timestamp);
    console.log(`File ${message.file} changed at ${date}`);
  }
  else {
    throw Error(`Unrecognized message type ${message.type}`);
  }
});