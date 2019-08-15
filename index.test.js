const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const inStream = fs.createReadStream('sample.txt');
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

const bigramParse = require('./index');

describe('bigramParse function', () => {
  it('test1', () => {

    return bigramParse().then(data => {
      expect(data).toEqual({})
    })
  })
})
