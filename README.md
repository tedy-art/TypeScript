# TypeScript

### Syllabus
<hr>

**1) Lexical Structure**

| sr.no | Concept               |
|-------|-----------------------|
| 1     | Arithmetic Operator   |
| 2     | Data Types and Unions |
| 3     | Assignment Operator   |

<hr>

**2) Control statement**

| Sr.no | Concept                  |
|-------|--------------------------|
| 1     | Truthy and falsy values  |
| 2     | Logical Operator         |
| 3     | Compile Typescript to JS |
| 4     | Scoping and Hoisting     |

<hr>

**3) Functions**

| Sr.no | Concept                                        |
|-------|------------------------------------------------|
| 1     | Strict Vs non-strict Equality Comparators      |
| 2     | IIFEs (Immediatly Invoked Function Expression) |
| 3     | Type Aliases                                   |

<hr>

**4) Collections**

| Sr.no | Concept   |
|-------|-----------|
| 1     | Arrays    |
| 2     | Maps      |
| 3     | Sets      |
| 4     | Tuples    |
| 5     | Iterables |

<hr>

**5) Object-Oriented Programming**
	
| Sr.no | Concept                                     |
|-------|---------------------------------------------|
| 1     | Classes                                     |
| 2     | Inheritance, Polymorphism and Encapsulation |
| 3     | Interface and Generics                      |
| 4     | Access Modifiers                            |
| 5     | Type Assertion                              |

<hr>

**6) Types of Values**

| Sr.no | Concept                     |
|-------|-----------------------------|
| 	1    | Generic Constraint(extends) |
| 	2    | Indexed Access              |
| 	3    | Keyof & Typeof              |
| 	4    | Intersections               |
| 	5    | Mapped Types and Modifiers  |

<hr>

**7) DOM**
	
  
| Sr.no | Concept             |
|-------|---------------------|
| 1     | Manipulation of DOM |
| 2     | ES Modules          |
| 3     | Vite.js             |
| 4     | APIs                |
| 5     | JSON                |

<hr>

**8) XML HTTP Requests**
	
| Sr.no | Concept                 |
|-------|-------------------------|
| 1     | Promises                |
| 2     | Discriminated Unions    |
| 3     | async/await             |
| 4     | try/catch               |
| 5     | Local & Session Storage |

<hr>

**9) Express JS**

| Sr.no | Concept                    |
|-------|----------------------------|
| 1     | HTTP methods and codes     |
| 2     | Runtime Schemas w/Zod      |
| 3     | Route and Query Parameters |
| 4     | Routers and Middlewares    |

<hr><hr>

**1) Lexical Structure :**

1) Lexical structure refers to the way in which instructions are written in the programming code.

2) It is pistol to follow a precise and orderly structure so that the instructions are correctly understood by the machine.

3) This includes elements such as tokens, whitespace, comments, case sensitivity, and other features.

*tokens :*

token are the building block of programming language.

tokens are :<br>
    1) Reserved Keyword<br>
    2) Identifiers<br>
    3) Operators(i.e.arithmetic)<br>
    4) Literals(text)<br>
    5) Punctuation symbols<br>

*Whitespaces & comments:*<br>

1) // This is single line comments
2) /* this is multiline comments */

*Reserved Keyword :*

Reserved Keywords con not be used as identifiers for variable and function. after all, they are reserved.

*keyword :*

1) const, var, let
2) if, else, switch, case, default
3) for, while, do, break
4) function, return

*Operators :*

1) arithmetic - [+, -, *, /, %]
2) Assignment - [=, +=, *=, /=, -=]
3) Comparison - [`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`]

Variable declaration Keyword:
1) var-<br>

    Declare a variable with function or a global scope, and it can be re-assigned.

2) let-<br>

   1) Declare variable with block scope that can be re-assigned.
    
   2) we do not use var very much because of it's scoping features.

   3) if variable is declared in global scope sometimes it will give us an errors.

3) const-<br>

    Declares a constant variable with a value that cannot be re-assigned.

| Note: for beginners must use `const` variable declaration.  |
|-------------------------------------------------------------|
| `Const` makes code more predictable and `less error-prone`. |
| `Const` can help you avoid common pitfalls.                 |
| `Const` can make your code more readable and maintainable.  |
| it makes your code more predictable and less prone to bugs. |

**Data Types :**

Data types are usually used to specify the type of variable we created.

**JavaScript has 8 data types :**

1) String
2) Number - Positive, Negative, decimal
3) Bigint
4) Boolean - true | false
5) Undefined
6) Null
7) Symbol
8) Object
<hr>
<br>


*1) string* = variable declared in 'single quota' or "Double quota" called string

```JavaScript
const str1 = 'This is single quota.';
const str2 = "This is Double quota.";
str1;
str2;
```

*2) Numbers* = variable declared with any digit we call that number data type.

    *Numbers* = 1) positive, 2) negative, 3) decimal number

```JavaScript
const positive = 154;
const negative = -154;
const decimal = 154.7;
positive;
negative;
decimal;
```

*3) Bigint* = 
    <ul>
        <li>all JS numbers are stored in 64-bi floating-point format.</li>
        <li> JS bigint is a new datatype (ES2020) that can be used to store integer values that are too big be represented by a normal JS numbers.</li>
    </ul>

```JavaScript
let x = BigInt("123456789012345678901234567890");
x;
```

*4) Boolean* = Boolean can only have two values : true | false

```JavaScript
let num1 = 5;
let num2 = 5;
let num3 = 10;
console.log(num1 == num2); // true
console.log(num2 == num3); // false
```

*5) Undefined* = Variable without a value has the value `undefined`, The type is also `undefined`.

```JavaScript
let name; 
console.log(name); // Undefined
```

*6) Null* = Null is a speacial value that represent an empty or unknown values.

```JavaScript
let name = null;
console.log(name); // JS = Null, TS= Undefined 
```

*7) Symbol* = The JS ES6 introducted a new primitive data type called `symbol`.

    Symbols are immutable(Connot change) and are unique.

```JavaScript
const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1 === value2); //false
```

*8) Object* = Js Objects are written with curly {} braces.

    object properties are written as name:values pairs, separated by commas.

```JavaScript
const person = {firstName:'John', lastName: 'Doe', age: 50, eyeColor: 'blue'};
console.log(person); // {firstName:'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
```

# Operators:

**Arithmetic Operator :**(`+`, `-`, `*`, `/`, `%`, `**`,`++`, `--`)

```JavaScript
const x = 5;
const y = 10;
```

```JavaScript
// Addition
const sum = x + y;
console.log(sum);
```

```JavaScript
// Subtraction
const sub = x - y;
console.log(sub);
```

```JavaScript
// Multiplication
const multi = x * y;
console.log(multi);
```

```JavaScript
// division
const divide = x / y;
console.log(divide);
```

```JavaScript
// modulus
const module = x % y;
console.log(module);
```

```JavaScript
// Exponentiation
const expo = 5 ** 2;
console.log(expo)
```

```JavaScript
// Increment
let Increment_new = 5;
let Increment = ++Increment_new;
console.log(Increment);
```

```JavaScript
// Decrement(--)
let Decrement = --Increment_new;
console.log(Decrement);
```

**Concatenation:**
```JavaScript
const load = "Tejas" + 7
load;
```

**Unary Operators:(`++x`, `x++`, `--x`,`x--`):**

<ul>
    <li>`++x` and `x++` : increment one unit</li>
    <li>`--x` and `x--` : decrement one unit</li>
</ul>

Increment with `x++`:
```JavaScript
let inn_value = 10;
// One way:
inn_value = inn_value + 1;
console.log(inn_value);
// Second way:
inn_value++;
console.log(inn_value);
console.log(inn_value);
console.log(inn_value);

console.log(inn_value++);
console.log(inn_value++);
console.log(inn_value++);
```

Increment with `++x`:
```JavaScript
let value_pluse = 10;
++value_pluse;
console.log(value_pluse);
console.log(value_pluse);
console.log(value_pluse);

console.log(++value_pluse);
console.log(++value_pluse);
console.log(++value_pluse);
```

Decrement with `x--`:

```JavaScript
let Decrement_value = 10;
// One way:
inn_value = Decrement_value + 1;
console.log(Decrement_value);
// Second way:
inn_value++;
console.log(Decrement_value);
console.log(Decrement_value);
console.log(Decrement_value);

console.log(Decrement_value--);
console.log(Decrement_value--);
console.log(Decrement_value--);
```

Decrement with `--x`:

```JavaScript
let value_minus = 10;
--value_minus;
console.log(--value_minus);
console.log(value_minus);
console.log(value_minus);
console.log(value_minus);
console.log(value_minus);

console.log(--value_minus);
console.log(--value_minus);
console.log(--value_minus);
```

**Ways to coerce a value to a number**
Means forcefully Change other data types in a number

```JavaScript
//Way 1: using `+` sign:
const str = "5";
const number = +"5";
console.log(typeof(number));
console.log(number);
```


we can't do this
```JavaScript
let number2 = +"5abc";
console.log(number2); //O/p: Not a Number/ NaN
```

JS have some method which are used to coerce other types
Way 2: parseInt() function/method
```JavaScript
let number3 = "5ysc";
let change_to_number = parseInt(number3);
console.log(number3); //'5ysc'
console.log(change_to_number); //5
```

if number is decimal we still get integer
```JavaScript
let number4 = "555.21";
let decimal_to_number = parseInt(number4);
console.log(number4); //555.21
console.log(decimal_to_number); //555
```

coerce to decimal
```JavaScript
let number5 = "555.21";
let string_to_decimal = parseFloat(number5);
console.log(number5); //'555.21'
console.log(string_to_decimal); //5
```
