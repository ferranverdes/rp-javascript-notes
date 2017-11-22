/**
 * Async/await with forEach and error handling
 */
function processElem(elem) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (elem === 4) {
				reject('is 4!');
			} else {
				console.log(`Element ${elem} processed`);
				resolve(elem);
			}
		}, Math.floor(Math.random() * 2000)); // Between 0 and 2 random seconds
	});
}

async function test() {
	[1, 2, 3, 4, 5].forEach(async elem => {
		console.log(`Before ${elem}`);
		await processElem(elem);
		console.log(`After ${elem}`);
	});
}

/*test().catch((err) => {
  console.log(`Test function fails because ${err}`);
});*/

/**
 * [Output]

 Before 1
 Before 2
 Before 3
 Before 4
 Before 5
 Element 3 processed
 After 3
 Element 5 processed
 After 5
 (node:53984) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): is 4!
 (node:53984) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
 Element 1 processed
 After 1
 Element 2 processed
 After 2

 */

async function test2() {
	[1, 2, 3, 4, 5].forEach(async elem => {
		async function run() {
			console.log(`Before ${elem}`);
			await processElem(elem);
			console.log(`After ${elem}`);
		}

		run().catch(err => {
			console.log(`Rejected because ${err}`);
		});
	});
}

test2().catch(err => {
	console.log(`Test function 2 fails because ${err}`);
});

/**
  * [Output]

  Before 1
  Before 2
  Before 3
  Before 4
  Before 5
  Element 1 processed
  After 1
  Element 5 processed
  After 5
  Rejected because is 4!
  Element 2 processed
  After 2
  Element 3 processed
  After 3

  */
