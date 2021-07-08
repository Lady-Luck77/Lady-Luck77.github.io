/*
* OPERATORS:
*
*
* 1. JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator. 
*    A binary operator requires two operands, one before the operator and one after the operator
*    A unary operator requires a single operand, either before or after the operator.
*
* 2. ASSIGNMENT OPERATORS: An assignment operator assigns a value to its left operand based on the value of its right operand.
*  
*   NAME:                           Shorthand:              Meaning:
*   Assignment	                    x = y               	x = y
*   Addition assignment	            x += y              	x = x + y
*   Subtraction assignment	        x -= y              	x = x - y
*   Multiplication assignment   	x *= y	                x = x * y
*   Division assignment	            x /= y	                x = x / y
*   Remainder assignment           	x %= y              	x = x % y
*   Exponentiation assignment   	x **= y	                x = x ** y
*   Left shift assignment        	x <<= y	                x = x << y
*   Right shift assignment	        x >>= y	                x = x >> y
*   Unsigned right shift assignment	x >>>= y	            x = x >>> y
*   Bitwise AND assignment        	x &= y	                x = x & y
*   Bitwise XOR assignment       	x ^= y              	x = x ^ y
*   Bitwise OR assignment	        x |= y	                x = x | y
*   Logical AND assignment	        x &&= y	                x && (x = y)
*   Logical OR assignment        	x ||= y	                x || (x = y)
*   Logical nullish assignment  	x ??= y	                x ?? (x = y)
*
*EXAMPLE OF ASSIGNMENT OPERATORS:
*/
//*Addition- 
var addAssign = addAss += 2;
//*Subtraction- 
var subAssign = subAss -= 3;

/* 3. COMPARISON OPERATORS: A comparison operator compares its operands and returns a logical value based on whether the comparison is true. 
*    The operands can be numerical, string, logical, or object values.
*
*Operator	                            Description	                                   Examples returning true
*Equal (==)	                 Returns true if the operands are equal.                           	3 == var1
*                                                                                                "3" == var1
*                                                                                                 3 == '3'
*Not equal (!=)	         Returns true if the operands are not equal.	                        var1 != 4
*                                                                                               var2 != "3"
*Strict equal (===)	Returns true if the operands are equal and of the same type. 	            3 === var1
*Strict not equal (!==)	Returns true if the operands are of the same type but not equal, 
*                       or are of different type.	                                            var1 !== "3"
*                                                                                               3 !== '3'
*Greater than (>)	Returns true if the left operand is greater than the right operand.	        var2 > var1
*                                                                                               "12" > 2
*Greater than or equal (>=)	Returns true if the left operand is greater than or equal 
*                           to the right operand.	                                            var2 >= var1
*                                                                                               var1 >= 3
*Less than (<)	Returns true if the left operand is less than the right operand.	            var1 < var2
*                                                                                               "2" < 12
*Less than or equal (<=)	Returns true if the left operand is less than or equal 
*                       to the right operand.	                                                var1 <= var2
*                                                                                               var2 <= 5
*/
//EXAMPLES OF COMPARISON OPERATORS:

//GREATER THAN-
var greatThan = 10 > 2;

//
//STRICTLY EQUAL-
var strictEql = 12 === 12;



/*4. ARITHMETIC OPERATORS: An arithmetic operator takes numerical values (either literals or variables) as their operands 
*   and returns a single numerical value.
*
*   Standard Arithmetic Operations (+, -, *, /)
*
*Operator	                                Description	                                                                 Example
*Remainder (%)	        Binary operator. Returns the integer remainder of dividing the two operands.            	12 % 5 returns 2.
*Increment (++)	        Unary operator. Adds one to its operand. If used as a prefix operator (++x), 
*                        returns the value of its operand after adding one; if used as a postfix operator (x++),     If x is 3, then ++x sets x to 4 and returns 4
*                        returns the value of its operand before adding one.	                                        whereas x++ returns 3 and, only then, sets x to 4.
*Decrement (--)	        Unary operator. Subtracts one from its operand.                                             If x is 3, then --x sets x to 2 and returns 2
*                        The return value is analogous to that for the increment operator.	                        whereas x-- returns 3 and, only then, sets x to 2.
*Unary negation (-)	    Unary operator. Returns the negation of its operand.	                                    If x is 3, then -x returns -3.
*Unary plus (+)      	Unary operator. Attempts to convert the operand to a number, if it is not already.	
*                                                                                                                    +"3" returns 3.
*                                                                                                                    +true returns 1.
*
*Exponentiation operator (**)	Calculates the base to the exponent power, that is, baseexponent                	2 ** 3 returns 8.
*                                                                                                                   10 ** -1 returns 0.1.
*/
//ADDITION OPERATOR-
var addOp = 2 + 4;

//REMAINDER OPERATOR-
var remOp = 15 % 5;


/* 2. LOGICAL OPERATORS: Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. 
*   However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, 
*   they may return a non-Boolean value.
*  
*   Operator                    Usage	                                         Description
*Logical AND (&&)	        expr1 && expr2	                Returns expr1 if it can be converted to false; otherwise, returns expr2. 
*                                                            Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
*Logical OR (||)	        expr1 || expr2	                Returns expr1 if it can be converted to true; otherwise, returns expr2. 
*                                                           Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
*Logical NOT (!)	            !expr	                    Returns false if its single operand that can be converted to true; otherwise, returns true.
*
*
*/

//LOGICAL AND-
var logAnd = (5 && 10);

//LOGICAL OR-
var logOr = (10 || 20);


/* Operators can be used in many ways. They can be used in functions, objects and arrays.


UNARY OPERATORS:

A unary operation is an operation with only one operand. 
This operand comes either before or after the operator. 
Unary operators are more efficient than standard JavaScript function calls. 
Additionally, unary operators can not be overridden, therefore their functionality is guaranteed.

Unary plus (+)	        Tries to convert the operand into a number
Unary negation (-)  	Tries to convert the operand into a number and negates after
Increment (++)	        Adds one to its operand
Decrement (--)	        Decrements by one from its operand
Logical NOT (!)	        Converts to boolean value then negates it
Bitwise NOT (~)	        Inverts all the bits in the operand and returns a number
typeof	                Returns a string which is the type of the operand
delete	                Deletes specific index of an array or specific property of an object
void	                Discards a return value of an expression.

**EXAMPLES OF UNARY OPERATORS:

Unary plus (+)
The unary plus operator (+) precedes its operand and evaluates to its operand but 
attempts to convert it into a number if it isn’t already.


Operation   	Result
+3	              3
+"3"	          3


Increment (++)
The increment operator (++) increments (adds one to) its operand and returns a value.

*/
var x = 4       // x = 4
var y = x++     // y = 4 and  x = 5

/*
Logical NOT (!)
The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa.


Operation	    Result
!false	        true
!NaN	        true
!true	        false
!-3	            false




TERNARY OPERATORS:

The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), 
and finally the expression to execute if the condition is falsy. 
This operator is frequently used as a shortcut for the if statement.

EXAMPLE:
*/

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

/*

SYNTAX

condition ? exprIfTrue : exprIfFalse


Parameters

condition
An expression whose value is used as a condition.

exprIfTrue
An expression which is evaluated if the condition evaluates to a truthy value (one which equals or can be converted to true).

exprIfFalse
An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).

Besides false, possible falsy expressions are: null, NaN, 0, the empty string (""), and undefined. 
If condition is any of these, the result of the conditional expression will be the result of executing the expression exprIfFalse.
*/

var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"
//Handling null values
//One common usage is to handle a value that may be null:

let greeting = person => {
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"

//Conditional chains
//The ternary operator is right-associative, which means it can be "chained" in the following way, 
//similar to an if … else if … else if … else chain:

// function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }

// Equivalent to:

// function example(…) {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }

/*

*/
var addAss;
var subAss;