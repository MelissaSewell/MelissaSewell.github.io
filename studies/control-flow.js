// CONDITIONAL STATEMENTS
//  - allow us to control the flow of our application
//  - we ask questions that will result in a boolean value (true or false)
/* to start a conditional block of code you need an if statement
* if you have more than one condition to test you'll add an else-if statement
* or you can end your conditional with an else statement
*/

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //need to test for string or number
    if (typeof base === 'string' || typeof base === 'number') {
        return function (value) {
            if (value > base) {
                return true;
            } else {
                return false;
            }
        };
    }
}

/* Switch Statement
Used to perform different actions based on different conditions
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
*/
var color = 'purple';

switch (color) {
  case 'green':
    console.log('The color provided was green.');
    break;
  case 'yellow':
    console.log('The color provided was yellow.');
    break;
  case 'red':
    console.log('The color provided was red.');
    break;
  default:
    console.log('Sorry, that is not a color we recognize.');
}
//prints 'Sorry, that is not a color we recognize.'