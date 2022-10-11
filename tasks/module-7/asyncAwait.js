const { promiseResolve, promiseReject } = require('./promises');
const { getDogs, getCats, getBirds } = require('./utils/utilPromises');
/**
 * Materials:
 * - https://javascript.info/async-await
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 */

/**
 * TASK-1: Resolve the created earlier promiseResolve() promise
 * using async/await syntax inside the asyncPromiseResolve function
 * and modify the message to -> Resolved! with async await
 * @returns {Promise<"Resolved! with async await">}
 *
 */
// async function asyncPromiseResolve() {
//   //PLACE YOUR CODE HERE:
//   return new Promise((resolve, reject) => {
//     resolve('Resolved! with async await');
//   });
// }

async function asyncPromiseResolve() {
  return Promise.resolve('Resolved! with async await');
}

/**
 * TASK-2: Reject the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and modify the message to -> Rejected! with async await
 * @returns {Promise<"Rejected! with async await">}
 */
async function asyncPromiseReject() {
  //PLACE YOUR CODE HERE:
  if (Promise.reject);
  return 'Rejected! with async await';
}

/**
 * TASK-3: Return the result of 3 promises:
 * getDogs(), getCats() and getBirds() from the './utils/utilPromises' file
 * using async/await syntax
 * Promise.all - isn't allowed to use
 * @returns
 */
async function asyncPromiseAll() {
  // PLACE YOUR CODE HERE:
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
  //AND THIS ONE
}

module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll,
};
