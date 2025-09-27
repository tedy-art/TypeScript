/*
for (let key in object) {
    console.log(key, object[key]);
}

*/

let student = {
    name: "Tejas",
    age: 25,
    city: "Pune"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}

let colors = ["red", "green", "blue"];

for (let index in colors) {
    console.log(index, colors[index]);
}
