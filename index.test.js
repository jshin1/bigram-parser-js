const bigramParse = require('./index');

describe('bigramParse', () => {

  it('is a silly test', (done) => {
    expect('hello').toBe('hello')
    done()
  })

  it('calculates histogram correctly', (done) => {
    // expect.assertions(1)
    expect(bigramParse()).toBe('hi')
    done()
  })
})
