/**
 * Utils
 */
function getRandomNumber() {
	return Math.floor(Math.random() * 5);
}

function waitFor(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const arr = [1, 2, 3, 4, 5];

/**
 * Links
 * https://blog.lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795
 */

/**
 * First Case
 */

console.log('Inici');

arr.forEach(item => {
	console.log(item);
});

console.log('Final');

/**
 * Output:

 Inici
 1
 2
 3
 4
 5
 Final

 * Perquè el forEach no sigui sequencial es necessita alguna cosa que la execució
 * sigui posada a l'event loop, com per exemple una promsea.
 */

/**
 * Second Case
 */
console.log('Inici');

arr.forEach(item => {
	setTimeout(() => {
		console.log(item);
	}, getRandomNumber());
});

console.log('Final');

/**
 * Output:

 Inici
 Final
 1
 5
 4
 2
 3

* Aquest sí que és el cas, ja que la funció setTimeout és asíncrona. Cal recordar
* que quan hi ha una operació asíncrona com una promesa, es posa a l'event loop
* i es segueix executant el codi principal.
*/

/**
 * Third Case
 */
console.log('Inici');

arr.forEach(async (item) => {
	console.log('Item: ');
	await waitFor(getRandomNumber());
	console.log(item);
})

console.log('Final');

/**
 * Output:

 Inici
 Item:
 Item:
 Item:
 Item:
 Item:
 Final
 1
 3
 4
 5
 2

 * Amb async/await només es garanteix que les sentències siguin processades
 * sequencialment dins la funció.
 */

/**
 * Fourth Case
 */
(async function() {
	console.log('Inici');

	for (const item of arr) {
		await waitFor(getRandomNumber());
		console.log(item);
	}

	console.log('Final');
})();

/**
 * Output:

 Inici
 1
 2
 3
 4
 5
 Final

 */

/**
 * Fifth Case
 */
(async function() {
	console.log('Inici');

	arr.forEach(item => {
		console.log('Item: ');
		await waitFor(getRandomNumber()); // Error: Unexpected identifier
		console.log(item);
	});

	console.log('Final');
})();
