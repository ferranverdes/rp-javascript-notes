/**
El paso por valor significa que el valor la variable se almacena en una dirección
de memoria diferente al recibirla en una función, por lo tanto si el valor de esa
variable cambia no afecta la variable original, solomente se modifica dentro del
contexto de la función.

Cuando el paso es por referencia, la variable que se recibe como parámetro en la
función apunta exactamente a la misma dirección de memoria que la variable original
por lo que si dentro de la función se modifica su valor también se modifica la
variable original.

Los parámetros primitivos (como puede ser un número) son pasados a las funciones
por valor; el valor es pasado a la función, pero si la función cambia el valor del
parámetro, este cambio no es reflejado globalmente o en otra llamada a la función.

Si se pasa un objecto como parámetro (ej. un valor no primitivo, como un Array o
un objeto definido por el usuario) se pasa su referencia, así que si la función
cambia las propiedades del objeto este cambio es visible desde afuera de la función.

Links:
- https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
 */

/**
 * Example 1
 */
let primitiveValue = 10;
let object = {
	name: 'John'
};

function first(primitive, obj) {
	primitive = 20;
	obj.name = 'Doe';
	console.log('Inside first: ', primitive, obj);
}

console.log('\nBefore call first: ', primitiveValue, object);
first(primitiveValue, object);
console.log('After call first: ', primitiveValue, object, '\n');

/**
	 _______________ _______________ _______________ _______________ _______________
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
A	|	      10   		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  	*John*   	|		          	|	          		|		          	|
B	|	   name B2 		|	  	 Doe	  	|		          	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	     *10*  		|	  	        	|		          	|	          		|		          	|
C	|	      20   		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|_______________|_______________|_______________|_______________|_______________|
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
D	|    name B2		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
					1								2								3								4								5

	Before:
	primitiveValue A1
	object B1

	Function params:
	primitive C1
	obj D1

	Function body:
	primitive = 20;					C1 '10' change for 20
	obj.name = 'Doe';				D1 --> name B2 --> B2 'John' change for 'Doe'

	After:
	primitiveValue A1
	object B1

 */

/**
 * Example 2
 */
primitiveValue = 10;
object = {
	name: 'John'
};

function second(primitive, obj) {
	primitive = 20;
	obj = {
		name: 'Doe'
	};
	console.log('Inside second: ', primitive, obj);
}

console.log('Before call second: ', primitiveValue, object);
second(primitiveValue, object);
console.log('After call second: ', primitiveValue, object, '\n');

/**
	 _______________ _______________ _______________ _______________ _______________
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
A	|	      10   		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  				   	|		          	|	          		|		          	|
B	|	   name B2 		|	  	 John	  	|		          	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	     *10*  		|	  	        	|		          	|	          		|		          	|
C	|	      20   		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|_______________|_______________|_______________|_______________|_______________|
	|	          		|	  	        	|		          	|	          		|		          	|
	|	  *name B2*		|	  	        	|		          	|	          		|		          	|
D	|    name D2		|	  	 Doe     	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
					1								2								3								4								5

	Before:
	primitiveValue A1
	object B1

	Function params:
	primitive C1
	obj D1

	Function body:
	primitive = 20;					C1 '10' change for 20
	obj = {
		name: 'Doe'						D1 'name B2' change for 'name D2'
	};

	After:
	primitiveValue A1
	object B1

 */

/**
 * Example 3
 */
primitiveValue = 10;
object = {
	subObject: {
		name: 'John'
	}
};

function third(primitive, obj) {
	primitive = 20;
	obj.subObject = {
		name: 'Doe'
	};
	console.log('Inside third: ', primitive, obj);
}

console.log('Before call third: ', primitiveValue, object);
third(primitiveValue, object);
console.log('After call third: ', primitiveValue, object, '\n');

/**
	 _______________ _______________ _______________ _______________ _______________
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
A	|	      10   		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  *name B3*  	|		          	|	          		|		          	|
B	|	 subObject B2	|	   name D2  	|		  John     	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	     *10*  		|	  	        	|		          	|	          		|		          	|
C	|	      20   		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|_______________|_______________|_______________|_______________|_______________|
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
D	|	 subObject B2	|	     Doe   		|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
					1								2								3								4								5

	Before:
	primitiveValue A1
	object B1

	Function params:
	primitive C1
	obj D1

	Function body:
	primitive = 20;					C1 '10' change for 20
	obj.subObject = {
		name: 'Doe'						D1 --> subObject B2 --> B2 'name B3' change for 'name D2'
	};

	After:
	primitiveValue A1
	object B1

 */

/**
 * Example 4
 */
primitiveValue = 10;
object = {
	subObject: {
		name: 'John'
	}
};

function fourth(primitive, obj) {
	let { subObject } = obj;
	primitive = 20;
	subObject = {
		name: 'Doe'
	};
	console.log('Inside fourth: ', primitive, obj);
}

console.log('Before call fourth: ', primitiveValue, object);
fourth(primitiveValue, object);
console.log('After call fourth: ', primitiveValue, object, '\n');

/**
	 _______________ _______________ _______________ _______________ _______________
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	 	*name B3*		|		          	|
A	|	      10   		|	  	        	|		          	|	   name A5		|		   Doe     	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  				  	|		          	|	          		|		          	|
B	|	 subObject B2	|	   name B3  	|		  John     	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	     *10*  		|	  	        	|		          	|	          		|		          	|
C	|	      20   		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|_______________|_______________|_______________|_______________|_______________|
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
D	|	 subObject B2	|	     		   		|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
					1								2								3								4								5

	Before:
	primitiveValue A1
	object B1

	Function params:
	primitive C1
	obj D1

	Function body:
	subObject A4
	primitive = 20;					C1 '10' change for 20
	subObject = {
		name: 'Doe'						A4 'name B3' change for 'name A5'
	};

	After:
	primitiveValue A1
	object B1

 */

/**
 * Example 5
 */
primitiveValue = 10;
object = {
	subObject: {
		name: 'John'
	}
};

function fifth(primitive, obj) {
	let { subObject } = obj;
	primitive = 20;
	subObject.name = 'Doe';
	console.log('Inside fifth: ', primitive, obj);
}

console.log('Before call fifth: ', primitiveValue, object);
fifth(primitiveValue, object);
console.log('After call fifth: ', primitiveValue, object, '\n');

/**
	 _______________ _______________ _______________ _______________ _______________
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	 							|		          	|
A	|	      10   		|	  	        	|		          	|	   name B3		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  				  	|		  *John*   	|	          		|		          	|
B	|	 subObject B2	|	   name B3  	|		   Doe    	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	     *10*  		|	  	        	|		          	|	          		|		          	|
C	|	      20   		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|_______________|_______________|_______________|_______________|_______________|
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
D	|	 subObject B2	|	     		   		|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
					1								2								3								4								5

	Before:
	primitiveValue A1
	object B1

	Function params:
	primitive C1
	obj D1

	Function body:
	subObject A4
	primitive = 20;						C1 '10' change for 20
	subObject.name = 'Doe';		A4 --> name B3 --> B3 'John' change for 'Doe'

	After:
	primitiveValue A1
	object B1

 */

/**
 * Example 6
 */
primitiveValue = 10;
object = {
	subObject: {
		name: 'John'
	}
};

function sixth(primitive, obj) {
	let { subObject: { name } } = obj;
	primitive = 20;
	name = 'Doe';
	console.log('Inside sixth: ', primitive, obj);
}

console.log('Before call sixth: ', primitiveValue, object);
fifth(primitiveValue, object);
console.log('After call sixth: ', primitiveValue, object, '\n');

/**
	 _______________ _______________ _______________ _______________ _______________
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	 							|		          	|
A	|	      10   		|	  	        	|		          	|	   						|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  				  	|		 *John*	   	|	          		|		          	|
B	|	 subObject B2	|	   name B3  	|		   Doe    	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|	     *10*  		|	  	        	|		          	|	          		|		          	|
C	|	      20   		|	  	        	|		          	|	          		|		          	|
 	|	          		|	  	        	|		          	|	          		|		          	|
 	|_______________|_______________|_______________|_______________|_______________|
	|	          		|	  	        	|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
D	|	 subObject B2	|	     		   		|		          	|	          		|		          	|
	|	          		|	  	        	|		          	|	          		|		          	|
	|_______________|_______________|_______________|_______________|_______________|
					1								2								3								4								5

	Before:
	primitiveValue A1
	object B1

	Function params:
	primitive C1
	obj D1

	Function body:
	name B3
	primitive = 20;						C1 '10' change for 20
	name = 'Doe';							B3 'John' change for 'Doe'

	After:
	primitiveValue A1
	object B1

 */
