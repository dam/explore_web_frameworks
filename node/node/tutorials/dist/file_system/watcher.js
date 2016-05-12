"use strict";
var fs = require('fs');
var child_process_1 = require('child_process');
var filename = process.argv[2];
if (!filename) {
    throw Error('A file to watch must be specified');
}
fs.watch(filename, function () {
    var ls = child_process_1.spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
});
console.log("Watching " + filename + " for changes");
