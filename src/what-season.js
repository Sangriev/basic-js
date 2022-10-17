const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getYear();

    let season;

    if (month > 1 && month <= 3) season = 'winter';
    if (month === 3 && date > 19) season = 'spring';
    if (month > 3 && month <= 6) season = 'spring';
    if (month === 6 && date > 20) season = 'summer';
    if (month > 6 && month <= 9) season = 'summer';
    if (month === 9 && date > 21) season = 'autumn';
    if (month > 9 && month <= 12) season = 'autumn';
    if (month === 12 && date > 20) season = 'winter';
  }

  return season;
  


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
