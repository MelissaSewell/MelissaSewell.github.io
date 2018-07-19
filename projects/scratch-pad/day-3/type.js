// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
   if (Array.isArray(value)) {
       return true;
   } else {
       return false;
   }
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //if/else conditonal
    // if it's an array return false
    if (Array.isArray(value)) {
        return false;
    }
    // if value is equal to null return false
    else if ( value === null) {
        return false;
    }
    // if a value is a number return false
    else if (typeof value === 'number') {
        return false;
    }
    // if a value is a string return false
    else if (typeof value === 'string') {
        return false;
    }
    // if object is a boolean
    else if (typeof value === 'boolean') {
        return false;
    }
    //date bullshit
    else if (value instanceof Date) {
        return false;
    }
    // if value is euqusl to 'object' return true
    else if (typeof value === 'object') {
        return true;
    }
   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    //ones that will fuck you over
    if ( value === null) {
        return false;
    } else if (value instanceof Date) {
        return false;
    }
    //one that will return true
    else if (typeof value === 'object') {
        return true;
    }
    //else everything else
    else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
   if (typeof value === 'string') {
       return 'string';
   } else if (Array.isArray(value)) {
       return 'array';
   } else if (value === null) {
       return 'null';
   } else if (typeof value === undefined) {
       return 'undefined';
   } else if (typeof value === 'number') {
       return 'number';
   } else if (typeof value === 'boolean') {
       return 'boolean';
   } else if (typeof value === 'function') {
       return 'function';
   } else if (value instanceof Date) {
       return 'date';
   }  else if (typeof value === 'object') {
       return 'object';
   }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
