---
layout: page
title: "Javascript"
permalink: 'coding/javascript'
---
<small class="owner">Owner: Development</small> _Last revision: 12.11.2021_ 

- [Spacing and Indentation](#spacing-and-indentation)
- [Line Length](#line-length)
- [Brackets](#brackets)
- [Quotes](#quotes)
- [Semicolons](#semicolons)
- [Variables](#variables)
- [Comparisons](#comparisons)
- [Functions](#functions)
- [Code Clean-up](#code-clean-up)
{: .toc}

## Spacing and Indentation[#](#spacing-and-indentation)

### Indentation[#](#indentation)
Code must be indented with 4 spaces.

```javascript
// Good
function greet(name) {
    return `Hello ${name}!`;
}

// Bad, only 2 spaces.
function greet(name) {
  return `Hello ${name}!`;
}
```

### Control statements[#](#control-statements)
When it comes to spaces around symbols or keywords, the rule of thumb is: add them.

```javascript
// Good
if (true) {
    // ...
} else {
    // ...
}

// Bad, needs more spaces.
if(true){
    // ...
}else{
    // ...
}
```

Opening braces should always be on the same line as their corresponding statement or declaration (known as the one true brace style).

```javascript
// Good
if (true) {
    // ...
}

// Bad
if (true)
{
    // ...
}
```

### Infix operators[#](#infix-operators)
Infix operators need room to breath.

```javascript
// Good
const two = 1 + 1;

// Bad, needs more spaces.
const two = 1+1;
```

### Arrays[#](#arrays)
Arrays that contain an object or another array mustn't have a space between the brackets. Multiline arrays require trailing commas.

```javascript
// Good
const pairs = ['a', 'b', 'c', 'd'];

// Bad, no extra spaces required
const pairs = [ 'a', 'b', 'c', 'd' ];
```

```javascript
// Good
const person = [
    'Adrian',
    'Sebastian',
];

// Bad, no trailing comma.
const person = [
    'Adrian',
    'Sebastian'
];
```

```javascript
// Good
const pairs = [['a', 'b'], ['c', 'd']];

// Bad, no extra spaces if the array contains arrays or objects.
const pairs = [ ['a', 'b'], ['c', 'd'] ];
```

### Objects[#](#objects)
Objects require spaces between their braces. Multiline objects require trailing commas.

```javascript
// Good
const person = { name: 'Sebastian', job: 'Developer' };

// Bad, no spaces between parentheses.
const person = {name: 'Sebastian', job: 'Developer'};
```

```javascript
// Good
const person = {
    name: 'Sebastian',
    job: 'Developer',
};

// Bad, no trailing comma.
const person = {
    name: 'Sebastian',
    job: 'Developer'
};
```

```javascript
// Good
const people = [{ name: 'Sebastian' }, { name: 'Willem' }];

// Bad, no extra spaces if the array contains arrays or objects.
const people = [ { name: 'Sebastian' }, { name: 'Willem' } ];
```

## Line Length[#](#line-length)
Lines shouldn't be longer than 80 characters, and must not be longer than 120 characters. Comments must not be longer than 80 characters.

## Control Structures[#](#control-structure)

### Brackets[#](#brackets)
Always use curly brackets.

```javascript
// Good
if ($condition) {
   ...
}

// Bad
if ($condition) ...
```

### Happy Path[#](#happy-path)
Generally a function should have its unhappy path first and its happy path last. In most cases this will cause the happy path being in an unindented part of the function which makes it more readable.

```javascript
// Good

if (!goodCondition) {
    throw new Error;
}

// do work
```

```javascript
// Bad

if (goodCondition) {
    // do work
}

throw new Error;
```

### Avoid Else[#](#avoid-else)
In general, ```else``` should be avoided because it makes code less readable. In most cases it can be refactored using early returns. This will also cause the happy path to go last, which is desirable.

```javascript
// Good

if (!conditionBA) {
   // conditionB A failed
   
   return;
}

if (!conditionB) {
   // conditionB A passed, B failed
   
   return;
}

// condition A and B passed
```

### Compound Ifs[#](#compound-ifs)
In general, separate ```if``` statements should be preferred over a compound condition. This makes debugging code easier.

```php
// Good
if (!conditionA) {
   return;
}

if (!conditionB) {
   return;
}

if (!conditionC) {
   return;
}

// do stuff
```

```php
// bad
if (conditionA && conditionB && conditionC) {
  // do stuff
}
```

## Quotes[#](#quotes)
Use single quotes if possible. If you need multiline strings or interpolation, use template strings.

```javascript
// Good
import Vue from 'vue';

const company = 'Further';

// Bad, single quotes can be used here.
import Vue from "vue";

const company = "Further";

// Bad, single quotes can be used here.
import Vue from `vue`;

const company = `Further`;
```

```javascript
// Good
function greet(name) {
    return `Hello ${name}!`;
}

// Bad, template strings are preferred.
function greet(name) {
    return 'Hello ' + name + '!';
}
```

Also, when writing html templates (or jsx for that matter), start multiline templates on a new line if possible.

```javascript
function createLabel(text) {
    return `
        <div class="label">
            ${text}
        </div>
    `;
}
```

## Semicolons[#](#semicolons)
Always.

## Variables[#](#variables)
When assigning variables, prefer ```const``` over ```let```. Only use ```let``` to indicate that a variable will be reassigned. Never use ```var```.

### Assigning[#](#assigning-variables)

```javascript
// Good
const willNotChange = 'a';
let willChange = 'b';

function change(value) {
    willChange = value;
}

// Bad
var willNotChange = 'a';
var willChange = 'b';

function change(value) {
    willChange = value;
}
```

### Naming[#](#naming-variables)
Variable names should always be camelCase.

```javascript
// Good
const myConstant = 'a';

// Bad
const my_constant = 'a';
const MyOtherConstant = 'a';
```

Variable names generally shouldn't be abbreviated.

```javascript
// Good
function saveUser(user) {
    localStorage.set('user', user);
}

// Bad, it's hard to reason about abbreviations in blocks as they grow.
function saveUser(u) {
    localStorage.set('user', u);
}
```

In single-line arrow functions, abbreviations are allowed to reduce noise if the context is clear enough. For example, if you're calling ```map``` or ```forEach``` on a collection of items, it's clear that the parameter is an item of a certain type, which can be derived from the collection's substantive variable name.

```javascript
// Good
function saveUserSessions(userSessions) {
    userSessions.forEach(s => saveUserSession(s));
}

// Ok, but pretty noisy.
function saveUserSessions(userSessions) {
    userSessions.forEach(userSession => saveUserSession(userSession));
}
```

## Comparisons[#](#comparisons)
Always use a triple equal to do variable comparisons. If you're unsure of the type, cast it first.

```javascript
// Good
const one = 1;
const another = "1";

if (one === parseInt(another)) {
    // ...
}

// Bad
const one = 1;
const another = "1";

if (one == another) {
    // ...
}
```

## Functions[#](#functions)

### Naming[#](#naming-functions)
Function names should always be camelCase.

```javascript
// Good
function myFunction() {
    // ...
}

// Bad
function my_function() {
    // ...
}

function MyOtherFunction() {
    // ...
}
```

### Function keyword vs. arrow functions[#](#function-keyword-vs-arrow-functions)
Function declarations should use the function keyword.

```javascript
// Good
function scrollTo(offset) {
    // ...
}

// Using an arrow function doesn't provide any benefits here, while the
// `function`  keyword immediately makes it clear that this is a function.
const scrollTo = (offset) => {
    // ...
};
```

Terse, single line functions can also use the arrow syntax. There's no hard rule here, but make sure it uses the same pattern as surrounding functions.

```javascript
// Good
function sum(a, b) {
    return a + b;
}

// It's a short and simple method, so squashing it to a one-liner is ok.
const sum = (a, b) => a + b;
```

```javascript
// Good
export function query(selector) {
    return document.querySelector(selector);
}

// This one's a bit longer, having everything on one line feels a bit heavy.
// It's not easily scannable unlike the previous example.
export const query = (selector) => document.querySelector(selector);
```

```javascript
// Good
function factorial(n) {
    return !(n > 1)
        ? 1
        : factorial(n - 1) * n;
}

function sum(a, b) {
    return a + b;
}

// Bad
function factorial(n) {
    return !(n > 1)
        ? 1
        : factorial(n - 1) * n;
}

const sum = (a, b) => a + b;
```

Anonymous functions should use arrow functions.

```javascript
['a', 'b'].map((a) => a.toUpperCase());
```

Object methods must use the shorthand method syntax.

```javascript
// Good
export default {
    methods: {
        handleClick(event) {
            event.preventDefault();
        },
    },
};

// Bad, the `function` keyword serves no purpose.
export default {
    methods: {
        handleClick: function (event) {
            event.preventDefault();
        },
    },
};
```

### Arrow Functions Parameter Brackets[#](#arrow-functions-parameter-brackets)
An arrow function's parameter brackets must not be omitted if the function is a one-liner.

```javascript
// Good
['a', 'b'].map((a) => a.toUpperCase());

// Bad
['a', 'b'].map(a => a.toUpperCase());
```

## Code Clean-up[#](#code-clean-up)
Do not leave commented out CSS code in place.

