function sanitizeText(line) {
  // Sanitize text (e.g. get rid of all non-alphabet characters) -> output array of words
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
  // Create dictionary of keys (bigrams) and values (counts) based on array argument
  let bigrams = {}
  for (let i = 1; i < words.length; i++) {
    const bigram = `${words[i - 1]} ${words[i]}`
    bigrams[bigram] = bigrams[bigram] + 1 || 1
  }
  return bigrams
}


function logData(bigrams) {
  // Logs histogram of bigrams and their respective counts to the terminal
  for (let b in bigrams) {
    console.log(b, bigrams[b]);
  }
  return bigrams
}


module.exports = {
  sanitizeText,
  createHistogram,
  logData
}
