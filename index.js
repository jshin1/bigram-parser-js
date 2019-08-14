const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const inStream = fs.createReadStream('sample.txt');
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

rl.on('line', (line) => {
  console.log(typeof line);
})

rl.on('close', () => {
  console.log('Process has been completed.');
})
