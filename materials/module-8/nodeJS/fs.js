const fs = require('fs');
const path = require('path');

/**
 * The fs.mkdir() method i Node.js is used to create a directory asynchronously.
 */
fs.mkdir(path.join(__dirname, 'testDirectory'), (err) => {
  if (err) throw err;
});

/**
 * The fs.writeFile() method is used to asynchronously 
 * write the specified data to a file. By default, the file would be replaced if it exists.
 */
const testObject = {
  fname: "Joe",
  lname: "Doe"
};
fs.writeFileSync(path.join(__dirname, 'myFile.json'), JSON.stringify(testObject));

/**
 * The fs.readFile() method is an inbuilt method 
 * which is used to read the file. This method read the entire file into buffer. 
 */
const file = fs.readFileSync(path.join(__dirname, 'file1.js'), 'utf-8');
console.log(file);