const reverseStr = require('../src/reverseStr');

test('Reverse a word', () => {
  expect(reverseStr('andres')).toMatch('serdna');
});

test('Reverse letter', () => {
  expect(reverseStr('z')).toMatch('z');
});

test('Reverse sentence', () => {
  expect(reverseStr('the binding of isaac')).toMatch('caasi fo gnidnib eht');
});
