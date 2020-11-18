// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
console.log(array.shift());
// 2. Sort the array in order.
console.log(array.sort());
// 3. Put "Kiwi" at the end of the array.
console.log(array.push("kiwi"));
console.log(array);

// 4. Remove "Apples" from the array.
array.shift();
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
const reversed = array.reverse();
console.log(reversed);

// you should have at the end:
// "Kiwi",
// "Oranges",
// "Blueberries"

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

console.log("array2:" + array2[1][1]);
