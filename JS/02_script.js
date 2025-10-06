/* var */
var x = 5; // 'var' a variable declaration keyword 
x = 10; // We can change x's value as we want and its mutable
x;

/* let:  
    1) Declare variable with block scope that can be re-assigned.
    2) we do not use var very much because of it's scoping features.
    3) if variable is declare in global scope sometimes it will give us an errors.
*/
let y = 5; // changing y's value 5 to 10
y = 10;
y; // 10

/* const :
    1) Declares a constant variable with a value that cannot be re-assigned.
    2) when we declare const variable we cannot change its primary value. it's not allowed by JS.

*/
const z = 5;
z = 10; // it will give us an error
z; 