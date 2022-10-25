/**
 * 1. You need to write a parser, which takes the "./utils/test.json" file
 * and will create a new JSON file with the name "./parsed.json" (in current directory!) with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
 * Please NOTE, that you should omit the ".html" extension
 *
 * Use the promise version of FS module.
 * DOCS:
 * 		fs.readFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromisesreadfilepath-options
 * 		fs.writeFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromiseswritefilefile-data-options
 *
 * 2. Check yourself by running "npm run test:nodejs"
 *
 */
const fs = require('fs/promises');

const jsonParser = async () => {
  //put your code here
  fs.readFile('./utils/test.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    const parsedData = JSON.parse(data);
    const parsedId = parsedData.filter(el => el.docId);

    fs.writeFile('./parsed.json', JSON.stringify(parsedId, null, 2), err => {
      if (err) {
        console.log(err);
      }
    });
  });
};

module.exports = {
  jsonParser,
};
