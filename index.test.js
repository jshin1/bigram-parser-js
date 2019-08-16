const parser = require('./index');
const sampleText = "hi1 this is5 @a test5!"
const mockWords = ["hi", "this", "is", "a", "test"]
const mockBigrams = {
  "hi this": 1,
  "this is": 1,
  "is a": 1,
  "a test": 1
}

describe('sanitizeText', () => {
  it('Removes everything besides letters', () => {
    expect(parser.sanitizeText(sampleText)).toEqual(mockWords)
  })
})

describe('createHistogram', () => {
  it('Creates accurate histogram of text bigrams', () => {
    expect(parser.createHistogram(mockWords)).toEqual(mockBigrams)
  })
})

describe('logData', () => {
  it('Works with null', () => {
    expect(parser.logData(null)).toBe(null)
  })
})
