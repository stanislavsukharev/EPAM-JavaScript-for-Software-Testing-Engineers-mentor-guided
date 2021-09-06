/**
 * Copy an array/object
 */

const arr = [1, 2, 3, 4];
const newArr = [...arr];

const obj = {
  a: 1,
  b: 2
};
const newObj = {
  ...obj
};

/**
 * Function parameters
 */
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const numbers = [1, 2, 3];
log(numbers); // it won't work
log(...numbers); //will work


/**
 * Destruct an object
 */
const destrObj = {
  firstName: 'Joe',
  lastName: 'Doe'
};

const {
  firstName, //will store 'Joe' value
  lastName // will store 'Doe' value
} = destrObj;
console.log(firstName);
console.log(lastName);