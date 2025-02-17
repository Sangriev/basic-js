const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let i = arr;

  i = i.filter(elem => {
    if (elem != -1) {
      return elem;
    }
  }).sort((a, b) => {
    return a - b;
  });
  let indexValue = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != -1) {
      arr[j] = i[indexValue];
      indexValue++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
