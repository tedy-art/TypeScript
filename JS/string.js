let firstName = "Tejas";
let lastName = "Falke";

let text = `Welcome ${firstName}, ${lastName}`;
console.log(text);

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len = 0;
for(let i in text1){
    len++;
}
console.log(`Lenght of text1 is ${len}`);
console.log(`we can use lenght() function as well ${text1.length}`)