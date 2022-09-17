# Are you know 6 gems of programming language 🤔?

> Yes I'm 🤩.

- How to declare variable? [😍 Must be used let or const] [❌ Forget to 'var'].
- You should know 6 basics of JavaScript condition, like: `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`.
- You need some basic knowledge of JavaScrip `Array` ✌".
- You need some basic knowledge of JavaScript `Loop` ✌", like [`for` loop🔸 and `while` loop].
- You need some basic knowledge of JavaScript `Function` ✌".
- You need some basic knowledge of "JavaScript `Object` ✌". <br /> <br /> 

> How to declare variable? [😍 Must be used let or const] [❌ Forget to 'var'].

### When to use let or const?✨

N.B: As a general rule, you should always declare variables with const, if you realize that  
the value of the variable needs to change, go back and change it to let. Use let when you know that the value of a variable will change. Use const for every other variable. <br /><br />

> Examples of const:

```javascript
const OUR_PLANET = 'Earth';
const PI = 3.14159;
const E = 2.71828;
```

> Examples of let:

```javascript
let currentYear = 2022;
let age = 23;
```
<br />

> You should know 6 basics of JavaScript condition, like: `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==` .

### Also, You should know.✨
1. You should know how to use operators like, `&&` or `||` 🤔
2. Solid understanding of `if-else`. 
<br /><br />

> Example of condition

```javascript
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
```
<br />

> You need some basic knowledge of "JavaScrip Array" ✌.

### Also, You should know some important array methods.✨

1. `length`.
2. `index`, `indexOf()`.
3. `push()`.
4. `pop()`.
5. `includes()`.  

> Example of length.

N.B: Length is a property of arrays in JavaScript that returns or sets the number of elements in a given array.

```javascript
const desserts = ["Cake", "Pie", "Brownies"];
const howManyDesserts = desserts.length; // Expected output: 3
```