/* DATA TYPES
*
*JavaScript is a loosely typed and dynamic language. 
*Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned 
*(and re-assigned) values of all types:
*/

let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean

/*
*Data and Structure types:
*
*The standard defines nine types:
*
*SIX DATA TYPES..that are primitives, checked by typeof operator:
*
    UNDEFINED : typeof instance === "undefined"
    BOOLEAN : typeof instance === "boolean"
    NUMBER : typeof instance === "number"
    STRING : typeof instance === "string"

**Structural Types:
    
    OBJECT : typeof instance === "object". 
     Special non-data but Structural type for any constructed object instance also used as data structures: 
     new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
    
    FUNCTION : a non-data structure, though it also answers for typeof operator: typeof instance === "function". 
     This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.

**Structural Root Primitive:
    
    NULL : typeof instance === "object". 
    Special primitive type having additional usage for its value: if object is not inherited, then null is shown;

*/
/*

Primitive values

There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

All types except objects define immutable values (that is, values which can't be changed). 
For example (and unlike in C), Strings are immutable. We refer to values of these types as "primitive values".

Boolean type

Boolean represents a logical entity and can have two values: true and false. See Boolean and Boolean for more details.

Null type

The Null type has exactly one value: null. See null and Null for more details.

Undefined type

A variable that has not been assigned a value has the value undefined. See undefined and Undefined for more details.

Number type

There are two built-in numeric types: Number and BigInt


The Number type represents floating-point numbers and the number type has three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number").

    To check for the largest available value or smallest available value within ±Infinity, 
    you can use the constants Number.MAX_VALUE or Number.MIN_VALUE.
*/


/*
String type

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. 
Each element in the String occupies a position in the String. 
The first element is at index 0, the next at index 1, and so on. 
The length of a String is the number of elements in it.

Unlike some programming languages (such as C), JavaScript strings are immutable. 
This means that once a string is created, it is not possible to modify it.

However, it is still possible to create another string based on an operation on the original string. For example:

A substring of the original by picking individual letters or using String.substr().
A concatenation of two strings using the concatenation operator (+) or String.concat().

*/

//Examples of Data Types:

//String Data Type
var strSingle = 'John'; //String with single quotes
var strDouble = "Bob"; //String with double quotes

//Number Data Type
var num = 25; //Integer
var flo = 80.5; //Floating-point number
var exp = 4.25e+6; //Exponential notation, this equates to 4250000

//Boolean Data Type
var isReading = true; //Yes, I'm reading
var isSleeping = false; //No, I'm not sleeping

//Undefined Data Type
var undef; //If a value is never assigned, any output will be 'undefined'

//Null Data Type
var noValue = null; //Null meaning that it is has no value, not the same as 0 or ""

//Object Data Type
var emptyObject = {};
var person = {"name": "Clark", "surname": "Kent", "age": "36"}; //The quotes around the propety name can be omitted if the property name is a valid JS name
var car = { //Same as person but easier to read
	model: "BMW X3", //Example with quotes around property name ommitted
	color: "white",
	doors: 5
}

//Array Data Type
var emptyArray = []; //An array can be of any data types (string, number, boolean, etc.)
var array = ["One", "Two"] //String array, note the index of the first element is 0

//Function Data Type
var func = function() { //Calling the function: func();
  alert("Code excuted"); //Outputs: Code executed
}

var funcVar = function(amount) { //Calling the function: funcVar(6); 
  alert("Code excuted " + amount + " times"); //Outputs: Code executed 6 times (if input was 6)
}

//Typeof Operator
typeof variable; //Returns the data type of the variable

/*
ACCESSING A VALUE FROM A COMPLEX DATA TYPE


**You can access the properties of an object in JavaScript in 3 ways:

-Dot property accessor: object.property

  A common way to access the property of an object is the dot property accessor syntax:

  expression.identifier
  
expression should evaluate to an object, and identifier is the name of the property you’d like to access.
*/

const hero = {
  name: 'Batman'
};

// Dot property accessor
hero.name; // => 'Batman'



/*
-Square brackets property access: object['property']

   The square brackets property accessor has the following syntax:

      expression[expression]
      
   The first expression should evaluate to an object and the second expression should evaluate to a string denoting the property name.
*/

//SQUARE BRACKETS EXAMPLE:
const property = 'name';
const hero2 = {
  name: 'Batman'
};

// Square brackets property accessor:
hero2['name'];   // => 'Batman'
hero2[property]; // => 'Batman'


/*

-Object destructuring: const { property } = object

 The basic object destructuring syntax is pretty simple:

  const { identifier } = expression;
  
 identifier is the name of the property to access and expression should evaluate to an object. 
 After the destructuring, the variable identifier contains the property value.
*/
//Destructuring Example:
const hero3 = {
  name: 'Batman'
};

// Object destructuring:
const { name } = hero3;
name; // => 'Batman'

/*
Accessing JavaScript array elements

JavaScript arrays are zero-based indexed. In other words, the first element of an array starts at index 0, the second element starts at index 1, and so on.

To access an element in an array, you specify an index in the square brackets []:

arrayName[index]

*/
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'


/*
COPY BY REFERENCE VS COPY BY VALUE

The difference between pass-by-reference and pass-by-value is, pass-by-value creates a new space in memory and makes a copy of a value, 
whereas pass-by-reference does not. Instead of making a copy, pass-by-reference does exactly what it sounds like; a value stored in memory gets referenced.

Short Way To Remember: Complex values are pass-by-reference and Primitive values are pass-by-value.

*/