/*
for (let value of iterable) {
    console.log(value);
}
*/

let colors = ["red", "green", "blue"];
console.log(`["red", "green", "blue"]`);
for (let color of colors) {
    console.log(color);
}

let word = "JavaScript";
console.log("JavaScript");
for (let char of word) {
    console.log(char);
}

let numbers = new Set([1, 2, 3, 3, 4]);
console.log("[1, 2, 3, 3, 4]");
for (let num of numbers) {
    console.log(num);
}

