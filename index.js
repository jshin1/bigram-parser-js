const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const inStream = fs.createReadStream('sample.txt');
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

let words = []
let bigrams = {}

rl.on('line', (line) => {

  let initialWords = []
  let currWord = [0, 0]

  const populateWords = (line) => {

    while (initialWords.length < 2) {

    }
    return initialWords
  }

  if (words.length < 2) {
    words = populateWords(line)
    const currBigram = words.join(' ').toLowerCase()
    bigrams[currBigram] = bigrams[currBigram] + 1 || 1

    if (word[0] < line.length) {
      // once initial words are populated, program must be run for the remaining texts in the current line
    }

  } else {

    console.log('hi');

  }
})

rl.on('close', () => {
  console.log('Process has been completed.');
  console.log(bigrams);
})
