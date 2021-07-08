/* LOOPS
*
*Loops help you do a task over and over again.
*You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, 
*then Y steps in another. For example, the idea "Go ten steps to the west" could be expressed this way as a loop:
*/

for (let step = 0; step < 10; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking west one step');
}

/*There are many different types of loops.
*
*FOR STATEMENT:
*
*A for loop repeats until a specified condition evaluates to false. 
*
*FOR EXAMPLE:
*/

// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement

/*
*When a for loop executes, the following occurs:
*
*The initializing expression initialExpression, if any, is executed. 
*This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. 
*This expression can also declare variables.
*The conditionExpression expression is evaluated. If the value of conditionExpression is true, the loop statements execute. 
*If the value of condition is false, the for loop terminates. 
*(If the condition expression is omitted entirely, the condition is assumed to be true.)
*The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
*If present, the update expression incrementExpression is executed.
*Control returns to Step 2.
*
*/

//For Loop Example:

var cars = ["Chevrolet", "Tesla", "Chrystler", "Ford"];
var text = "";
for (var i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

/*Do...While Loops:
*
*The do...while statement repeats until a specified condition evaluates to false.
*
*For Example:
*/
do
  statement;
while (condition);


let b = 0;
do {
  b += 1;
  console.log(b);
} while (b < 5);


//WHILE LOOP

var z=0;
while (z < 10) {
	console.log(z);
	z++;
}


/*
*AVOID INFINITE LOOPS!! 
*Make sure the condition in a loop eventually becomes false. Otherwise, the loop will never terminate! 
*Example of Infinite Loop:
*
* Infinite loops are bad!
*   while (true) {
*  console.log('Hello, world!');
* }

/* FOR...IN LOOP:
*The for...in statement iterates a specified variable over all the enumerable properties of an object. 
*For each distinct property, JavaScript executes the specified statements. 
*
FOR EXAMPLE:
*/

for (variable in object)
  statement;
  
  
var object = {a: 1, b: 2, c: 3};

for (let property in object) {
  console.log(`${property}: ${object[property]}`);
}

/*FOR...OF LOOPS:
*
*The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), 
*invoking a custom iteration hook with statements to be executed for the value of each distinct property.
*/

// for (variable of object)
//   statement;


/*The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over 
*property names, for...of iterates over property values:
*/


const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}








// var initialExpression;
// var conditionExpression;
// var incrementExpression;
var statement;
var condition;
var variable;