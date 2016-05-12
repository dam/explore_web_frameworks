var fs = require('fs');
var child_process_1 = require('child_process');
var filename = process.argv[2];
fs.watch(filename, function () {
    var ls = child_process_1.spawn('ls', ['lh', filename]), output = '';
    ls.stdout.on('data', function (chunk) {
        output += chunk.toString();
    });
    ls.stdout.on('close', function (chunk) {
        var parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });
});
console.log("Now watching " + filename + " for changes");
