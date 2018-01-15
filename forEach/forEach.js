
var arr = [1, 2, 3, 4, 5]

console.log('Inici');

arr.forEach((item) => {
	// Perquè no sigui sequencial necessita alguna cosa que l'execució sigui posada a l'event loop
	// Per exemple un timeout
	console.log(item)
})

console.log('Final');
console.log();


var arr = [1, 2, 3, 4, 5]

console.log('Inici 2');

arr.forEach((item) => {
	setTimeout(() => {
		console.log(item)	
	}, 0)	
})

console.log('Final 2');
console.log();


/*

var arr = [1, 2, 3, 4, 5]
const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms))

console.log('Inici 3');

arr.forEach(async (item) => {
	// Amb async/await només es garanteix que els número siguin processats sequencialment.
	// Però quan hi ha una operació asíncrona com una promesa, es posa a l'event loop i es segueix executant el codi
	await waitFor(0);
	console.log(item);
})

console.log('Final 3');
console.log();*/

