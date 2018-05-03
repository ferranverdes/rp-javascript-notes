/**
La última definición del estándar ECMAScript define siete tipos de datos:

Seis tipos de datos que son primitivos:
- Boolean
- Null
- Undefined
- Number (double: 64 bits de precisión)
- String
- Symbol (nuevo en ECMAScript 6)

Y un tipo de datos no primitivo:
- Object

Un tipo primitivo es aquel que cumple dos condiciones:
- Representa un valor inmutable (valor que no puede ser cambiado).
- Representa un único valor.

Javascript es un lenguaje de tipos dinámicos. Esto significa que no se indica al
motor qué tipo de datos contiene una variable, sino que lo deduce él mismo mientras
ejecuta el código. De esta forma, las variables pueden contener diferentes tipos
de valores y todo se descubre en tiempo de ejecución.
 */

console.log(3.43, typeof 3.43);
console.log('bla', typeof 'bla');
console.log(true, typeof true);
console.log(Symbol(), typeof Symbol());
console.log(undefined, typeof undefined);
console.log(null, typeof null);
console.log({ a: 1 }, typeof { a: 1 });
console.log([1, 2, 4], typeof [1, 2, 4]);
console.log(Date, typeof new Date());
console.log(function test() {}, typeof function test() {});
console.log(class C {}, typeof class C {});
