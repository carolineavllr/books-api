const { default: Search } = require('./Search')

test('input deve ser preenchido', () => {
  expect(Search('valor')).toBe('valor')
})