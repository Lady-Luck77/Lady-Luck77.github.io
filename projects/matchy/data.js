/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create variable named animal and assign it to an object literal
var animal = {};

//Create new property/key named species with any value you want using dot notation
animal.species = "dog";

//Create new property/key named name with the name of your dog using bracket notation
animal["name"] = "Milo";

//Create new property/key named noises using either dot or bracket notation and make it an empty array
animal.noises = [];

//Console log animal
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named `noises` and assign it to an empty array.
var noises = [];

//Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0] = "woof";

//Using an array function add another noise to the end of `noises`.
noises.push("sniff");

//place an "noises" element at the begining of the array.
noises.unshift("howl");

//Using **bracket syntax** again, add another element to the end of `noises`. Make sure it can be used with any elements.
noises[noises.length] = "growl";

//`console.log` the length of `noises`
console.log(noises.length);

//`console.log` the last element in `noises` again without hard coding the index.
console.log(noises[noises.length - 1]);

//`console.log` the whole array.
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal["noises"] = noises;


//Using any syntax add another noise to the `noises` property on `animal`.
animal.noises[noises.length] = "yelp";


//`console.log` `animal`.
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named `animals` and assign it to an empty array.
var animals = [];

//`push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
animals.push(animal);

//`console.log` `animals`. What does it look like?
console.log(animals);

//Create a variable called `duck` and assign it to the data:
// `{ species: 'duck', name: 'Quacky', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
  var duck = {
    species: "duck",
    name: "Quacky",
    noises: ["quack", "honk", "sneeze", "whoosh"]
};

//`push` `duck` to `animals`
animals.push(duck);

//`console.log` `animals`. What does it look like?
console.log(animals);

//Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var cat = {
    species: "cat",
    name: "Church",
    noises: ["meow", "purr", "screech"]
};
var snake = {
    species: "snake",
    name: "Sammy",
    noises: ["hiss", "rattle", "slither"]
};

animals.push(cat, snake);

//`console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?
console.log(animals);
console.log(animals.length-1);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Choose a data structure for this **list** of friends.
var friends = [];

//Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`


function getRandom(array){
    return Math.floor(Math.random() * array.length);
}

console.log(getRandom(animals));

/*Use the result of the above function to choose which animal name
to push into friends array and push it.*/

friends.push(snake.name);

//Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
if(animal.name === "Milo"){
    animal["friends"] = friends;
}

//`console.log` your work.
console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}