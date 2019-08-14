const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const inStream = fs.createReadStream('sample.txt');
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

function bigramParse() {
  let words = []
  let bigrams = {}

  rl.on('line', (line) => {
    let currWord = [0, 0]

    while (currWord[1] < line.length) {
      while ((line[currWord[0]].charCodeAt() < 65 || line[currWord[0]].charCodeAt() > 122) && currWord[0] < line.length) {
        currWord[0]++
        currWord[1]++

        if (!line[currWord[0]]) {
          break
        }
      }

      if (line[currWord[0]] && line[currWord[0]].charCodeAt() >= 65 && line[currWord[0]].charCodeAt() <= 122 && currWord[0] < line.length) {
        while (line[currWord[1]] && (line[currWord[1]].charCodeAt() >= 65 && line[currWord[1]].charCodeAt() <= 122) && currWord[1] < line.length) {
          currWord[1]++
        }

        if (words.length === 2) {
          words.shift()
        }
        words.push(line.slice(currWord[0], currWord[1]))
        let join = null

        if (words.length === 2) {
          joined = words.join(' ').toLowerCase()

          bigrams[joined] = bigrams[joined] + 1 || 1
        }
        currWord = [currWord[1], currWord[1]]
      }
    }
  })

  rl.on('close', () => {
    if (Object.keys(bigrams).length > 0) {
      for (let bigram in bigrams) {
        console.log(bigram, bigrams[bigram]);
      }
    } else {
      console.log('There are not enough words in your text file to create a histogram of the bigrams!');
    }
  })
}

bigramParse()

module.exports = bigramParse
