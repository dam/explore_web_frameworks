/// <reference path="../../typings/node/node.d.ts" />
import * as fs from 'fs';

const filename = '../public/target.txt';

fs.readFile(filename, (err, data) => {
  if(err) { throw err; }
  console.log(data.toString());
});