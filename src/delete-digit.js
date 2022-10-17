const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  for (let i = 0; i < n; i = i * 10) {
    max = Math.max(n / 10 / i * i + n % i,max)
  }
  return maxNum;
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
