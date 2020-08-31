const Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => {
    if (y === 0) {
      throw new Error('Zero division');
    }

    return x / y;
  },
  multiply: (x, y) => x * y,
};
module.exports = Calculator;
