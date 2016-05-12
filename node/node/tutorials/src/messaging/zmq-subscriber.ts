/// <reference path="../../typings/tsd.d.ts" />
"use strict";
import * as zmq from 'zmq';

interface Message {
	type: string
	file: string
	timestamp: number
}

let subscriber = zmq.socket('sub');
subscriber.subscribe(''); // subscribe to all the messages

subscriber.on('message', (data) => {
	let message: Message = JSON.parse(data.toString());
	let {type, file, timestamp} = message;
	let date = new Date(timestamp);
	console.log(`File ${file} changed at ${date}`);
})

subscriber.connect('tcp://localhost:5444');