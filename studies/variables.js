/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* variable LET 
*   -Let is the keyword to declare a block scoped variable. 
*   -This means they are equal to if statements, loops or functions.
*   - Lets can be unassigned and can be reassigned to any value.
*   - Lets are NOT hoisted to the top of the code block in which they're declared.
*/
/* let weather = 'sunny'
if(weather === 'cloudy') {
  let message = 'nice day if you\'re a duck!';
} else if (weather === 'sunny') {
  message = 'nice day, eh?'
}
console.log(message); // prints 'nice day, eh?'
*/


/* variable CONST
*   -Const is the keyword to declare a constant.
*   -Constants must be assigned at declaration and cannot be reassigned.
*   -Constants are block scoped which mean they are scoped to if statements, loops or functions.
*   -Constants are NOT hoisted to the top of the block of code in which they are declared.
*/
/*const outside = 'sunny';
if(outside === 'sunny') {
    const result = 'nice day, eh?';
}
console.log(result); // prints reference error because constants cannot be reassigned
*/

/* Hoisting
- Variable declarations AND function declarations
- Taken to top of their scope
- Different types hoisted differently
    - Variables: Only name
    - Functions: Name AND body
- Happens at runtime
*/

/* This means:
Variables 
    - Can be declared anywhere
    - Available anywhere in scope
        - Before OR after declaration 
    - No value UNTIL assigned
Functions
    - Can be declared anywhere
    - Available anywhere in scope
        - Before OR after declaration 
    - Assigned value AT ALL TIMES
*/
