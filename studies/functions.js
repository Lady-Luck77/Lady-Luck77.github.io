/* FUNCTIONS
*
*A function definition consists of the keyword "function" and followed by:
*       **Function is also known as  (function declaration, or function statement)
*       The name of the function.
*       A list of parameters to the function, enclosed in parentheses and separated by commas.
*       The JavaScript statements that define the function, enclosed in curly brackets,{...}
*/
//  FOR EXAMPLE:

            function examples(num1) {
             return num1 * num1;
            }
/*The function "examples" takes one parameter, called num1. 
*The function consists of one statement that says to return the parameter of the function (that is,num1) multiplied by itself. 
*The statement return specifies the value returned by the function.
*
*Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, 
*but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.
*
*If you pass an object as a parameter and the function changes the object's properties, 
*that change is visible outside the function, as shown in the following example:
*/

function cars(theObject) {
  theObject.make = 'Ford';
}

var mycar = {make: 'Chevrolet', model: 'Suburban', year: 2005};
var x, y;

x = mycar.make; // x gets the value "Chevrolet"

cars(mycar);
y = mycar.make; // y gets the value "Ford"
                // (the make property was changed by the function)

/* FUNCTION EXPRESSIONS
*
*Functions can also be created by a function expression. These functions can be anonymous. 
*/

const examples2 = function(number) { return num1 * num1 }
var x = examples(4) // x gets the value 16

//Or you can providea name with a function expression. 
//Providing a name allows the function to refer to itself, and also makes it easier to identify the function later.

const examples3 = function fun2(n) { return n < 2 ? 1 : n * fun2(n - 1) }

console.log(examples3(3))

/*Function expressions are convenient when passing a function as an argument to another function. 
The following example shows a games function that should receive a function as first argument and an array as second argument.

*/
function numPicks(pick1, pick2) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != pick2.length; i++)
    //result[i] = pick1(pick2[i]);
  return result;
}
var pick1 = function(x) {
   return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let result2 = numPicks(pick1,numbers);
console.log(result2);

/*A function can be defined based on a condition as well. 
*For example, the following function definition defines myExamp only if num equals 0:
*/
var myExamp;
if (num === 0) {
  myExamp = cars(theObject);
    theObject.make = 'Ford';
  }


/* Functions can also be shortnened by using the => (arrow function)
*For example:
*/

//var arrowEx = a.exam(x => x.length);

/*
/* Function parameters default to "undefined". 
*
*Calling functions
*
*Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.
*Calling the function actually performs the specified actions with the indicated parameters.
*/
numPicks(5,10);

/*
*Closures
*
*Closures are one of the most powerful features of JavaScript. 
*JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function and 
*all other variables and functions that the outer function has access to.
*However, the outer function does not have access to the variables and functions defined inside the inner function. 
*This provides a sort of encapsulation for the variables of the inner function.
*Also, since the inner function has access to the scope of the outer function, 
*the variables and functions defined in the outer function will live longer than the duration of the outer function execution, 
*if the inner function manages to survive beyond the life of the outer function. 
*A closure is created when the inner function is somehow made available to any scope outside the outer function.
*
*EXAMPLE:
*/

var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer
                             //function
  };
  return getName;            // Return the inner function, thereby exposing it to outer scopes
};
myPet = pet('Milo');

myPet();                     // Returns "Milo"



 var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  };
};

var pet1 = createPet('Milo');
pet1.getName();                  // Milo

pet1.setName('Jax');
pet1.setSex('male');
pet1.getSex();                   // male
pet1.getName();                  // Jax



/*

VARIABLE SCOPE:

Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. 
The two types of scope are local and global:

Global variables are those declared outside of a block
Local variables are those declared inside of a block
In the example below, we will create a global variable.
*/
// Initialize a global variable
var creature = "wolf";
/* 
We learned that variables can be reassigned. Using local scope, we can actually create new variables with the same name as a 
variable in an outer scope without changing or reassigning the original value.

In the example below, we will create a global species variable. Within the function is a local variable with the same name. 
By sending them to the console, we can see how the variable’s value is different depending on the scope, and the original value is not changed.

*/

// Initialize a global variable
var species = "human";

function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);
 
// Output
// human
// werewolf
// human

/*
In this example, the local variable is function-scoped. Variables declared with the var keyword are always function-scoped, 
meaning they recognize functions as having a separate scope. 
This locally-scoped variable is therefore not accessible from the global scope.

The new keywords let and const, however, are block-scoped. This means that a new, local scope is created from any kind of block, 
including function blocks, if statements, and for and while loops.

To illustrate the difference between function- and block-scoped variables, we will assign a new variable in an if block using let.


*/
var fullMoon = true;

// Initialize a global variable
let species2 = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);
 
// Output
// It is a full moon. Lupin is currently a werewolf.
// It is not a full moon. Lupin is currently a human.

//In this example, the species variable has one value globally (human), and another value locally (werewolf). 
//If we were to use var, however, there would be a different result.

// Use var to initialize a variable
var species1 = "human";

if (fullMoon) {
  // Attempt to create a new variable in a block
  var species4 = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species1}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species4}.`);
 
// Output
// It is a full moon. Lupin is currently a werewolf.
// It is not a full moon. Lupin is currently a werewolf.

/*

In the result of this example, both the global variable and the block-scoped variable end up with the same value, werewolf. 
This is because instead of creating a new local variable with var, you are reassigning the same variable in the same scope. 
var does not recognize if to be part of a different, new scope. 
It is generally recommended that you declare variables that are block-scoped, 
as they produce code that is less likely to unintentionally override variable values.



/*
***********************************************************
*/
var myPet;
var num;
examples2;
var theObject;
var a = {exam: "a"};
var num1;
