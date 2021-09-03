const options = {
  width: 1024,
  height: 1024,
  name: "test",
  font: {
    size: '16px',
    color: 'red'
  },
  options: ['red', 'blue'],
  isChecked: true
};

/**
 * The JSON.stringify() method converts a JavaScript object 
 * or value to a JSON string, optionally replacing values 
 * if a replacer function is specified or optionally including 
 * only the specified properties if a replacer array is specified.
 */
const stringified = JSON.stringify(options, null, '\t'); //this is a JSON string
console.log(stringified);

/**
 * The JSON.parse() method parses a JSON string, constructing the JavaScript value 
 * or object described by the string. An optional reviver function can be provided 
 * to perform a transformation on the resulting object before it is returned.
 */
const parsed = JSON.parse(stringified); //this is an object
console.log(parsed);

/**
 * require the JSON file
 */
const jsonFile = require("./file.json");
console.log(jsonFile); //this became object after require() and we do not need to parse it.