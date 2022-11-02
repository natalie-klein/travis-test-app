const mult = require('./mult');

test('multiplies 2 times 2 to equal 4', () => {
  expect(mult(2, 2)).toBe(4);
});