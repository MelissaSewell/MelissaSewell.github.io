// LOOPS
// Loops are built in constructs that allow us to repeat an action
// We use loops to avoid writing code multiple times
// 4 types of loops: for loop, for-in loop, while loop, do...while loop

// For Loop - great for iterarting/looping (forward or backard) over Arrays
// 3 parts: (start condition; stop condition; increment expression)
for (var i = 0; i <= 20; i++){
    console.log(i);
}

// For-In Loop - designed for iterating/looping over Objects
// Pulls out all the keys of an object
var pets = {
    dog: 'Anubis',
    cat: 'Novena',
    owl: 'Hedwig'
};
for (var key in pets) {
    console.log(key); //returns dog, cat, owl
    console.log(pets[key]); //returns Anubis, Novena, Hedwig
}

//While Loop
//Uses the keyword, while, then in parenthesis, states a condition that as long as it's true will continue to execute that block of code.
var count = 0;
while (count < 10) {
    console.log('count: ', count);
    count = count + 2;
}
// returns 'count: '0, 'count: '2, 'count: '4, 'count: '6, 'count: '8

//Loop Forward Over An Array
var arr = [1, 2, 3, 4];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1, 2, 3, 4
}

//Loop Backward Over an Array
var arr = ['a', 'b', 'c'];
for (var i = arr.length - 1; i > -1; i--) {
    console.log(arr[i]); // c, b, a
}

//Loop over Objects
var obj = {
    one: 'a',
    two: 'b',
    three: 'c'
};
for (var key in obj) {
    console.log(key); // one, two, three
    console.log(obj[key]); // a, b, c
}