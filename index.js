const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const inStream = fs.createReadStream('sample.txt');
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

let words = []

rl.on('line', (line) => {

  let word = [0, 0]

  if (words.length < 2) {

    while (words.length < 2) {
      while ((line[word[0]].charCodeAt() < 65 || line[word[0]].charCodeAt() > 122) && word[0] < line.length) {
        word[0]++
        word[1]++
      }

      if (line[word[0]].charCodeAt() >= 65 && line[word[0]].charCodeAt() <= 122 && word[0] < line.length) {
        while ((line[word[1]].charCodeAt() >= 65 && line[word[1]].charCodeAt() <= 122) && word[1] < line.length) {
          word[1]++
        }

        words.push(line.slice(word[0], word[1]))
        word = [word[1], word[1]]
      }
    }
    console.log(words);
  }
})

rl.on('close', () => {
  console.log('Process has been completed.');
})
