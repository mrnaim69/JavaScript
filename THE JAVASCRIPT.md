## THE JAVASCRIPT HANDBOOK

### Variable
```javascript
const accountId = 144553;
let accountEmail = "naim@google.com";
var accountPassword = "12345";
accountCity = "Rangpur";
let accountState;
accountId = 2 (not allowed)
accountEmail = "naim@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";
console.log(accountId);
//Prefer not to use var because of issues in block scope and functional scope.

console.table([accountId, accountEmail, accountPassword,
accountCity, accountState]);
```
### DataType

```javascript


"use strict";
Treat all JS code as newer version
alert(3 + 3)

// We are using Node.js, not a browser

console.log(3
+
3);

// Code readability should be high

console.log("Naim");
let name = "naim";
let age = 18;
let isLoggedIn = false;
let state;


```
### Data Types in JavaScript:

_**Primitive DataType**_
1. number : Supports values up to 2^5

 2. bigint : Used for large integer values beyond the range of
`number`
3. string : Represented by text within quotes, e.g., `""`
4. boolean : Represents `true` or `false`
5. null : A standalone value representing "no value" or "empty"
“typeof null is object”
6. undefined : A variable declared but not assigned a value
7. symbol: Represents a unique, immutable identifier

_**Non - Primitive DataType**_
1. Array
2. Function
3. Object


### Conversion Operation


```javascript


let score = "hitesh";
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

"33" => 33
"33abc" => NaN
//true => 1;
//false => 0
let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1 => true; 0 => false
//"" => false
//"hitesh" => true
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
Operations
let value = 3;
let negValue = -value;

console.log(negValue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3 + 4) * 5 % 3);
console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
Comparison
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined > 0);

console.log(undefined < 0);
//“ === ”
console.log("2" === 2);


```

### String


```javascript


const name = "naim rahman";
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is
${repoCount}`);
const gameName = new String('naim-rahman-com');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4);

 console.log(newString);
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);
const newStringOne = " naim rahman";

console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://naim.com/naim%20rahman";
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));
```
### Number
```javascript
const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
```
### Maths
```javascript
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
const min = 10;

const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```
### DataType Summary
_**Primitive**_

```javascript
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); false because Symbols are unique
const bigNumber = 3456543576654356754n

//BigInt example

const biNumber2 = Bigint(1738383838833039);

```
### Reference (Non-primitive)
_**Array, Objects, Functions**_


```javascript
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
name: "naim rahman",
age: 22,
};
const myFunction = function() {
console.log("Hello world");
};
console.log(typeof anotherId); symbol

```

### Array

```javascript

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);
“Array methods”
myArr.push(6);
Adds 6 to the end of the array
myArr.push(7);
Adds 7 to the end of the array
myArr.pop();
//Removes the last element from the array

myArr.unshift(9);
// Adds 9 to the beginning of the array

myArr.shift();
// Removes the first element from the array

console.log(myArr.includes(9));
// Checks if 9 is in the array

console.log(myArr.indexOf(3));
// Finds the index of element 3

const newArr = myArr.join();
// Joins all array elements into a string with a comma by default

console.log(myArr);
console.log(newArr);

//“slice, splice"

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
// Returns a shallow copy of a portion of the array, from index 1 to 3 (excluding index 3)

console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3); 

// Modifies the original array by removing 3 elements starting from index 1

console.log("C ", myArr);
console.log(myn2);
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
marvel_heros.push(dc_heros); 

// Uncommenting this would add dc_heros array as a single element inside marvel_heros

console.log(marvel_heros);

console.log(marvel_heros[3][1]);
// This would give 'f' from the 'flash' in dc_heros

const allHeros = marvel_heros.concat(dc_heros); 
// Merges both arrays

console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros];
// Using spread operator to merge arrays
console.log(all_new_heros);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Nested array

const real_another_array = another_array.flat(Infinity);
// Flattens all levels of the nested array

console.log(real_another_array);
console.log(Array.isArray("Hitesh"));

// Checks if "Hitesh" is an array, will return false

console.log(Array.from("Hitesh")); 
// Converts string into an array of characters
console.log(Array.from({name: "hitesh"}));

// Converts object to an array (array of keys in this case)
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
```

### Creates a new array with the given elements

### Object
_**singleton**_

Object.create

_**object literals**_

```javascript

const mySym = Symbol("key1");
const JsUser = {
name: "Hitesh",
"full name": "Hitesh Choudhary",
[mySym]: "mykey1",
age: 18,
location: "Jaipur",
email: "hitesh@google.com",

isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]
};
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
JsUser.email = "hitesh@chatgpt.com";
Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";
console.log(JsUser);
JsUser.greeting = function(){
console.log("Hello JS user");
};
JsUser.greetingTwo = function(){
console.log(`Hello JS user, ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// Object Creation and Modification


const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);
“Accessing Nested Object Properties”
const regularUser = {
email: "some@gmail.com",
fullname: {
userfullname: {
firstname: "hitesh",
lastname: "choudhary"
}
}
}
console.log(regularUser.fullname.userfullname.firstname);
“Merging Objects”

 const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
Merging using the spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3);
Working with Arrays of Objects
const users = [
{ id: 1, email: "h@gmail.com" },
{ id: 2, email: "h@gmail.com" },
{ id: 3, email: "h@gmail.com" },
]
console.log(users[1].email);
“Object Methods and Property Checking”
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
“Property Existence Check”

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

```

### Destructuring Objects

```javascript
const course = {
coursename: "js in hindi",
price: "999",
courseInstructor: "hitesh"
}


// Destructuring the course object to extract courseInstructor


const {courseInstructor: instructor} = course
console.log(courseInstructor);
console.log(instructor);
“Example of an object structure in JSON format”
const exampleJson = [
{ name: "hitesh", coursename: "js in hindi", price: "free" },
{ name: "sammy", coursename: "html basics", price: "paid" },
{ name: "john", coursename: "css in depth", price: "free" }
]

```

### Function

```javascript

function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}
sayMyName()
function addTwoNumbers(number1, number2){
console.log(number1 + number2);
}
function addTwoNumbers(number1, number2){
let result = number1 + number2
return result
return number1 + number2
}
const result = addTwoNumbers(3, 5)

 console.log("Result: ", result);

function loginUserMessage(username = "sam"){
if(!username){
console.log("PLease enter a username");
return
}
return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){
return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))
const user = {
username: "hitesh",
prices: 199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is
${anyobject.price}`);
}
handleObject(user)
handleObject({
username: "sam",
price: 399
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

```

### Scope

```javascript

var c = 300
let a = 300

 if (true) {
let a = 10
const b = 20
console.log("INNER: ", a);
}

console.log(a);
console.log(b);
console.log(c);

function one(){
const username = "hitesh"
function two(){
const website = "youtube"
console.log(username);
}
console.log(website);
two()

 }
one()
if (true) {
const username = "hitesh"
if (username === "hitesh") {
const website = " youtube"
console.log(username + website);
}
console.log(website);
}
console.log(username);

console.log(addone(5))
function addone(num){
return num + 1
}

 addTwo(5)
const addTwo = function(num){
return num + 2
}

```

### Arrow Function

```javascript

const user = {
username: "hitesh",
price: 999,
welcomeMessage: function() {
console.log(`${this.username} , welcome to website`);
console.log(this);
}
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);

 function chai(){
let username = "hitesh"
console.log(this.username);
}
chai()
const chai = function () {
let username = "hitesh"
console.log(this.username);
}
const chai = () => {
let username = "hitesh"
console.log(this);
}

chai()
const addTwo = (num1, num2) => {
return num1 + num2
}
const addTwo = (num1, num2) => num1 + num2

 const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]
myArray.forEach()

```

### IIFE ( Immediately Invoked Function Expressions )

```javascript 

(function chai(){
console.log(`DB

CONNECTED`);

})();
( (name) => {
console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

```

### Control Flow

 ```javascript
 
 
If(){
}else if(){
}else{
}


const isUserloggedIn = true
const temperature = 41
if ( temperature === 40 ){
console.log("less than 50");
} else {
console.log("temperature is greater than 50");
}
console.log("Execute");
“ <, >, <=, >=, ==, !=, ===, !== ”
const score = 200
if (score > 100) {
let power = "fly"
console.log(`User power: ${power}`);
}

 console.log(`User power: ${power}`);
const balance = 1000
if (balance > 500) console.log("test"),console.log("test2");
if (balance < 500) {
console.log("less than 500");
} else if (balance < 750) {
console.log("less than 750");
} else if (balance < 900) {
console.log("less than 750");
} else {
console.log("less than 1200");
}
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==3) {
console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {

 console.log("User logged in");
}


switch (key) {
case value:
break;
default:
break;
}


const month = "march"
switch (month) {
case "jan":
console.log("January");
break;
case "feb":
console.log("feb");
break;
case "march":
console.log("march");
break;
case "april":
console.log("april");
break;

 default:
console.log("default case match");
break;
}
const userEmail = []
if (userEmail) {
console.log("Got user email");
} else {
console.log("Don't have user email");
}

// falsy values

false, 0, -0, BigInt 0n, "", null, undefined, NaN
“truthy values”
"0", 'false', " ", [], {}, function(){}
if (userEmail.length === 0) {
console.log("Array is empty");
}

 const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);
Terniary Operator
condition ? true : false
const iceTeaPrice = 100

 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more
than 80")

```


## Iteration

### Situation 1

```javascript

for (let i = 0; i <= 10; i++) {
const element = i;
if (element == 5) {
console.log("5 is best number");
}
console.log(element);
}
console.log(element);
for (let i = 1; i <= 10; i++) {
console.log(`Outer loop value: ${i}`);
for (let j = 1; j <= 10; j++) {
console.log(`Inner loop value ${j} and inner loop ${i}`);
console.log(i + '*' + j + ' = ' + i*j );
}

 }
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
const element = myArray[index];
console.log(element);
}

break and continue
for (let index = 1; index <= 20; index++) {
if (index == 5) {
console.log(`Detected 5`);
break
}
console.log(`Value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
if (index == 5) {
console.log(`Detected 5`);
continue
}
console.log(`Value of i is ${index}`);

 }
 
 ```
 
### Situation 2

```javascript

let index = 0
while (index <= 10) {
console.log(`Value of index is ${index}`);
index = index + 2
}
let myArray = ['flash', "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
console.log(`Value is ${myArray[arr]}`);
arr = arr + 1
}
let score = 11
do {
console.log(`Score is ${score}`);
score++
} while (score <= 10);

```

### Situation 3
 
 ```javascript
 
// for of loop

["", "", ""]
[{}, {}, {}]
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
console.log(num);
}
const greetings = "Hello world!"
for (const greet of greetings) {
console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")

 map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
for (const [key, value] of map) {
console.log(key, ':-', value);
}
const myObject = {
game1: 'NFS',
game2: 'Spiderman'
}
for (const [key, value] of myObject) {
console.log(key, ':-', value);
}

```


### Situation 4

```javascript

const myObject = {
js: 'javascript',
cpp: 'C++',

 rb: "ruby",
swift: "swift by apple"
}
for (const key in myObject) {
console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
console.log(programming[key]);
}
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key in map) {
console.log(key);
}

```

### Situation 5

```javascript

const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){
console.log(val);
})
coding.forEach( (item) => {
console.log(item);
})
function printMe(item){
console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
console.log(item, index, arr);
})
const myCoding = [
{
languageName: "javascript",

 languageFileName: "js"
},
{
languageName: "java",
languageFileName: "java"
},
{
languageName: "python",
languageFileName: "py"
},
]
myCoding.forEach( (item) => {
console.log(item.languageName);
})

```

### Situation 6

```javascript


const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
console.log(item);
return item

 })
console.log(values);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
return num > 4
})
const newNums = []
myNums.forEach( (num) => {
if (num > 4) {
newNums.push(num)
}
})
console.log(newNums);

const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
},
{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },

 { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010
},
{ title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989
},
];
let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => {
return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);

```

### Situation 7

```javascript

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map( (num) => { return num + 10})
const newNums = myNumers

 .map((num) => num * 10 )
.map( (num) => num + 1)
.filter( (num) => num >= 40)
console.log(newNums);
“Situation 8”
const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
console.log(`acc: ${acc} and currval: ${currval}`);
return acc + currval
}, 0)
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
{
itemName: "js course",
price: 2999
},

 {
itemName: "py course",
price: 999
},
{
itemName: "mobile dev course",
price: 5999
},
{
itemName: "data science course",
price: 12999
},
]
const priceToPay = shoppingCart.reduce((acc, item) => acc +
item.price, 0)
console.log(priceToPay);

```

## Localstorage

```javascript

// Saving data to localStorage
localStorage.setItem('username', 'hitesh');

// Store a key-value pair
localStorage.setItem('userEmail', 'hitesh@chatgpt.com');

// Store another key-value pair

// Retrieving data from localStorage
const username = localStorage.getItem('username');
const userEmail = localStorage.getItem('userEmail');
console.log(username);
// Output: hitesh

console.log(userEmail);
// Output: hitesh@chatgpt.com

// Updating data in localStorage

localStorage.setItem('username', 'sammy');

// Update username
console.log(localStorage.getItem('username'));

// Output: sammy

// Removing data from localStorage

localStorage.removeItem('userEmail');
Removes userEmail

// Clearing all data from localStorage

localStorage.clear();

//Clears all data stored in localStorage

```

## SessionStorage

```javascript

// Saving data to sessionStorage
sessionStorage.setItem('sessionID', '12345');

// Store a session key-value pair
sessionStorage.setItem('isLoggedIn', 'true');

// Store another key-value pair

//Retrieving data from sessionStorage
const sessionID = sessionStorage.getItem('sessionID');
const isLoggedIn = sessionStorage.getItem('isLoggedIn');
console.log(sessionID);
// Output: 12345

console.log(isLoggedIn);

// Output: true

// Updating data in sessionStorage

sessionStorage.setItem('isLoggedIn', 'false');

// Update isLoggedIn status

console.log(sessionStorage.getItem('isLoggedIn'));

//Output: false

// Removing data from sessionStorage
sessionStorage.removeItem('sessionID');

// Removes sessionID

// Clearing all data from sessionStorage
sessionStorage.clear();
// Clears all data stored in sessionStorage

```

## DOM ( Document Object Model )

## Selecting an HTML Element


```javascript

// Select by id Name

const elementById = document.getElementById("elementId");

// Select by class name
const elementByClass =
document.getElementsByClassName("elementClass");

// Select by tag name
const elementByTag = document.getElementsByTagName("div");

// Select using querySelector (first matching element)
const firstElement = document.querySelector(".elementClass");

// Select using querySelectorAll (all matching elements)
const allElements = document.querySelectorAll(".elementClass");

```

## Create a new Element

```javascript

// Create a new div element
const newDiv = document.createElement("div");

// Add a class to the new div
newDiv.classList.add("new-class");

//Add an ID to the new div
newDiv.id = "newId";

// Add an attribute to the new div
newDiv.setAttribute("data-info", "someData");

// Add some inline styles to the new div
newDiv.style.backgroundColor = "lightblue";
newDiv.style.padding = "10px";
newDiv.style.fontSize = "20px";

// Add content to the new div
newDiv.textContent = "This is a new div element.";

```


## Adding Element to the Document

```javascript

// Select an existing element to append the new div to (e.g., body or
a specific container)
const container = document.getElementById("container");

// Append the new div to the container
container.appendChild(newDiv);

```

## Create element and append

```javascript 


// 1. Select an existing element (e.g., body or a container)
const container = document.getElementById("container");

// 2. Create a new div element
const newDiv = document.createElement("div");

// 3. Add classes, ID, attributes, and styles to the new div
newDiv.classList.add("new-class");
newDiv.id = "newId";
newDiv.setAttribute("data-info", "someData");

newDiv.style.backgroundColor = "lightblue";
newDiv.style.padding = "10px";
newDiv.style.fontSize = "20px";

// 4.. Add content to the new div
newDiv.textContent = "This is a new div element.";

// 5. Append the new div to the selected container
container.appendChild(newDiv);

```


## Checking for Class, ID, or Attribute in HTML Elements using JavaScript

```javascript

// 1. Check if an Element Has a Specific Class To check if an element contains a certain class, use the

// classList.contains() method:

const element = document.getElementById('myElement');

 if (element.classList.contains('myClass')) {
console.log('Element has the class "myClass".');
} else {
console.log('Element does not have the class "myClass".');
}

// 2. Check if an Element Has a Specific ID

//To check if an element has a specific ID, you can directly compare the id attribute:

const element = document.getElementById('myElement');
if (element.id === 'myElement') {
console.log('Element has the ID "myElement".');
} else {
console.log('Element does not have the ID "myElement".');
}

// 3. Check if an Element Has a Specific Attribute To check if an element has a specific attribute, use the hasAttribute() method:

const element = document.getElementById('myElement');
if (element.hasAttribute('data-custom')) {

 console.log('Element has the "data-custom" attribute.');
} else {
console.log('Element does not have the "data-custom"
attribute.');
}

// 4. Check the Value of a Specific Attribute

//If you want to check the value of a specific attribute, you can use the getAttribute() method:
const element = document.getElementById('myElement'); //

const attributeValue = element.getAttribute('data-custom');
if (attributeValue) {
console.log(`Element has the "data-custom" attribute with
value: ${attributeValue}`);
} else {
console.log('Element does not have the "data-custom"
attribute.');
}


//Summary:

/*

Check for class: classList.contains()
Check for ID: element.id === 'ID'
Check for attribute presence: hasAttribute('attributeName')
Check attribute value: getAttribute('attributeName')

*/


```

## Event In JavaScript

JavaScript Event Handling: Event Bubbling, Capturing, and
Delegation

### Event Bubbling
Event bubbling is the default behavior in JavaScript. When an
event is triggered on an element, it "bubbles" up through the DOM
hierarchy, triggering the same event on each ancestor element,
from the target element all the way to the root.
Example:

```javascript

<div id="parent">

  <button id="child">Click me</button>
</div>
document.getElementById("child").addEventListener("click",
function(event) {
alert("Button clicked!");
});
document.getElementById("parent").addEventListener("click",
function(event) {
alert("Parent clicked!");
});

``` 

When the button is clicked, both the "Button clicked!" alert and
"Parent clicked!" alert will trigger, as the event bubbles from the
button to its parent.

### Stopping Event Bubbling:
To stop the event from bubbling up, use **event.stopPropagation()** :


```javascript

document.getElementById("child").addEventListener("click",
function(event) {
alert("Button clicked!");

 event.stopPropagation(); Prevents the event from reaching the
parent
});

```
### Event Capturing (Trickling)


Event capturing, or trickling, is the opposite of event bubbling. The
event starts from the root of the DOM and trickles down to the
target element. This method is less commonly used.
Example:

```javascript

document.getElementById("parent").addEventListener("click",
function(event) {
alert("Parent clicked!");
}, true);

```

The third argument 'true' activates capturing mode
In this case, when the button is clicked, the "Parent clicked!" alert
will trigger first, followed by the "Button clicked!" alert.

### Stopping Event Capturing:

Just like with bubbling, you can stop the event from propagating
by using **event.stopPropagation()**


## Event Delegation

Event delegation is a technique where you attach a single event
listener to a parent element instead of attaching event listeners to multiple child elements. The parent element listens for events on
the child elements, even if they are added dynamically.

### Why Use Event Delegation?
Improved performance (especially for large numbers of child
elements).
Simplifies event listener management for dynamically added
elements.

#### Example:

```javascript

<ul id="list">
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>

 </ul>
document.getElementById("list").addEventListener("click",
function(event) {
if (event.target && event.target.tagName === "LI") {
alert("Item clicked: " + event.target.textContent);
}
});

```
Clicking any **li** item will trigger the event listener on the parent
**ul** ,  and it will identify which **li** was clicked using event.target.


### Dynamic Content Example:

```javascript

// Event delegation also works for dynamically added content:

<div id="dynamicContent"></div>
<button id="addItemButton">Add Item</button>
document.getElementById("dynamicContent").addEventListener("
click", function(event) {
if (event.target && event.target.matches("button.addItem")) {
alert("Item added");
}

 });
document.getElementById("addItemButton").addEventListener("c
lick", function() {
const newItem = document.createElement("button");
newItem.classList.add("addItem");
newItem.textContent = "New Item";
document.getElementById("dynamicContent").appendChild(newI
tem);
});

// The event listener on #dynamicContent listens for clicks on dynamically added buttons as well.

```

#### Summary:

Event Bubbling: Events bubble from the target element to the
root element.
Event Capturing: Events are captured from the root element down
to the target element.

Event Delegation: A single event listener on a parent element can
handle events for all child elements, including dynamically added
ones.

#### Why These Techniques Matter:

Event Bubbling: Default behavior, useful for handling events on
multiple elements.
Event Capturing: Useful in specific situations where you need to
intercept events before they reach the target.
Event Delegation: Essential for handling events efficiently on a
large number of elements or dynamically created elements.


## Time Based Event


Time-based events in JavaScript are events that occur after a
certain delay or at regular intervals. JavaScript provides several
methods for managing time-based events, mainly using the
setTimeout, setInterval, and clearTimeout/clearInterval functions.

### setTimeout()

```javascript

// Syntax:

setTimeout(function, delay, arg1, arg2, ...)

```

#### function :

The function to be executed after the specified delay.
delay: The time (in milliseconds) to wait before executing the
function. 

#### arg1, arg2, ... :
Optional arguments that can be passed to the
function when it is called.

Example:

```javascript

function greet() {
console.log("Hello, World!");
}
setTimeout(greet, 2000);


// Return Value:
// setTimeout() returns a timer ID that can be used with
clearTimeout() to cancel the execution if needed.

```

#### Cancelling Timeout:

```javascript

let timeoutId = setTimeout(() => {
console.log("This will not execute");
}, 5000);

// Cancel the timeout before it executes

// clearTimeout(timeoutId);
// In the above code, clearTimeout() cancels the timeout before the
function is executed.

```

### setInterval()

Syntax:

```javascript

setInterval(function, delay, arg1, arg2, ...)

```

#### function :
The function to be executed repeatedly.
delay: The time interval (in milliseconds) between each execution.

#### arg1, arg2, ... :

Optional arguments that can be passed to the
function when it is called.

#### Example:

```javascript

function showTime() {
console.log(new Date().toLocaleTimeString());
}
let intervalId = setInterval(showTime, 1000);

```

#### Stopping the Interval:

To stop an interval, you use clearInterval() with the interval ID
returned by  **setInterval().**

```javascript

// Stop the interval after 5 seconds

setTimeout(() => {
clearInterval(intervalId);
console.log("Interval stopped");
}, 5000);

```

#### clearTimeout()

```javascript

let timeoutId = setTimeout(() => {
console.log("This will not run.");
}, 3000);

// Cancel the timeout before it runs
clearTimeout(timeoutId);.

```

#### clearInterval()

```javascript

let intervalId = setInterval(() => {
console.log("This is running every second");
}, 1000);

setTimeout(() => {
clearInterval(intervalId);
console.log("Interval stopped.");
}, 5000);

```

### Practical Examples of Time-Based Events

```javascript

// Example 1: Delayed Greeting

setTimeout(() => {

 console.log("Hello, this is a delayed message!");
}, 3000);

// Message will be shown after 3 seconds


// Example 2: Repeated Task (Interval)

let counter = 0;
let intervalId = setInterval(() => {
console.log(`Counter: ${counter}`);
counter++;
if (counter === 5) {
clearInterval(intervalId);
Stop after 5 counts
console.log("Interval stopped");
}
}, 1000);

//Executes every second

```

#### Combining Time-Based Events

```javascript


setTimeout(() => {
let counter = 0;
let intervalId = setInterval(() => {
console.log(`Counter: ${counter}`);

 counter++;
if (counter === 5) {
clearInterval(intervalId);
console.log("Interval stopped");
}
}, 1000);
}, 2000);

// Starts after a 2-second delay

```

### Time-Based Events and DOM Manipulation

```javascript


setTimeout(() => {
document.getElementById("myElement").style.display = "none";
}, 3000);
let counter = 0;
setInterval(() => {
document.getElementById("counterDisplay").innerText =
`Count: ${counter}`;
counter++;
}, 1000);
 
 // Updates text every second

```


#### Summary of Key Concepts

##### setTimeout(): 

Executes a function once after a specified delay.
setInterval(): Repeatedly executes a function at specified intervals.

##### clearTimeout(): 

Cancels a setTimeout() before it executes.

##### clearInterval(): 

Stops a setInterval() from running.


#### Time-based events allow for delayed or repeated execution of tasks, useful for animations, data polling, timed messages, and more.



### API, Callback Hell, Promises, Async/Await, Try/Catch, and XMLHttpRequest


### XMLHttpRequest (XHR)

What is XMLHttpRequest?

XMLHttpRequest is a built-in JavaScript object that allows you to send HTTP requests and receive responses from a server asynchronously. It is the traditional way of making HTTP requests in JavaScript, though modern APIs like fetch() are now more commonly used.

### Making HTTP Requests with XMLHttpRequest

```javascript

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function() {
if (xhr.status === 200) {
const data = JSON.parse(xhr.responseText);
console.log(data);
// Handle response data
} else {
console.error('Error:', xhr.status);
// Handle error response
}
};
xhr.onerror = function() {
console.error('Request failed');
// Handle network errors
};
xhr.send();

// Send the request

```


#### Key Methods and Properties of XMLHttpRequest:

##### open(method, url, async): Initializes the request. Method can be GET, POST, etc.

##### send(): Sends the request.

##### onload: Event handler for when the request is completed successfully.

##### onerror: Event handler for when an error occurs during the request.

##### responseText: Contains the response from the server.


### Callback Hell

What is Callback Hell?
Callback Hell occurs when you have multiple nested callbacks
(functions passed as arguments), leading to hard-to-read and
maintain code. Each level of nesting adds another layer of
indentation, making it difficult to follow the code.

##### Example of Callback Hell:

```javascript

setTimeout(() => {
console.log("Step 1");
setTimeout(() => {
console.log("Step 2");
setTimeout(() => {
console.log("Step 3");
}, 1000);
}, 1000);
}, 1000);

// This deeply nested structure leads to Callback Hell, where multiple callbacks are needed, and the code becomes increasingly difficult to maintain and debug.

```


### Promises

What is a Promise?
A Promise is an object representing the eventual completion (or
failure) of an asynchronous operation. Promises allow you to

handle asynchronous code in a more structured way, avoiding
callback hell.

#### States of a Promise:

##### Pending: The initial state, before the promise is resolved or rejected.

##### Fulfilled: The operation completed successfully.

##### Rejected: The operation failed.

#### Creating and Using Promises:

```javascript

const myPromise = new Promise((resolve, reject) => {
const success = true;
if (success) {
resolve('Operation successful');
} else {
reject('Operation failed');
}
});

myPromise
.then(result => console.log(result)) // Success handler
.catch(error => console.error(error)); // Error handler

// Chaining Promises:

// Promises can be chained using .then() to handle successive asynchronous operations.
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => {
console.log(data);
Handle data
return data;
})
.catch(error => console.error('Error:', error)); Handle error

```


### Async/Await

What is Async/Await?
Async/Await is a more modern way of handling asynchronous code, making it look and behave more like synchronous code. It is built on top of Promises, and allows you to write cleaner, more readable asynchronous code. 

##### async: A function marked as asynchronous, always returns a Promise.

##### await: Pauses the execution of an async function until the Promise is resolved.

#### Using Async/Await:

```javascript

async function fetchData() {
try {
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);
Handle data
} catch (error) {
console.error('Error:', error); Handle error
}
}
fetchData();

// Async/Await allows you to handle asynchronous tasks like they are synchronous, making your code more readable and easier to debug.

```


### Try/Catch

What is Try/Catch?

The try...catch statement is used to handle exceptions or errors in
JavaScript. Code that might throw an error is placed inside the try
block, and the error is caught and handled in the catch block.

#### Using Try/Catch with Async/Await:

```javascript

async function fetchData() {
try {
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);
Handle data
} catch (error) {
console.error('Error:', error); Handle error
}
}

fetchData();

```


In the above example, if any part of the asynchronous code inside
the try block throws an error (such as a failed fetch call), it will be
caught by the catch block.


#### Summary of Concepts

##### XMLHttpRequest: Traditional way of making HTTP requests, now mostly replaced by fetch().

##### Callback Hell: Problem of nested callbacks making code difficult to read and maintain.


##### Promises: Represent asynchronous operations that might succeed or fail. They help avoid callback hell.


##### Async/Await: Modern syntax for handling asynchronous code in a more readable, synchronous-like fashion.

##### Try/Catch: Used to handle errors in JavaScript, often in combination with async/await for better error handling in asynchronous code.

 
### OOP ( Object Oriented Programming )

Object-Oriented Programming (OOP) is a programming paradigm
that organizes software design around data, or objects, rather than functions and logic. In OOP, objects are instances of classes, and they contain both data (properties) and behaviors (methods).


JavaScript supports OOP, allowing developers to organize code in
a modular and reusable way.

OOP consists of several core principles: Encapsulation, Abstraction,
Inheritance, and Polymorphism. Understanding and applying these principles help in writing more efficient and maintainable code.

#### Core Concepts of OOP

### Encapsulation

Encapsulation is the concept of combining data (properties) and
methods (functions) into a single unit, typically a class. It also refers to restricting direct access to some of the object's components, which is why we often use access modifiers like public and private. In JavaScript, encapsulation is implemented through classes and getters/setters.

#### Example: (Encapsulation)

```javascript

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

// Method to access private data (age)

getAge() {
return this.age;
}

// Method to modify private data (age)

setAge(newAge) {
if(newAge > 0) {
this.age = newAge;
}
}
}

const person1 = new Person("John", 30);
console.log(person1.getAge());

// 30

person1.setAge(35);
console.log(person1.getAge());

// 35

//In the example above, age is encapsulated within the class and can only be accessed or modified through the provided getter and setter methods.

```

### Abstraction

Abstraction is the concept of hiding complex implementation
details and showing only the essential features of the object. The
goal is to reduce complexity by focusing on what an object does,
rather than how it does it. JavaScript achieves abstraction via
classes and methods.
#### Example: (Abstraction)

```javascript


class Car {
constructor(make, model) {
this.make = make;
this.model = model;
}

// Public method to start the car

 startCar() {
console.log(`${this.make} ${this.model} is now running.`);
}

// Private method (not directly accessible outside the class)

_checkEngine() {
console.log("Checking engine...");
}
}

const myCar = new Car("Toyota", "Corolla");

myCar.startCar();

// Abstraction: Only the startCar method is exposed.

// In this example, the startCar method abstracts away the complexity of how the car actually starts, focusing only on the behavior, while the _checkEngine method is hidden.

```


### Inheritance

Inheritance is the mechanism by which one class can inherit
properties and methods from another class. This allows for code
reuse and can help create more complex classes based on simpler ones. JavaScript uses classes and the extends keyword to implement inheritance.

#### Example: (Inheritance)

```javascript

class Animal {
constructor(name) {
this.name = name;
}
speak() {
console.log(`${this.name} makes a sound.`);
}
}
class Dog extends Animal {
constructor(name, breed) {
super(name);
// Call the parent class constructor
this.breed = breed;
}
speak() {
console.log(`${this.name} barks.`);
}

 }
const dog = new Dog("Max", "Golden Retriever");
dog.speak();

// Max barks.

// In this example, the Dog class inherits from the Animal class, meaning that Dog has access to the speak method, but it can also override it to implement specific behavior.


```


### Polymorphism


Polymorphism allows objects to be treated as instances of their
parent class, even if they are instances of derived classes. It means
"many forms" and enables a single method to behave differently
based on the object calling it. Polymorphism is achieved through
method overriding in JavaScript.

#### Example: (Polymorphism)

```javascript

class Animal {
speak() {
console.log("Animal makes a sound");
}
}

 class Dog extends Animal {
speak() {
console.log("Dog barks");
}
}
class Cat extends Animal {
speak() {
console.log("Cat meows");
}
}
const animal1 = new Dog();
const animal2 = new Cat();
animal1.speak();

// Dog barks
animal2.speak();


// Cat meows

// Here, both Dog and Cat override the speak method, which demonstrates polymorphism as each object behaves differently when calling the same method.

```

### Classes in JavaScript


Classes are blueprints for creating objects in JavaScript. They were introduced in ECMAScript 6 (ES6) and offer a much cleaner syntax compared to using function constructors. Classes support inheritance, encapsulation, and polymorphism, and can contain constructors, methods, and getters/setters.


#### Class Syntax

```javascript

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
// Method to greet the person
greet() {
console.log(`Hello, my name is ${this.name}`);
}
}
const person = new Person("John", 25);
person.greet();

//  Output: Hello, my name is John

```

### Constructor Functions (Pre-ES6)


Before ES6 classes, we used constructor functions to create objects and implement OOP principles. A constructor function is essentially a function used to create objects.

#### Example: Constructor Function

```javascript

function Person(name, age) {
this.name = name;
this.age = age;
}
Person.prototype.greet = function() {
console.log(`Hello, my name is ${this.name}`);
};
const person1 = new Person("Alice", 28);
person1.greet();

// Output: Hello, my name is Alice

```


### Access Modifiers in JavaScript

 While JavaScript doesn't have traditional access modifiers like private or protected, it uses a few techniques to control visibility: Public members are directly accessible. Private members can be simulated using closures or symbols, though ECMAScript 2022 added **#** syntax for private fields.


#### Private Fields Example (ES2022)

```javascript


class Person {
#name;

// Private field

constructor(name) {
this.#name = name;
}
greet() {
console.log(`Hello, my name is ${this.#name}`);
}
}
const person = new Person("Jane");

person.greet();

// Hello, my name is Jane

console.log(person.#name);

// Error: Private field '#name' must be declared in an enclosing class

```


### Conclusion

Object-Oriented Programming (OOP) is an essential paradigm in
JavaScript that allows developers to write modular, reusable, and
maintainable code. By understanding and applying OOP
principles such as Encapsulation, Abstraction, Inheritance, and
Polymorphism, you can create better structured and more
efficient applications. With JavaScript supporting both modern
ES6 class-based OOP and traditional constructor functions, it
offers flexibility for different coding styles.
Understanding these concepts deeply will help you improve your
coding practices, allowing you to handle larger projects and
improve code readability and maintenance.


### OOP Phase 1 :

```javascript

const user = {
username: "hitesh",

 loginCount: 8,
signedIn: true,
getUserDetails: function(){
console.log("Got user details from database");
console.log(`Username: ${this.username}`);
console.log(this);
}
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);

// Function Constructor


function User(username, loginCount, isLoggedIn){
this.username = username;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn
this.greeting = function(){
console.log(`Welcome ${this.username}`);

 }
return this
}
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

```


### OOP Phase 2 :

```javascript


function multipleBy5(num){
return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
this.username = username
this.score = score
}
createUser.prototype.increment = function(){
this.score++
}
createUser.prototype.printMe = function(){
console.log(`price is ${this.score}`);
}
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)
chai.printMe()


// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.



```


### OOP Phase 3 : (Prototype)

```javascript


let myName = "hitesh"

let mychannel = "chai"

console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
thor: "hammer",
spiderman: "sling",
getSpiderPower: function(){
console.log(`Spidy power is ${this.spiderman}`);
  }
}
Object.prototype.hitesh = function(){
console.log(`hitesh is present in all objects`);
}
Array.prototype.heyHitesh = function(){
console.log(`Hitesh says hello`);
}
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
heroPower.heyHitesh()
Inheritance

 const User = {
name: "chai",
email: "chai@google.com"
}
const Teacher = {
makeVideo: true
}
const TeachingSupport = {
isAvailable: false
}
const TASupport = {
makeAssignment: 'JS assignment',
fullTime: true,
__proto__: TeachingSupport
}
Teacher.__proto__ = User


// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
let anotherUsername = "ChaiAurCode"


String.prototype.trueLength = function(){
console.log(`${this}`);
console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

```

### OOP Phase 4 :


In JavaScript, call(), apply(), and bind() are methods used to
manipulate the this context and control how functions are
invoked. They are crucial for understanding how JavaScript
handles the this keyword, especially when dealing with
object-oriented or asynchronous programming.

#### call() Method

What is call()?

The call() method is used to call a function with a specified this
value and individual arguments. It allows you to explicitly set the
this context and pass arguments one by one.

### Syntax:

##### functionName.call(thisArg, arg1, arg2, ...);

thisArg: The value to be used as this in the function. arg1, arg2, ...: The arguments to be passed to the function.

##### Key Points:

The call() method calls the function immediately with the specified
this value and arguments.
You can pass any number of arguments after thisArg.
It’s often used for function borrowing (calling a method of one
object with the context of another).

##### Example:

```javascript

function greet(name) {
console.log(`${this.name} greets ${name}`);

 }
const person = { name: "Alice" };

//Using `call` to set `this` to `person` object and passing "Bob" as an argument.

greet.call(person, "Bob");

// Output: Alice greets Bob


function SetUsername(username){
complex DB calls
this.username = username
console.log("called");
}

function createUser(username, email, password){
SetUsername.call(this, username)
this.email = email
this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

```


#### apply() Method

What is apply()?
The apply() method is similar to call(), but instead of passing arguments individually, it takes an array (or an array-like object) of arguments.


### Syntax:

#### functionName.apply(thisArg, [arg1, arg2, ...]);

##### thisArg: The value to be used as this in the function.
[arg1, arg2, ...]: An array or array-like object containing the arguments.

##### Key Points:

The apply() method allows you to call a function with a specific this
context and arguments passed as an array.
It is typically used when you need to pass an array of arguments to
a function.

##### Example:

```javascript


function greet(name, age) {
console.log(`${this.name} is ${age} years old and greets
${name}`);
}
const person = { name: "Alice" };
// Using `apply` to pass arguments as an array
greet.apply(person, ["Bob", 30]);
// Output: Alice is 30 years old and

//greets Bob

```


#### bind() Method

What is bind()?

The bind() method does not immediately call the function but
returns a new function with the specified this context and
arguments. This is useful when you want to delay the invocation or
pass a function with a specific this reference.

 
### Syntax:
#### const newFunction = functionName.bind(thisArg, arg1, arg2, ...);

##### thisArg: The value to be used as this inside the function. arg1, arg2, ...: Optional arguments that will be prepended to the arguments passed when the new function is called.


##### Key Points:

bind() returns a new function, allowing you to pre-set the this
context and arguments for future use.
The function is not executed until it is invoked explicitly.
Unlike call() and apply(), bind() does not invoke the function
immediately.

##### Example:

```javascript

function greet(name) {
console.log(`${this.name} greets ${name}`);

 }
const person = { name: "Alice" };

// Using `bind` to create a new function with `this` set to `person` object

const greetPerson = greet.bind(person);

// The function is not called yet, but we can now call it with specific arguments.

greetPerson("Bob");

// Output: Alice greets Bob


class React {
constructor(){
this.library = "React"
this.server = "https://localhost:300"
// requirement
document
.querySelector('button')
.addEventListener('click', this.handleClick.bind(this))
}
handleClick(){

 console.log("button clicked");
console.log(this.server);
}
}
const app = new React()

```


### Differences Between call(), apply(), and bind()

#### When to Use Each Method?

##### Use call(): When you need to invoke the function immediately and you have individual arguments.

##### Use apply(): When you need to invoke the function immediately, but the arguments are in an array or array-like structure.

##### Use bind():  When you want to create a new function that can be invoked later, with a specific this context and preset arguments.



### Practical Applications:

#### Function Borrowing:

Use call() or apply() when you want to borrow a method from one
object and apply it to another object.

#### Event Handlers:

bind() is often used with event listeners to ensure that the this
keyword inside the event handler refers to the correct object.

#### Partial Application:

Use bind() to create a function with preset arguments, often used
in scenarios like form submissions or event delegation.


### Conclusion

call(), apply(), and bind() are powerful tools for managing function
invocation and controlling the this context in JavaScript.
Understanding their differences and knowing when to use each
method is essential for writing clean, efficient, and maintainable
code.


### OOP Phase 5 : Class


```javascript

class User {
constructor(username, email, password){
this.username = username;
this.email = email;
this.password = password
}
encryptPassword(){
return `${this.password}abc`

 }
changeUsername(){
return `${this.username.toUpperCase()}`
}
}
const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
Behind the scene
function User(username, email, password){
this.username = username;
this.email = email;
this.password = password
}
User.prototype.encryptPassword = function(){
return `${this.password}abc`
}
User.prototype.changeUsername = function(){
return `${this.username.toUpperCase()}`

 }

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

```

### Inheritance in OOP

```javascript

class User {
constructor(username){
this.username = username
}
logMe(){
console.log(`USERNAME is ${this.username}`);
}
}
class Teacher extends User{
constructor(username, email, password){
super(username)
this.email = email

 this.password = password
}
addCourse(){
console.log(`A new course was added by ${this.username}`);
}
}
const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
console.log(chai instanceof User);

// Static Value In OOP

class User {
constructor(username){
this.username = username
}

logMe(){
console.log(`Username: ${this.username}`);
}
static createId(){
return `123`
}
}
const hitesh = new User("hitesh")
console.log(hitesh.createId())
class Teacher extends User {
constructor(username, email){
super(username)
this.email = email
}
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

```


### Retrieving and modifying property descriptors using Object.getOwnPropertyDescriptor() and Object.defineProperty()

#### The srtory behind Math.PI

```javascript

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);
const chai = {
name: 'ginger chai',
price: 250,
isAvailable: true,
orderChai: function(){
console.log("chai nhi bni");
}
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
writable: false,
enumerable: true,
})

 console.log(Object.getOwnPropertyDescriptor(chai, "name"));
for (let [key, value] of Object.entries(chai)) {
if (typeof value !== 'function') {
console.log(`${key} : ${value}`);
}
}

```


### Getter Setter

```javascript


class User {
constructor(email, password){
this.email = email;
this.password = password
}
get email(){
return this._email.toUpperCase()
}
set email(value){
this._email = value
}

 get password(){
return `${this._password}hitesh`
}
set password(value){
this._password = value
}
}
const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

```


### Getter Setter Using Propertis ( Previous Way) 

```javascript

function User(email, password){
this._email = email;
this._password = password
Object.defineProperty(this, 'email', {
get: function(){
return this._email.toUpperCase()
},
set: function(value){

 this._email = value
}
})
Object.defineProperty(this, 'password', {
get: function(){
return this._password.toUpperCase()
},
set: function(value){
this._password = value
}
})
}
const chai = new User("chai@chai.com", "chai")
console.log(chai.email);


const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);



```


### Closure, Higher Order Functions, and Callback Functions in JavaScript


These three concepts are fundamental in JavaScript, especially
when dealing with asynchronous operations, functional
programming, and creating efficient, reusable code.

### Closure in JavaScript


A closure is a function that remembers and can access its lexical
scope, even when the function is executed outside that scope. In
simple terms, a closure allows a function to access variables from
its parent scope even after the parent function has finished
executing.

#### Key Points:

Closures are created whenever a function is defined inside another
function.

The inner function has access to the variables of its outer function,
even if the outer function has finished execution.


#### Example of Closure:

```javascript

function outerFunction(outerVariable) {
return function innerFunction(innerVariable) {

 console.log(outerVariable);
 
 // Access outerVariable (closure)
 
 console.log(innerVariable); 
 // Access innerVariable
 
};
}
const closureExample = outerFunction("I am outer");
closureExample("I am inner");

// Output:
// I am outer
// I am inner

// Explanation: innerFunction has access to outerVariable, even though outerFunction has already executed. This is a closure in action.


function init() {
let name = "Mozilla";
function displayName() {
console.log(name);
}
displayName();
}
init();

 function outer(){
let username = "hitesh"
console.log("OUTER", secret);
function inner(){
let secret = "my123"
console.log("inner", username);
}
function innerTwo(){
console.log("innerTwo", username);
console.log(secret);
}
inner()
innerTwo()
}
outer()
console.log("TOO OUTER", username);


function makeFunc() {
const name = "Mozilla";
function displayName() {
console.log(name);
}
return displayName;

 }
const myFunc = makeFunc();
myFunc();

// Real Life Example


function clickHandler(color){
document.body.style.backgroundColor = `${color}`
return function(){
document.body.style.backgroundColor = `${color}`
}
}
document.getElementById('orange').onclick =
clickHandler("orange")
document.getElementById('green').onclick =
clickHandler("green")


```



### Higher-Order Functions in JavaScript

A higher-order function is a function that Takes one or more functions as arguments. Returns a function as its result.

In other words, higher-order functions can accept or return
functions. They are often used to create more abstract, reusable
code, particularly in functional programming paradigms.


#### Example of a Higher-Order Function:

```javascript

function multiplyBy(factor) {
return function (num) {
return num * factor;
};
}
const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5)); Output: 10
const multiplyBy3 = multiplyBy(3);
console.log(multiplyBy3(5)); Output: 15


// Explanation: The multiplyBy function is a higher-order function because it returns a new function that multiplies a number by the specified factor.

// Higher-order functions are commonly used in JavaScript array methods like map(), filter(), and reduce().

```

### Callback Functions in JavaScript


A callback function is a function passed into another function as
an argument, which is then executed at a later time or after a
certain event has occurred.

Callbacks are used in asynchronous programming, event handling,
and other situations where the execution order is not strictly sequential.


#### Example of Callback Function:

```javascript

function fetchData(callback) {
const data = { name: "John", age: 30 };
callback(data);

// Passes data to the callback

 }
fetchData(function(response) {
console.log(response);

// Output: { name: "John", age: 30 }

});

// Explanation: fetchData takes a callback function as its argument and calls it after getting the data. The callback function receives the data as a parameter.


// Common Usage of Callback Functions: Asynchronous Operations: Callbacks are often used in async operations (e.g., fetching data from a server).


// Event Handlers: In DOM manipulation, callbacks are used as event listeners.

```



### Comparison & Relationships Between These Concepts


#### Closures and Callbacks:

A closure often captures a callback function. For example, when
passing a callback to an asynchronous function, the callback can
access variables from the outer scope due to the closure.

#### Higher-Order Functions and Callbacks:

A higher-order function is a function that can accept a callback
function as an argument. For instance, setTimeout() is a
higher-order function that takes a callback to execute after a delay.

#### Higher-Order Functions and Closures:

Higher-order functions can return closures, creating a function
that remembers the scope of its outer function.

#### Practical Example Combining All Three

Here is an example that involves closures, higher-order functions, and callbacks:

```javascript


function createCounter(initialValue) {
let count = initialValue;
return function() {
This is a closure
count++;

// Accessing the `count` variable from outer function
return count;
};
}
const counter = createCounter(0);
setTimeout(function() {
Callback function
console.log(counter());
Output: 1
}, 1000);

// Explanation: createCounter is a higher-order function because it returns a function (counter) that is a closure. The counter function accesses count even after createCounter has finished execution. The setTimeout() function takes a callback, which calls counter() after 1 second.

```


#### Summary of Concepts:

##### Closure: A function that retains access to its outer function's scope after the outer function has finished execution.

###### Higher-Order Function: A function that takes another function as an argument or returns a function.

##### Callback Function: A function passed as an argument to another function, executed at a later time or event.


### Use Cases:

Closures are commonly used for data encapsulation and creating
private variables.

Higher-Order Functions are useful for abstraction and creating
reusable logic.

Callbacks are widely used for handling asynchronous events and
handling user interactions.


### DOM Practical


### Project 1 :

```javascript


const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);

console.log(parent.children[1].innerHTML);
for (let i = 0; i < parent.children.length; i++) {
console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color = "orange"
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);
console.log("NODES: ", parent.childNodes);

```

### Project 2 : ( Create an Element and append it )

```javascript


const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"

div.innerText = "Chai aur code"
const addText = document.createTextNode("Chai aur code")
div.appendChild(addText)
document.body.appendChild(div)

```


### Project 3 : ( CRUD Operation )

```javascript


function addLanguage(langName){
const li = document.createElement('li');
li.innerHTML = `${langName}`
document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("typescript")
function addOptiLanguage(langName){
const li = document.createElement('li');
li.appendChild(document.createTextNode(langName))
document.querySelector('.language').appendChild(li)
}
addOptiLanguage('golang')

// Edit

const secondLang = document.querySelector("li:nth-child(2)")
console.log(secondLang);
secondLang.innerHTML = "Mojo"
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

// edit

const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>'
remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()

```

#### Project 4 :

```javascript


console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
console.log(button);
button.addEventListener('click', function (e) {

 console.log(e);
console.log(e.target);
if (e.target.id === 'grey') {
body.style.backgroundColor = e.target.id;
}
if (e.target.id === 'white') {
body.style.backgroundColor = e.target.id;
}
if (e.target.id === 'blue') {
body.style.backgroundColor = e.target.id;
}
if (e.target.id === 'yellow') {
body.style.backgroundColor = e.target.id;
}
});
});

```



### Project 5 :

```javascript


const form = document.querySelector('form');
this usecase will give you empty

const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight =
parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
if (height === '' || height < 0 || isNaN(height)) {
results.innerHTML = `Please give a valid height ${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
results.innerHTML = `Please give a valid weight ${weight}`;
} else {
const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//show the result
results.innerHTML = `<span>${bmi}</span>`;
}
});


```



### Project 6 :


```javascript


const clock = document.getElementById('clock');

const clock = document.querySelector('#clock')
setInterval(function () {
let date = new Date();
console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```


### Project 7 :


```javascript


let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
submit.addEventListener('click', function (e) {
e.preventDefault();
const guess = parseInt(userInput.value);
console.log(guess);
validateGuess(guess);
});
}
function validateGuess(guess) {
if (isNaN(guess)) {
alert('PLease enter a valid number');
} else if (guess < 1) {
alert('PLease enter a number more than 1');
} else if (guess > 100) {
alert('PLease enter a number less than 100');
} else {
prevGuess.push(guess);
if (numGuess === 11) {
displayGuess(guess);
displayMessage(`Game Over. Random number was
${randomNumber}`);
endGame();

 } else {
displayGuess(guess);
checkGuess(guess);
}
}
}
function checkGuess(guess) {
if (guess === randomNumber) {
displayMessage(`You guessed it right`);
endGame();
} else if (guess < randomNumber) {
displayMessage(`Number is TOOO low`);
} else if (guess > randomNumber) {
displayMessage(`Number is TOOO High`);
}
}
function displayGuess(guess) {
userInput.value = '';
guessSlot.innerHTML += `${guess}, `;
numGuess++;
remaining.innerHTML = `${11 - numGuess} `;
}

 function displayMessage(message) {
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
userInput.value = '';
userInput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
startOver.appendChild(p);
playGame = false;
newGame();
}
function newGame() {
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', function (e) {
randomNumber = parseInt(Math.random() * 100 + 1);
prevGuess = [];
numGuess = 1;
guessSlot.innerHTML = '';
remaining.innerHTML = `${11 - numGuess} `;
userInput.removeAttribute('disabled');
startOver.removeChild(p);

 playGame = true;
});
}


```



### Project 8 :


```javascript


const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
insert.innerHTML = `
<div class='color'>
<table>
<tr>
<th>Key</th>
<th>Keycode</th>
<th>Code</th>
</tr>
<tr>
<td>${e.key === ' ' ? 'Space' : e.key}</td>
<td>${e.keyCode}</td>
<td>${e.code}</td>
</tr>

 </table>
</div>
`;
});


```


### Project 9 :

```javascript


const randomColor = function () {
const hex = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
color += hex[Math.floor(Math.random() * 16)];
}
return color;
};
let intervalId;
const startChangingColor = function () {
if (!intervalId) {
intervalId = setInterval(changeBgColor, 1000);
}
function changeBgColor() {
document.body.style.backgroundColor = randomColor();

 }
};
const stopChangingColor = function () {
clearInterval(intervalId);
intervalId = null;
};
document.querySelector('#start').addEventListener('click',
startChangingColor);
document.querySelector('#stop').addEventListener('click',
stopChangingColor);


```


### Project 10 :

```javascript


const getListDetails = (event) => {
const listItem = event.target;
listItem.style.transform = "rotateY(360deg)";
=> {
listItem.style.transform = "rotateY(0deg)";
}, 500);
document.getElementById(
"listValue"

setTimeout(()

 ).innerText = `You fav programming language is:
${listItem.innerText}`;
};
document
.getElementById("myList")
.addEventListener("click", getListDetails);



```



### Project 11 :


```javascript


const callOuter = (event) => {
console.table([
{
Description: "I am the outer one",
Target: event.target,
CurrentTarget: event.currentTarget,
},
]);
};
const callMiddle = () => {
console.table([
{
Description: "I am the Middle one",
Target: event.target,

 CurrentTarget: event.currentTarget,
},
]);
};
const callInner = (event) => {
console.table([
{
Description: "I am the Inner one",
Target: event.target,
CurrentTarget: event.currentTarget,
},
]);
event.stopPropagation();
};

// By default is the bubbling phase

document.getElementById("outer").addEventListener("click",
callOuter);
document.getElementById("middle").addEventListener("click",
callMiddle);
document.getElementById("inner").addEventListener("click",
callInner);

// To achieve event capturing, you can use the third parameter of the addEventListener method, which specifies whether the event should be captured during the capturing phase. Setting it to true will activate the capturing phase.


document
.getElementById("outer")
.addEventListener("click", callOuter, true);
document
.getElementById("inner")
.addEventListener("click", callInner, true);
document
.getElementById("middle")
.addEventListener("click", callMiddle, true);


```


### Project 12 :

```javascript


const apiBody = document.querySelector(".api_body");
const apiUrl = "https://icanhazdadjoke.com/";
async function fetchData() {
const res = await fetch(apiUrl, {
headers: {
Accept: "application/json",
},

 });
const data = await res.json();
console.log(data.joke);
apiBody.innerHTML = data.joke;
}
fetchData();
document.getElementById("fetchJoke").addEventListener("click",
fetchData);

// With Try Catch


const apiBody = document.querySelector(".api_body");
const apiUrl = "https://icanhazdadjoke.com/";
async function fetchData() {
const fetchData = async () => {
try {
const res = await fetch(apiUrl, {
headers: {
Accept: "application/json",
},
});

 const data = await res.json();
console.log(data.joke);
apiBody.innerHTML = data.joke;
} catch (error) {
apiBody.innerHTML = error;
console.log(error);
}
};
fetchData();
document.getElementById("fetchJoke").addEventListener("click",
fetchData);


```



### Project 13 :


```javascript


const apiBody = document.querySelector(".api_body");
const apiUrl = "https://icanhazdadjoke.cosm/";
const fetchData = () => {
fetch(apiUrl, {
headers: {
Accept: "application/json",
},

 })
.then((res) => {
console.log(res);
return res.json();
})
.then((data) => {
console.log(data.joke);
apiBody.innerHTML = data.joke;
})
.catch((error) => {
apiBody.innerHTML = `Api is not working`;
console.log("I am sorry");
});
};
fetchData();
document.getElementById("fetchJoke").addEventListener("click",
fetchData);


```


### How JS Work :  How JavaScript Works Under the Hood: A Detailed Breakdown


### First : Execution Context


When JavaScript is executed, it starts by creating an Execution
Context. The execution context is a container where the code is
executed. It consists of two main parts:
Global Execution Context: This is the default context where any
JavaScript code begins executing.
Function Execution Context: Whenever a function is called, a new
execution context is created for it.

Each execution context has three major components:
Variable Object (VO): Stores function arguments, inner variables,
and functions.
Scope Chain: Ensures variables are resolved by looking into the
current scope and its parent scopes.

this keyword: Refers to the object that is executing the current
piece of code.

### Second : Call Stack (Execution Stack)


The call stack is where the JavaScript engine keeps track of
function calls. It's a LIFO (Last In, First Out) structure.
How the Call Stack Works:
Function Invocation: When a function is called, a new execution
context for that function is pushed onto the call stack.
Execution: The function executes its code and when it completes,
its execution context is popped off the stack.
Order of Execution: JavaScript always executes the most recently
added function on the stack, one at a time.

Example:

```javascript


function firstFunction() {

 secondFunction();
console.log("First function");
}
function secondFunction() {
console.log("Second function");
}
firstFunction();

```


### Execution Flow :

#### firstFunction() is called and pushed to the stack.

#### Inside firstFunction(), secondFunction() is called and pushed to the stack.

#### secondFunction() runs and is popped from the stack.

#### The control goes back to firstFunction(), and the console logs "First function".

#### firstFunction() finishes and is popped from the stack.



### Third : Heap Memory


JavaScript uses heap memory for storing objects, arrays, and other
dynamically allocated memory. Unlike the call stack, the heap is
used to store larger data structures, which don’t have a fixed size.

#### How the Heap Works:

Memory Allocation: When a new object or array is created, it is
stored in the heap.
Reference in Call Stack: The call stack will contain a reference
(pointer) to the object stored in the heap. The heap doesn’t
manage the size of these objects, so it can grow or shrink
dynamically.

Example:

```javascript

let person = { name: "John", age: 30 };

```

Here, the person object is stored in the heap, and the variable
person in the call stack holds a reference to that memory location
in the heap.

 
### Fourth : Execution Phases (Compilation + Execution)


Before JavaScript starts running, it goes through two phases:
Compilation Phase:
In this phase, JavaScript is parsed and compiled into bytecode.
Here's what happens:
Hoisting: Variables and functions are hoisted to the top of their
scope.

Creation of Execution Context: The global execution context and
function execution contexts are created.
Execution Phase:
In this phase, the JavaScript engine executes the bytecode.

 
### Fifth : Event Loop and Asynchronous Execution


JavaScript is single-threaded, which means it can only execute one
piece of code at a time. However, it handles asynchronous
operations like network requests, timers, or reading files by
utilizing the event loop mechanism.

#### How the Event Loop Works:

##### Call Stack: 

The engine first checks the call stack to see if there’s any code that needs to be executed. Web APIs: If asynchronous code is encountered (like setTimeout(), fetch(), or XMLHttpRequest), these are handed off to the Web APIs (provided by the browser or Node.js).

##### Callback Queue: 

When the Web API finishes its task, the callback is
moved to the callback queue.

##### Event Loop: 
The event loop constantly checks if the call stack is empty. When the stack is empty, it moves the callback from the callback queue to the call stack.


Example:

```javascript


console.log("Start");
setTimeout(() => {
console.log("Timeout finished");
}, 2000);
console.log("End");

```


### Execution Flow:


#### 1st "Start" is logged to the console.

#### 2nd The setTimeout function is handed to the Web API and scheduled for 2 seconds.

#### 3rd "End" is logged immediately after "Start".

#### 4th After 2 seconds, the callback for setTimeout is moved to the callback queue.

#### fifth The event loop checks the call stack, finds it empty, and moves the callback to the call stack.

#### sixth The callback executes, logging "Timeout finished".



### Sixth : Web APIs and Concurrency


JavaScript handles asynchronous tasks (e.g., network requests,
timers) using the Web APIs in the browser or Node.js. These APIs
allow the JavaScript engine to continue executing other code
while waiting for the task to finish.
Key Web APIs:

#### setTimeout:

Executes a callback after a specified time.
fetch: Makes an HTTP request to fetch data.
XMLHttpRequest: Another way to make HTTP requests.

The Web APIs manage these operations in the background
without blocking the call stack. Once the task is complete, the
callback is pushed to the callback queue, and when the call stack
is clear, the event loop picks it up.


### Seventh : Asynchronous JavaScript with Promises, Async/Await


In modern JavaScript, Promises and async/await make working
with asynchronous code easier.
Promises:
A Promise represents a future value that may not be available yet
but will be resolved at some point.


```javascript

let fetchData = new Promise((resolve, reject) => {
let success = true;
if(success) {
resolve("Data fetched successfully");
} else {
reject("Error fetching data");
}
});
fetchData.then(result => console.log(result))
.catch(error => console.log(error));

// Async/Await:

// async/await allows you to write asynchronous code in a synchronous-looking style.

async function fetchData() {
let data = await fetch("https://api.example.com/data");
console.log(data);
}
fetchData();
 
// Behind the scenes: When you use await, JavaScript pauses the execution of the async function until the Promise is resolved. It does not block the call stack but allows asynchronous code to execute.

```

### Eigth : Garbage Collection 

JavaScript uses Garbage Collection to automatically manage
memory. It identifies objects that are no longer in use and frees up
memory.
Reachability: An object is reachable if it is referenced by any
variable in the stack, heap, or closures.
Unreachable Objects: Once an object is no longer referenced, it
becomes eligible for garbage collection.

 
 
### Closures How Work 


Closures are an important concept in JavaScript. They allow a
function to retain access to its lexical scope, even after the function that created it has finished executing.


#### How Closures Work : 


A closure occurs when a function "remembers" the variables from
its surrounding scope, even after the function has finished
executing.

Example:

```javascript


function outerFunction() {
let outerVar = "I am from outer scope";
function innerFunction() {
console.log(outerVar);
}
return innerFunction;
}

 let closureExample = outerFunction();
closureExample();

// "I am from outer scope"

// Here, innerFunction has access to the outerVar even though outerFunction has finished execution, demonstrating the closure.


```





### Conclusion: How JavaScript Works Under the Hood 

#### To summarize :


1. Global Context: The starting point where JavaScript code is
executed.

2. Call Stack: Keeps track of function execution and manages the
LIFO execution order.

3. Heap Memory: Stores objects, arrays, and dynamically allocated
memory.

4. Event Loop: Ensures that asynchronous operations are executed
when the call stack is empty.

 5. Web APIs: Provide non-blocking asynchronous behavior like
timers and network requests.

6. Promises / Async/Await: Handle asynchronous code more easily
and in a more readable way.

7. Closures: Allow functions to "remember" their lexical scope and
retain access to variables even after execution.

JavaScript is designed to be single-threaded but has mechanisms
like the event loop, Web APIs, and closures to handle
asynchronous operations efficiently.
