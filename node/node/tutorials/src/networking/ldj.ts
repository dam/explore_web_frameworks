/// <reference path="../../typings/tsd.d.ts" />
'use strict';
import * as util from 'util';
import { EventEmitter } from 'events';

export interface Message {
  type: string
  file: string
  timestamp?: number
}

export class LDJClient extends EventEmitter {
	constructor(stream: EventEmitter) {
		let buffer = '',
		    self = this;
		super();
		stream.on('data', function(data) {
		  buffer += data;
			let boundary = buffer.indexOf('\n');
			while(boundary !== -1) {
				let input = buffer.substr(0, boundary);
				buffer = buffer.substr(boundary + 1);
				self.emit('message', JSON.parse(input));
				boundary = buffer.indexOf('\n');
			} 
		});
	}
}

export var connect = function(stream: EventEmitter) {
	return new LDJClient(stream);
};