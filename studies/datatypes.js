// DATA TYPES 

/*Number - numeric data
*/
var total = 0;
var previoustotal = 10;
console.log(total); // returns 0

var sum = 10 * 20 / 3 + 5;
console.log(sum); //returns 71.666

var remainder = 20 % 3;
console.log(remainder); // returns 2

/*String - characters surrounded by data
Strings are a string of characters, or an Array of characters
*/
//Accessing string characters with array syntax
var name = 'Erika';
//name[index position]
console.log(name[0]);
console.log(name[4]);

var myString = 'hello';
console.log(myString.slice(0, 2)); // returns 'he'
console.log(myString.charAt(0).toUpperCase() + myString.slice(1)); // returns 'Hello'

/*Boolean - true of false
*/
var isCool = true;
console.log(isCool); // returns true
isCool = false;
console.log(isCool); // returns false

/*Array - a zero indexed list of value that holds other data types
* Access value with bracket notation: arrays name[position you're tyring to access]
* Syntax for creating a literal array: [] brackets
*/

var names = ['John', 'Max', 'Andy', 'Tyler'];
console.log(names[0]); // prints 'John' - gets the first value out of an array
console.log(names[names.length - 1]); // prints 'Tyler' - gets the last value in an array

//Some methods and properties of an array
var myArray = [1, 2, 3];
console.log(myArray.length); // prints 3
console.log(myArray.push(4)); // prints 4
console.log(myArray.shift()); // prints 1


/*Object - a collection of key value pairs. Values are not ordered not do they have an index.
* Access values with bracket notation or dot notation
* Bracket notation: name of obj['name of property']
* Dot notation: name of obj.name of property
* Syntax for creating a literal object: {} curly braces
*/

var a = {one: 'pub'};
//the value stored in b is a REFERENCE to the value stored in a
//they both now point to the same object
var b = a;
//changing the value at b effects all references because the value
// is reference to the same object
b.one = 'bar';
console.log(a.one); // prints 'bar'

/*Function - a block of code we can reuse
* Use them to avoid writing code multiple times
* Define by: function name(parameter) {
                function body
                function body
                return statement
            }
* Call/execute function: name(arguements)
*/

/*undefined - an undefined value
*/

/*null - no value, nullified by programmer
*/

/*NaN - Not a Number
*/

/*Infinity and -Infinity (Google them if you don't know!)
Infinity:
The global Infinity property is a numeric value representing infinity, it's a variable in global scope.
The value of infinity is greater than any other value.
Any number divided by inifinity is 0.
Any positive number multiplied by Infinity equals Infinity.
*/
console.log(1 / Infinity); //returns 0
console.log(Infinity + 1); //returns Infinity

/*
-Infinity:
Any positive value, including +Infitinity, multiplied by -Infinity is -Infitity.
Any negative value, including -Infinity, multiplied by -Infinity is +Infinitve.
Any positive value divided by -Infinity is negative zero.
Any negative value divided by -Infinity is positive zero.
Zero multiplied by -Infinity is NaN.
NaN multiplied by -Infinity is NaN.
-Infinity, divided by any negative value except -Infinity, is +Infinity.
-Infinity, divided by any positive value except +Infinity, is -Infinity.
-Infinity, divided by either -Infinity or +Infinity, is NaN.
*/

/*What is the difference between primitive/simple and complex data types?
* Primitive/Simple do not hold, collect or aggregate other values, and operations on simple values return new simples values.
* They do not alter the original value.
* Complex values aggregate other values and therefore are of indefinite size.
*/

/*Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
* Complex values are mutable, meaning you can change the values to which their keys are assigned, and, you can add and remove key/value pairs. 
* Primitive values are immutable and therefore never change. 
* Operations on primitive values return new values. 
* Immutable data types are copy by value. 
* Mutable datatypes are copy by reference.
*/

// Example of Copy by Value
const maddy = 'maddy catsby';

function printNames(fullName) {
    const names = fullName.split(' ');
    console.log(`Your first name is ${names[0][0].toUpperCase()}${names[0].slice(1)}!`);
    console.log(`Your last name is ${names[1][0].toUpperCase()}${names[1].slice(1)}!`);
}

printNames(maddy);
// prints:
// 'Your first name is Maddy!'
// 'Your last name is Catsby!'

console.log(maddy);
// prints:
// 'maddy catsby'

// Example of Copy by Reference
const melissa = {nameFirst: 'Melissa', nameLast: 'Sewell'};

function printName(person) {
    person.nameFull = `${person.nameFirst} ${person.nameLast}`;
    console.log(`Your full name is ${person.nameFull}!`);
}

printName(melissa);
// prints:
// 'Your full name is Melissa Sewell!'

console.log(melissa);
/* prints:
 * '[object Object] {
 *    nameFirst: "Melissa",
 *    nameLast: "Sewell",
 *    nameFull: "Melissa Sewell"
 * }'
 */

