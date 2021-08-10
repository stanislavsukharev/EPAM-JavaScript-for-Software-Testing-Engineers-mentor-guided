/**
 * 1. You need to make a GET request (via async/await) to the resource: https://jsonplaceholder.typicode.com/posts
 * using fetch method inside the sendRequest function
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * 4. Check yourself by running npm run test:nodejs
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fetch = require("node-fetch");

const fs = require("fs");

// https://www.npmjs.com/package/node-rest-client
const Client = require("node-rest-client").Client;
var restClient = new Client();

/**
 * Run fetch method inside the function
 * Use the fs.writeFile method inside the function
 */

const callback = (done) => {
    return function (payload, response) {
      fs.writeFile(
        "./tasks/nodeJs-callback/fetch/response.json",
        JSON.stringify(payload.filter(({ id }) => id < 20)),
        function (err) {
          if (err) throw err;
          done();
        }
      );
    }
 }

const sendRequest = (done) => {
  restClient.get(
    "https://jsonplaceholder.typicode.com/posts",
    callback(done)
  );
};

module.exports = {
  sendRequest,
};


