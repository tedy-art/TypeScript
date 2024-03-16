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

*3) Bigint* = all JS numbers are stored in 64-bi floating-point format.

    JS bigint is a new datatype (ES2020) that can be used to store integer values that are too big be represented by a normal JS numbers.

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

**Arithmetic Operator :**(+, -, *, /, %, **)


