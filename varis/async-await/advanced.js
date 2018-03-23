/**
 * The async function declaration defines an asynchronous function, which returns
 * an AsyncFunction object.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
 * See an exemple of AsyncFunction object:
 */
let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
let asyncFunctionInstance = new AsyncFunction(
  'firstParam',
  'secondParam',
  'console.log(`${firstParam}, ${secondParam}`); return `done!`;'
);

asyncFunctionInstance('Hello', 'World!')
  .then(result => {
    console.log(`Result is ${result}`);
  })
  .catch(err => {
    console.log(`Error because ${err}`);
  });

/**
 * [Output]

Hello, World!
Result is done!

 */


/**
 * When an async function is called, it returns a Promise. When the async function
 * returns a value, the Promise will be resolved with the returned value.  When
 * the async function throws an exception or some value, the Promise will be
 * rejected with the thrown value.
 *
 * Remember: When an async function is called, it returns a Promise.
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */
async function asyncfunctionResolve() {
  return 10;
}

asyncfunctionResolve().then(result => {
  console.log(`Resolved with value ${result}`);
});

async function asyncfunctionReject() {
  throw new Error('Rejected');
}

asyncfunctionReject().catch(err => {
  console.log(`Rejecte because ${err}`);
});

/**
 * [Output]

Resolved with value 10
Rejecte because Error: Rejected

 */


/**
 * The await operator is used to wait for a Promise. It can only be used inside
 * an async function. The await expression causes async function execution to pause
 * until a Promise is fulfilled or rejected.
 */
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

async function f2() {
  var y = await 20; // If the value is not a Promise, it converts the value to a resolved Promise, and waits for it.
  console.log(y); // 20
}

async function test() {
  console.log('Starting test function...');
  console.log('Before f1');
  f1();
  console.log('After f1 and before f2');
  await f2();
  console.log('After f2');
  console.log('Ending test function...');
}

test();

/**
 * [Output]

 Starting test function...
 Before f1
 After f1 and before f2
 20
 After f2
 Ending test function...
 10

 */


/**
 * Async/await with error handling
 */
function f3() {
  return Promise.reject(`Rejected!`);
}

async function test2() {
  await f1();
  await f2();
  await f3();
}

test2().catch((err) => {
  console.log(`Test function 2 fails because ${err}`);
})

/**
 * [Output]

 10
 20
 Test function fails because Rejected!

 */

/**
 * Complex situation
 */
function f4() {
  return [1, 2, 3, 4, 5];
}

function processElem(elem) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Element ${elem} processed`);
      resolve();
    }, Math.floor(Math.random() * 2000)); // Between 0 and 2 random seconds
  });
}

async function test3() {
  await f1();
  await f2();
  let array = await f4();
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    await processElem(array[i]);
  }

  /**
   * forEach() executes the callback function once for each array element; unlike
   * map() or reduce() it always returns the value undefined and is not chainable.
   * The typical use case is to execute side effects at the end of a chain.
   */
  console.log();
  array.forEach(async elem => {
    console.log(`Before ${elem}`);
    await processElem(elem);
    console.log(`After ${elem}`);
  });
}

test3();

/**
 * [Output]

 10
 20
 [ 1, 2, 3, 4, 5 ]
 Element 1 processed
 Element 2 processed
 Element 3 processed
 Element 4 processed
 Element 5 processed

 Before 1
 Before 2
 Before 3
 Before 4
 Before 5
 Element 2 processed
 After 2
 Element 5 processed
 After 5
 Element 3 processed
 After 3
 Element 4 processed
 After 4
 Element 1 processed
 After 1

 */
