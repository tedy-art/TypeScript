/*
Higher Order function:-
- takes a function as a parameter
or
- ruturn a function
*/

console.log("---------takes a function as a parameter--------");
function sayHello(){
    return "Hello, ";
}

function greeting(helloMessage, name){
    console.log(helloMessage() + name);
}

// pass 'sayHello' as an arguement to 'greeting' function
greeting(sayHello, "JavaScript");

/*
Output: 
---------takes a function as a parameter--------
Hello, JavaScript
*/