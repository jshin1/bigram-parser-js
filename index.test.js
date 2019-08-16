// const fs = require('fs');
// const readline = require('readline');
// const stream = require('stream');
// const inStream = fs.createReadStream('sample.txt');
// const outStream = new stream();
// const rl = readline.createInterface(inStream, outStream);

const bigramParse = require('./index');

global.console.log = jest.fn()

describe('bigramParse function', () => {
  it('test1', (done) => {
    console.log(global.console.log)
    expect(global.console.log).toHaveBeenCalledWith('hi')
    done()
  })
})
