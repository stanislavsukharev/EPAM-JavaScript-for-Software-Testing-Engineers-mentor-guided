const {
  promiseResolve,
  promiseReject
} = require('./promises');
const {
  getDogs,
  getCats,
  getBirds
} = require("./utils/utilPromises");
/**
 * Materials: 
 * - https://javascript.info/async-await
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * 
 */

/**
 * TASK-1: Resolve the created earlier promiseResolve promise
 * using async/await syntax inside the asyncPromiseResolve function
 * @returns {Promise<"Resolved!">}
 * 
 */
async function asyncPromiseResolve() {
  const result = await promiseResolve();
  return result;
}

/**
 * TASK-2: Reject the created earlier promiseReject promise
 * using async/await syntax inside the asyncPromiseReject function
 * @returns {Promise<"Rejected!">}
 */
async function asyncPromiseReject() {
  try {
    await promiseReject();
  } catch (e) {
    return e;
  }
}

/**
 * TASK-3: Return the result of 3 promises: 
 * getDogs(), getCats() and getBirds() from the './utils/utilPromises' file
 * using async/await syntax
 * @returns 
 */
async function asyncPromiseAll() {
  const result = await Promise.all([getDogs(), getCats(), getBirds()]);
  return result;
}

module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll
};