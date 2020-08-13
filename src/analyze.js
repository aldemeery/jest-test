const avg = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum / arr.length;
};

const min = (arr) => {
  let min = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    min = min > arr[i] ? arr[i] : min;
  }

  return min;
};

const max = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    max = max < arr[i] ? arr[i] : max;
  }

  return max;
};

const analyze = (arr) => {
  const result = {
    average: avg(arr) ? avg(arr) : 0,
    min: min(arr) ? min(arr) : 0,
    max: max(arr) ? max(arr) : 0,
    length: arr.length,
  };

  return result;
};

module.exports = analyze;
