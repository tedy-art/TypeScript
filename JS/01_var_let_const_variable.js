console.log("Var : ")
var a = 10
console.log(a)
var a = 20
console.log(a)
{
    var a = 50
    console.log(a)
}
var a = 20
console.log(a)

console.log("Let : ")

let b = 4
console.log(b)
b = 5
console.log(b)
{
    b = 10;
    console.log(b)
}
// let b = 20; // we can't ->'let' variable re-declare but redefine
// console.log(b)

console.log("Const : ")
const auther = "Tejas"
console.log(auther)
// auther = "Falke" // we can't -> 'const' variable re-declare or redefine
// console.log(auther)