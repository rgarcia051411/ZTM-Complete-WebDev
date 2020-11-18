// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.

// BONUS: Make a program that can subtract, multiply, and also divide!

const num1 = prompt("Enter first number");

const num2 = prompt("Enter second number");

const sum = Number(num1) + Number(num2);

const difference = Number(num1) - Number(num2);

const product = Number(num1) * Number(num2);

const quotient = Number(num1) / Number(num2);

console.log(`The sum is ${sum}`);

console.log(`The difference is ${difference}`);

console.log(`The product is ${product}`);

console.log(`The quotient is ${quotient}`);
