const mult = require('./mult');

test('multiply 3 * 3 to equal 9', () => {
  expect(mult(3,3)).toBe(9);
});