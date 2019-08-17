const parser = require('./index');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const text = process.argv[2] || 'sample.txt'
const inStream = fs.createReadStream(text);
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);


function runner() {
  let bigrams
  rl.on('line', line => {
    const words = parser.sanitizeText(line)
    bigrams = parser.createHistogram(words)
  })

  rl.on('close', () => {
    if (Object.keys(bigrams).length > 0) {
      return parser.logData(bigrams)
    } else {
      console.log('There are not enough words in your text file to create a histogram of the bigrams!');
    }
  })
}


runner()
