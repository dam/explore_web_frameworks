/// <reference path="../../typings/node/node.d.ts" />
"use strict";
import * as fs from 'fs';
import { spawn } from 'child_process';

const filename = process.argv[2]; 

if(!filename) {
  throw Error('A file to watch must be specified');
}

fs.watch(filename, () => {
  let ls = spawn('ls', ['-lh', filename]);
  ls.stdout.pipe(process.stdout);
});
console.log(`Watching ${filename} for changes`);
