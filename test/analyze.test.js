const analyze = require('../src/analyze');

test('Analyze array of numbers (1)', () => {
  expect(analyze([4, 5, 8, 12, 4, 90])).toEqual({
    average: 20.5, min: 4, max: 90, length: 6,
  });
});

test('Analyze array of number (2)', () => {
  expect(analyze([4])).toEqual({
    average: 4, min: 4, max: 4, length: 1,
  });
});

test('Analyze array of null (2)', () => {
  expect(analyze([])).toEqual({
    average: 0, min: 0, max: 0, length: 0,
  });
});
