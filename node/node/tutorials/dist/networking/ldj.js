'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require('events');
var LDJClient = (function (_super) {
    __extends(LDJClient, _super);
    function LDJClient(stream) {
        var buffer = '', self = this;
        _super.call(this);
        stream.on('data', function (data) {
            buffer += data;
            var boundary = buffer.indexOf('\n');
            while (boundary !== -1) {
                var input = buffer.substr(0, boundary);
                buffer = buffer.substr(boundary + 1);
                self.emit('message', JSON.parse(input));
                boundary = buffer.indexOf('\n');
            }
        });
    }
    return LDJClient;
})(events_1.EventEmitter);
exports.LDJClient = LDJClient;
exports.connect = function (stream) {
    return new LDJClient(stream);
};
