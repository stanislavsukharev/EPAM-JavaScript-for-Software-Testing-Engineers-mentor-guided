/**
 * Learning materials:
 * Function declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * Function expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

/**
 * write function that will do sum for two numbers
 *
 */
function sum(a, b) {
  return a + b;
}

/**
 * write function that returns firstName and lastName of a given object
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
  return `${object.firstName} ${object.lastName}`;
}

/**
 * write function that checks if number is odd
 * true if odd, false if even
 */
function isOdd(n) {
  return n % 2 !== 0;
}

/**
 * write function that returns shortest of the words in the given array
 * @example
 * console.log(getShortest(["one", "two", "three"])) // one
 */

function getShortest(wordArray) {
  let shortestWord = wordArray[0];
  for (let i = 1; i < wordArray.length; i++) {
    if (shortestWord.length > wordArray[i].length) {
      shortestWord = wordArray[i];
    }
  }
  return shortestWord;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */
function getGoogle(n) {
  let letter = 'o';
  let word = 'g' + letter.repeat(n) + 'gle';
  return word;
}

/**
 * write function that returns object based on the given information
 * (params may be null, so, please use default ones)
 * @example
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName = null, lastName = null, age = null) {
  return { firstName, lastName, age };
}

/**
 * write function that calculates total path traveled.
 * path represented as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */
const path = [];

function getTotalPath(path) {
  let sum = 0;

  for (let el of path) {
    sum += el.distance;
  }
  return sum;
}

/**
 * write a function that calculates a final price considering the Amount
 * reduced by discount percentage(hint: you need to use the Closure here)
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @param {percentage} num
 * @param {amount} num
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {
  return function (amount) {
    return amount - (amount / 100) * percentage;
  };
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
  friends: ['Mike', 'Alan', 'Daniel'],
  keys() {
    for (let key in myObject) {
      console.log(key);
    }
  },
  call() {
    let str = `My name is ${myObject.name} ${myObject.lastName} and I am ${myObject.age} years old. My best friend is ${myObject.friends[2]}`;
    return str;
  },
};

module.exports = {
  sum,
  getFullName,
  isOdd,
  getShortest,
  getGoogle,
  getUser,
  getTotalPath,
  discountFunction,
  myObject,
};
