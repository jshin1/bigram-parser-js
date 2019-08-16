const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const text = process.argv[2] || 'sample.txt'
const inStream = fs.createReadStream(text);
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);


function sanitizeText(line) {
  // sanitize text (e.g. get rid of all symbols and non alphabets) -> output arr of words

  let words = []
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
    }

    const word = line.slice(currWord[0], currWord[1]).toLowerCase()
    if (word.length > 0) {
      words.push(word)
    }

    currWord = [currWord[1], currWord[1]]
  }

  return words
}

function createHistogram(words) {
  let bigrams = {}

  for (let i = 1; i < words.length; i++) {
    const bigram = `${words[i - 1]} ${words[i]}`
    bigrams[bigram] = bigrams[bigram] + 1 || 1
  }

  return bigrams
}

function logData(bigrams) {
  for (let b in bigrams) {
    console.log(b, bigrams[b]);
  }
  return bigrams
}

function runner() {

  let bigrams

  rl.on('line', line => {
    const words = sanitizeText(line)
    bigrams = createHistogram(words)
  })

  rl.on('close', () => {
    if (Object.keys(bigrams).length > 0) {
      return logData(bigrams)
    } else {
      console.log('There are not enough words in your text file to create a histogram of the bigrams!');
      return null
    }
  })
}

// console.log(runner());
// runner()

module.exports = {
  sanitizeText,
  createHistogram,
  logData
}




////////////////////////////////////////////////////////////////////
// async function bigramParse() {
//   let words = []
//   let bigrams = {}
//
//   function helper() {
//     rl.on('line', (line) => {
//       let currWord = [0, 0]
//
//       while (currWord[1] < line.length) {
//         while ((line[currWord[0]].charCodeAt() < 65 || line[currWord[0]].charCodeAt() > 122) && currWord[0] < line.length) {
//           currWord[0]++
//           currWord[1]++
//
//           if (!line[currWord[0]]) {
//             break
//           }
//         }
//
//         if (line[currWord[0]] && line[currWord[0]].charCodeAt() >= 65 && line[currWord[0]].charCodeAt() <= 122 && currWord[0] < line.length) {
//           while (line[currWord[1]] && (line[currWord[1]].charCodeAt() >= 65 && line[currWord[1]].charCodeAt() <= 122) && currWord[1] < line.length) {
//             currWord[1]++
//           }
//
//           if (words.length === 2) {
//             words.shift()
//           }
//           words.push(line.slice(currWord[0], currWord[1]))
//           let joined = null
//
//           if (words.length === 2) {
//             joined = words.join(' ').toLowerCase()
//
//             bigrams[joined] = bigrams[joined] + 1 || 1
//           }
//           currWord = [currWord[1], currWord[1]]
//         }
//       }
//       return bigrams
//     })
//   }
//
//   function helper2(bigrams) {
//     rl.on('close', () => {
//       if (Object.keys(bigrams).length > 0) {
//         for (let bigram in bigrams) {
//           console.log(bigram, bigrams[bigram]);
//         }
//       } else {
//         console.log('There are not enough words in your text file to create a histogram of the bigrams!');
//       }
//       console.log('this should be last', bigrams);
//       return bigrams
//     })
//   }
//
//   const res = await helper()
//   const data = await helper2(res)
//   return data
// }
//
// bigramParse()
// (async () => console.log(await bigramParse()))()
// console.log(bigramParse());

// module.exports = bigramParse
