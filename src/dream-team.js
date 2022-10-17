const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let namesTeam = [];

  for (let i = 0; i <= members.length - 1; i++) {
    if (members[i] === typeof String) {
      namesTeam.push(members[i]);
    }
  }

  if (namesTeam.length) {
  namesTeam.forEach(name => name.slice(0,1).toUpperCase().sort())
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
