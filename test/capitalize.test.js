const capitalize = require('../src/capitalize');

test('Capitalize first letter of a word', () => {
  expect(capitalize('andres')).toMatch('Andres');
});

test('Capitalize letter', () => {
  expect(capitalize('z')).toMatch('Z');
});

test('Capitalize first letter of sentence', () => {
  expect(capitalize('the binding of isaac')).toMatch('The binding of isaac');
});
