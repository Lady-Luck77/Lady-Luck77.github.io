/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create function called `search` with two paramaters (array, strring)
 //Create for statement to look through array and return animals object if found

function search(array, string) {
    for (var i = 0; i < array.length; i ++) {
       if(array[i].name.toLowerCase() === string.toLowerCase()) {
           return array[i];
       }
        
    }
    //Return null if not found
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
  // - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
   //- If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
  // - Otherwise do nothing.

function replace(array, sname, object) {
    for (var i = 0; i < array.length; i ++) {
        if(array[i].name === sname) {
            return array.splice(array[i], 1, object)
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   //- Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   //- If an animal with that name exists within the `animals` Array, remove it.


function remove(array, sname1) {
    for (var i = 0; i < array.length; i ++) {
        if(array[i].name === sname1) {
            return array.splice([i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
  // - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
  // - Checks that the animal Object has a `name` property with a length > 0.
  // - Checks that the animal Object has a `species` property with a length > 0.
  // - Has a **unique** name, meaning no other animals have that name.
  // - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.

function add(array1, object1) {
    var hasName = false;
    for (var i = 0; i < array1.length; i ++) {
      if(array1[i].name === object1.name) {
            hasName = true; 
        }
    }
    if(object1.name.length > 0 && object1.species.length > 0 && hasName === false){
        return array1.push(object1);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
