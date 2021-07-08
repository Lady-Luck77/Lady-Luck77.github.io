/* CONTROL FLOW

Control flow

The control flow is the order in which the computer executes statements in a script.

Code is run in order from the first line in the file to the last line, 
unless the computer runs across the structures that change the control flow, such as conditionals and loops. 

For example:
*/
// if (field == empty) {
//   promptUser();
// } else {
//     submitForm();
// }

/*
A typical script in JavaScript includes many control structures, including conditionals, loops and functions. 
Parts of a script may also be set to execute when events occur.

For example, the above excerpt might be inside a function that runs when the user clicks the Submit button for the form. 
The function could also include a loop, which iterates through all of the fields in the form, checking each one in turn. 
Looking back at the code in the if and else sections, the lines promptUser and submitForm could also be calls to other functions in the script. 
As you can see, control structures can dictate complex flows of processing even with only a few lines of code.

Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

There are multiple different types of conditionals in JavaScript including:

“If” statements: where if a condition is true it is used to specify execution for a block of code.
“Else” statements: where if the same condition is false it specifies the execution for a block of code.
“Else if” statements: this specifies a new test if the first condition is false.

*/
if (false) {
      var outcome = "if block";
} else if (true) {
      var outcome = "else if block";
} else {
      var outcome = "else block";
}

outcome;

/*
The switch statement executes a block of code depending on different cases.

The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. 
Use switch to select one of many blocks of code to be executed. This is the perfect solution for long, nested if/else statements.

The switch statement evaluates an expression. The value of the expression is then compared with the values of each case in the structure. 
If there is a match, the associated block of code is executed.

The switch statement is often used together with a break or a default keyword (or both). These are both optional:

The break keyword breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block. 
If break is omitted, the next code block in the switch statement is executed.

The default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch. 
Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.

*/

//Switch Statement Example

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown Day";
}




var field;
var empty;
var promptUser;
var submitForm;