// Data Type in JavaScript 

// Primitive Data Type 

// 1. String
// 2. Number
// 3. Boolean 
// 4. undefined 
// 5. null
// 6. Bigint
// 7. Symbol

// Non - Primitive Data Type

// 1. Array
// 2. Function 
// 3. Object



// String

const myName = "Muhammad Naimur";

console.log(myName);

let stringNumber = "69";

console.log(stringNumber);

console.table([
  typeof myName,
  typeof stringNumber
  ])
  

// when a value is wrapped by " " or ' ' is will called a sting


// Number

const myNumber = 69;

console.log(myNumber);


// Boolean 

let myValue = true;
let myBad = false;

console.table([
  myValue,
  myBad,
  ]);
  
  
// undefined 

let myBadHabit = undefined;

let myBadHabit2;

console.log(typeof myBadHabit);
console.log(typeof myBadHabit2);


// null

let myNull = null;

console.table([
  myNull,
  typeof myNull,
  ])
  
  
// typeof null is "Object"


// Bigint

const bigNumber1 = 63838363738383636737373737n;

const bigNumber2 = BigInt(63838374746473737364748);

console.log(bigNumber1);
console.log(bigNumber2);


console.table([
  typeof bigNumber1,
  typeof bigNumber2,
  
  ]);
  
  
  
// Symbol (for unique );


const mySym1 = Symbol("Hello Naim");

const mySym2 = Symbol("Hello Naim");


console.log(mySym1.description);
console.log(mySym2.description)

console.table([
  mySym1,
  mySym2,
  mySym1 === mySym2
  ])
  
  
  
  
// Function 

function greet() {
  console.log("Hello World");
}

greet();


const greet2 = () => {
  console.log("Hello World");
}

greet2();


// Array

const myArr = [1,2,3,4,5,6];

console.log(myArr);

console.log(myArr[4]);


// Object the king 👑 

const objectNaim = {
  fullName : "Muhammad Naimur Rahman Naim",
  age : 15,
  goal : "Full Stack Web Developer",
  
  intro : function () {
    console.log(`Hey I am ${this.fullName} & I am ${this.age} years old. My goal is to be a ${this.goal}`);
  }
}


console.log(objectNaim);
console.log(objectNaim.fullName)
console.log(objectNaim.intro());




