const caesar = require('../src/caesar');

test('Caesar cipher (1) letter', () => {
  expect(caesar('a', 5)).toMatch('f');
});

test('Caesar cipher (2) word', () => {
  expect(caesar('andres', 5)).toMatch('fsiwjx');
});

test('Caesar cipher (3) punctuation', () => {
  expect(caesar('¡andres!', 5)).toMatch('¡fsiwjx!');
});

test('Caesar cipher (4) upper case and lower case', () => {
  expect(caesar('AnDrEs!', 5)).toMatch('FsIwJx!');
});

test('Caesar cipher (5) wrap z to a', () => {
  expect(caesar('My name is Andres!', 5)).toMatch('Rd sfrj nx Fsiwjx!');
});

test('Caesar cipher (6) crazy sentence', () => {
  expect(caesar('ThIs, - Is To !FrEcKiNg ¡StRaNgE', 9)).toMatch('CqRb, - Rb Cx !OaNlTrWp ¡BcAjWpN');
});
