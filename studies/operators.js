//OPERATORS

/*Assignment operators
* =, +=, -=, *=, /=, %=
*/
var message = 'Hello';
message += ' World!';
console.log(message); //  returns 'Hello World!'


/*Arithmetic operators
* +, -, *, / , %, ++, --
*/
var z = 2;
console.log(++z); // prints 3
console.log(--z); // prints 2
console.log(z++); // prints 2
console.log(z--); // prints 3
console.log(z);   // prints 2

console.log(z += 2); // prints 4
console.log(z -= 2); // prints 2
console.log(z *= 2); // prints 4
console.log(z /= 2); // prints 2

/*Expressions can stand in where values are expected. 
The Function add() takes two Numbers, to be passed in as parameters a and b. We’re passing in two expressions, 1 + 1, and 2 + 2.
The value of sum is 6;
*/
function add(a, b) {
    return a + b;
}

var sum = add(1 + 1, 2 + 2);



/*Comparison operators
* == (Equal), != (Not Equal), >, <, >=, <=
*/
console.log(1 < 2); // returns true
console.log(0.667 > 2); // returns false
console.log(1 <= 2); // returns true
console.log(1 >= 2); // returns false


/*Logical operators
* || (or), && (and), ! (not)
*/
console.log(true && true);
console.log(false || true);

var result = '';
if(!result) {
    console.log('There was no result!');
} else {
    console.log('There was a result!');
}
// returns 'There was no result!'

/*Unary operators (!, typeOf, -)
* Only work with one value
*/
var i = 1;
console.log(-i); // runs -1
console.log(1 - 1); // runs 0

// the bang operator flips the truthiness of the value
console.log(!true); // runs false
console.log(!false); // runs true
console.log(!null); // runs true

/*Ternary operator (a ? b : c)
* works with three values
*/
function getFee(isMember){
    return (isMember ? '$2.00' : '$10.00')
}

/* Strict comparison and Non-strict
Strict comparison takes into account the type of the values. Unless you have a good reason, always use strict comparison!
*/
console.log(1 === '1'); // prints false
console.log(1 == '1'); // prints true

console.log(1 !== '1'); // prints true
console.log(1 != '1'); // prints false
