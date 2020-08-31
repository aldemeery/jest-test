const Calculator = require('../src/calculator');

test('Add Positive Numbers', () => {
  expect(Calculator.add(5, 7)).toBe(12);
});

test('Add Negative Numbers', () => {
  expect(Calculator.add(-5, -7)).toBe(-12);
});

test('Add Positive and Negative Numbers', () => {
  expect(Calculator.add(-5, 7)).toBe(2);
});

test('Subtract Positive Numbers', () => {
  expect(Calculator.subtract(5, 7)).toBe(-2);
});

test('Subtract Negative Numbers', () => {
  expect(Calculator.subtract(-5, -7)).toBe(2);
});

test('Subtract Positive and Negative Numbers', () => {
  expect(Calculator.subtract(5, -7)).toBe(12);
});

test('Divide Positive Numbers', () => {
  expect(Calculator.divide(5, 10)).toBe(0.5);
});

test('Divide Negative Numbers', () => {
  expect(Calculator.divide(-200, -10)).toBe(20);
});

test('Divide Positive and Negative Numbers', () => {
  expect(Calculator.divide(50, -10)).toBe(-5);
});

test('Divide by 0', () => {
  expect(() => Calculator.divide(5, 0)).toThrow(Error);
});

test('Multiply Positive Numbers', () => {
  expect(Calculator.multiply(5, 10)).toBe(50);
});

test('Multiply Negative Numbers', () => {
  expect(Calculator.multiply(-200, -10)).toBe(2000);
});

test('Multiply Positive and Negative Numbers', () => {
  expect(Calculator.multiply(50, -10)).toBe(-500);
});
