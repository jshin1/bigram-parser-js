const parser = require('./index');


describe('sanitizeText', () => {
  it('Works with empty string', () => {
    expect(parser.sanitizeText('')).toEqual([])
  })
  it('Works with spaces', () => {
    expect(parser.sanitizeText('       ')).toEqual([])
  })
  it('Removes everything besides letters', () => {
    expect(parser.sanitizeText("hi1 this is5 @a test5!")).toEqual(["hi", "this", "is", "a", "test"])
  })
  it('Does not alter line of text without any special characters', () => {
    expect(parser.sanitizeText("hi this is a test")).toEqual(["hi", "this", "is", "a", "test"])
  })
  it('Works with well formed sentences', () => {
    expect(parser.sanitizeText('This is just another sample text for you to test.'))
    .toEqual(["this", "is", "just", "another", "sample", "text", "for", "you", "to", "test"])
  })
  it('Works with exclusively non-alphabet characters', () => {
    expect(parser.sanitizeText('!!!???@!#$@#% !@#!$#@$!#!@ 123!@#')).toEqual([])
  })
})


describe('createHistogram', () => {
  it('Creates accurate histogram of text bigrams', () => {
    expect(parser.createHistogram(["hi", "this", "is", "a", "test"])).toEqual({
      "hi this": 1,
      "this is": 1,
      "is a": 1,
      "a test": 1
    })
  })
  it('Works with repeat words', () => {
    expect(parser.createHistogram(["hi", "hi", "hi", "hi"])).toEqual({
      "hi hi": 3
    })
  })
  it('Works with empty array', () => {
    expect(parser.createHistogram([])).toEqual({})
  })
})


describe('logData', () => {
  it('Works with argument of null', () => {
    expect(parser.logData(null)).toBe(null)
  })
  it('Outputs bigrams', () => {
    expect(parser.logData({
      "hi this": 1,
      "this is": 1,
      "is a": 1,
      "a test": 1
    })).toEqual({
      "hi this": 1,
      "this is": 1,
      "is a": 1,
      "a test": 1
    })
  })
})
