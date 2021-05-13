const { describe, it } = require('mocha');
const { expect } = require('chai');

const myPromise = state => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (state) {
				resolve('I am resolved');
			} else {
				reject('I am rejected');
			}
		}, 500);
	});
};

const promise1 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('promise1');
		}, 500);
	});
};

const promise2 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('promise2');
		}, 200);
	});
};

describe('Promises', () => {

	it('should resolve the promise', async () => {

		/**
		 * handle the promise (do not forget to return it)
		 * handle the result as 'res' variable
		 */
		myPromise(true);

		/**
		 * place it inside the .then() block
		 * 
		 */
		 expect(res).to.equal('I am resolved');
		 
	});

	it('should reject the promise', async () => {

		/**
		 * handle the promise's rejection (do not forget to return in)
		 * and catch the result as 'res' variable
		 */
		myPromise();

		/**
		 * place it inside the .catch() block
		 * 
		 */
		 expect(res).to.equal('I am rejected');
		 
	});

	it('should resolve the set of promises', async () => {

		/**
		 * Handle these 2 functions using the Promise.all()
		 * Save the the result as 'res' variable
		 */
		promise1();
		promise2();


		/**
		 * and place 2 following expect() blocks inside the .then() block
		 */
		 expect(res).to.include('promise1');
		 expect(res).to.include('promise2');
	});


});

describe('Async/await', () => {

	it('should resolve the promise using async/await', async () => {
		/**
		 * save the result as the variable 'res';
		 */
		//Place you code here:
		myPromise(true);


		// end of your code
		expect(res).to.equal('I am resolved');
	});

	it('should reject the promise using async/await', async () => {
		/**
		 * catch the error using the variable 'e'
		 */
		//Place you code here:
		myPromise();


		// end of your code
		expect(e).to.equal('I am rejected');
	});

	it('should resolve the set of promises using async/await', async () => {

		/**
		 * Handle these 2 functions using the Promise.all()
		 * Save the the result as 'res' variable
		 */
		//Place you code here:
		promise1();
		promise2();


		// end of your code
		 expect(res).to.include('promise1');
		 expect(res).to.include('promise2');
	});
});