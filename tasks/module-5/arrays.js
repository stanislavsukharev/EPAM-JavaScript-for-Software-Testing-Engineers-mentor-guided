/**
 * As a representation of Chars array please use our sample: ./data/characters.json
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
  let arrOfNames = chars.map(item => item.name);
  return arrOfNames;
}
/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
  let arrOfNames2 = chars.map(item => item.name);
  console.log(arrOfNames2);
}

/**
 * return an array of non-human (species !== 'Human') characters
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
  let nonHuman = chars.filter(item => item.species !== 'Human');
  return nonHuman;
}

/**
 * return info about character named 'Jerry Smith'
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
  let jerry = chars.find(item => item.name == 'Jerry Smith');
  return jerry;
}
/**
 * check if all characters are human (species attribute). return true if all, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
  let allHuman = chars.every(item => item.species == 'Human');
  return allHuman;
}

/**
 * check if there are any 'type == Fish-Person' characters. return true if any, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */

function isAnyFishPerson(chars) {
  let FishPerson = chars.map(item => item.type);
  return FishPerson.includes('Fish-Person');
}
/**
 * write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
  //PLACE YOUR CODE HERE
  const min = Math.min(...arr);
  const index = arr.indexOf(min);
  return index;
}

module.exports = {
  getCharactersNames,
  printCharacterNames,
  getNonHumanCharacters,
  getJerryInfo,
  isAllHuman,
  isAnyFishPerson,
  minItem,
};
