// Are you know 6 gems of programming language 🤔?
/** Yes I'm 🤩.
 * 1. How to declare variable? [😍 Must be used let or const] [❌ Forget to 'var'].
 * 2. You should know 6 basics of JavaScript condition, like: [<, >, <=, >=, ==, ===, !=, !==].
 * 3. You need some basic knowledge of "JavaScrip Array ✌".
 * 4. You need some basic knowledge of "JavaScript Loop ✌", like [for loop🔸 and while loop].
 * 5. You need some basic knowledge of "JavaScript Function ✌".
 * 6. You need some basic knowledge of "JavaScript Object ✌".
 */

// 1. How to declare variable? [😍 Must be used let or const] [❌ Forget to 'var'].

/** When to use let or const?✨
    ************************ 
    N.B: As a general rule, you should always declare variables with const, if you realize that  
    the value of the variable needs to change, go back and change it to let. Use let when you know that the value of a variable will change. Use const for every other variable.
*/

// Examples of const:
// const OUR_PLANET = 'Earth';
// const PI = 3.14159;
// const E = 2.71828;

// Examples of let
// let currentYear = 2022;
// let age = 23;

// You should know 6 basics of JavaScript condition, like: [<, >, <=, >=, ==, ===, !=, !==].

/** Also, You should know.✨
    ********************** 
    1. You should know how to use operators like, "&&" or "||" 🤔
    2. Solid understanding of if-else.
*/

// Examples of condition.
const person = {
  name: "Tusar",
  age: 23,
};

if (person.name === "Tusar" && person.age === 23) {
  console.log("You can access this file. Thank you 😊!");
} else {
  console.log("You can't.");
}

if (person.age === 18 || person.age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can't!");
}

if (person.age < 13) {
  console.log("You are child.");
} else if (person.age <= 19) {
  console.log("You teenager.");
} else {
  console.log("You are adult");
}

// 3. You need some basic knowledge of "JavaScrip Array ✌".
/** Also, You should know some important array methods.✨
    ********************** 
    1. length.
    2. index, indexOf.
    3. push.
    4. pop.
    5. includes.    
*/

// Length Example:
// N.B: Length is a property of arrays in JavaScript that returns or sets the number of elements in a given array.

const desserts = ["Cake", "Pie", "Brownies"];
const howManyDesserts = desserts.length; // Expected output: 3

// Index, indexOf
// N.B: index: JavaScript arrays are zero-indexed: the first element of an array is at index 0 , the second is at index 1 , and so on — and the last element is at the value of the array's length property minus 1 . JavaScript array-copy operations create shallow copies.
// N.B: indexOf: The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// Example of indexOf:
const beasts = ["ant", "bison", "camel", "duck", "bison"];
const indexOfBison = beasts.indexOf("bison"); // Expected output: 1
const lastBison = beasts.indexOf("bison", 2); // Expected output: 4

// A function to quick check whether an element exists or not in array.
const vegetables = ["Squash", "Onions", "Shallots"];
const quickCheck = (arr, elem) => {
  return arr.indexOf(elem) != -1;
};
const mushrooms = quickCheck(vegetables, "mushrooms"); // Expected output: false;

// Push & pop method.
// N.B: Push: The push() method adds one or more elements to the end of an array and returns the new length of the array.
// N.B: Pop: The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// Example of push() method
const animals = ['pigs', 'goats', 'sheep']; 

const count = animals.push('cows'); // expected output: 4

console.log(animals); // Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// Example of pop() method
/*
  The pop() method removes an element from the end of an array, while shift()
  removes an element from the beginning.
*/ 

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop(); // Now equals ['whats up?', 'hello']

greetings.shift(); // Now equals ['hello']

// Includes
// N.B: The includes() method returns true if an array contains a specified value. The includes() method returns false if the value is not found.

// Examples of includes() method
const colors = ['seaGreen', 'lightGray', 'cyan', 'purple', 'blue'];
const hasRed = colors.includes('red'); // Expected output: false
const hasCyan = colors.includes('cyan'); // Expected output: true

// More examples of includes() method
let storyWords = ['Extremely', 'Literally', 'Actually', 'Hi', 'By', 'Okay'];
let unnecessaryWords = ['Extremely', 'Literally', 'Actually'];

let betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
}) 
console.log(betterWords); // Now equal: ['Hi', 'By', 'Okay'];

// 4. You need some basic knowledge of "JavaScript Loop ✌", like [for loop🔸 and while loop].

// For loop & While loop
// N.B: For Loop: A JavaScript for loop executes a block of code as long as a specified condition is true. JavaScript for loops take three arguments: initialization, condition, and increment. The condition expression is evaluated on every loop. A loop continues to run if the expression returns true.
// N.B: While loop: The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.


// Example of for loop
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (let i = 0; i < days.length; i++) {
  const element = days[i];
  console.log(element);
  // Expected output: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}

// Example of while loop
let i = 1;
while (true) {
  console.log(i);  
  if (i == 5) {
    break;
  }
  i++; 
}

// 5. You need some basic knowledge of "JavaScript Function ✌".

// N.B: Function: A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it). There are 3 ways of writing a function in JavaScript: Function Declaration. Function Expression. Arrow Function

// Example of function"
function myFunction(){
  console.log("Hello World!")
}
myFunction();