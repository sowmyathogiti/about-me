QUnit.module('MULTIPLY MODULE', {})

QUnit.test('TEST multiply (aysnc)', async assert => {
  assert.expect(2) // expect two async tests
  const ans = await multiply()
  const len = ans.length
  console.info(`FETCHED ${len} characters: ${ans}`)
  assert.notEqual(0, len, 'Length is not zero')
  assert.notEqual(ans, 'No circle for you', 'wrong answer')
})