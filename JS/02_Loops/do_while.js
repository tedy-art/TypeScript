/*
do{
    // Do will run at least one time
}
while(condition)
*/

let num = 1

do{
    console.log(num);
    num++;
}
while(num <= 5);

let sum = 0
do{
    sum += num;
    num++;
}
while(num <= 20);

console.log("addition of 0 to 20 is : ", sum);

