const { resolve } = require('path');
const { getDogs, getCats, getBirds, firstPromise, secondPromise } = require('./utils/utilPromises');

/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * @returns {Promise<"Resolved!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

// function promiseResolve() {
//   return new Promise((resolve, reject) => {
//     resolve('Resolved!');
//   });
// }
function promiseResolve() {
  return Promise.resolve('Resolved!');
}

/**
 * Task-2: Create a promise with the reject state
 * Implement a promise what will be rejected with "Rejected!" string
 * @returns {Promise<"Rejected!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

// function promiseReject() {
//   //PLACE YOUR CODE HERE:
//   return new Promise((resolve, reject) => {
//     reject('Rejected!');
//   });
// }

function promiseReject() {
  return Promise.reject('Rejected!');
}

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 * hint: use new Promise()
 */

function fullPromise(param) {
  //PLACE YOUR CODE HERE:
  return new Promise((resolve, reject) => {
    if (param) {
      resolve('Resolved!');
    } else {
      reject('Rejected!');
    }
  });
}

/**
 * Task-4: Chain two promises (firstPromise() and secondPromise() from the './utils/utilPromises' file)
 * and store the result to the variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside of the promisesChaining function (please do NOT use async/await)
 */

function promisesChaining() {
  let chainingResult = '';

  //PLACE YOUR CODE BETWEEN THIS LINE:
  function firstPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promises'), 50);
    });
  }

  function secondPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('chained'), 40);
    });
  }

  firstPromise()
    .then(res => {
      console.log(res);
      return secondPromise();
    })
    .then(res => console.log(res));
  //AND THIS ONE
}

/**
 * Task-5: Implement a function getAnimals() that will return the result of
 * 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file;
 * getAnimals() -> ["dogs", "cats", "birds"]
 * @returns {Promise<"["dogs", "cats", "birds"]">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * do NOT use async/await syntax here
 */

function getAnimals() {
  //PLACE YOUR CODE BETWEEN THIS LINE:
  function getDogs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('dogs'), 50);
    });
  }

  function getCats() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('cats'), 100);
    });
  }

  function getBirds() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('birds'), 500);
    });
  }
  Promise.all([getDogs(), getCats(), getBirds()]).then(res => console.log(res));

  //AND THIS ONE
}

module.exports = {
  promiseResolve,
  promiseReject,
  fullPromise,
  getAnimals,
  promisesChaining,
};
