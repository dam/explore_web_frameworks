var fs = require('fs');
var filename = '../public/target.txt';
fs.readFile(filename, function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
