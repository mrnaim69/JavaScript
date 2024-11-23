// Function in JavaScript 


// Function 

function helloWorld() {
  console.log("Hello World !")
}

helloWorld();


const firstProgramme = function() {
  console.log("Hello World");
}


firstProgramme();


// Function with parameters 

function sayHello(userName) {
  console.log(`Hey ${userName} ! Welcome to JavaScript`);
}


sayHello("Naim");
sayHello("Naimur");


// return keyword is use for returning any value from the function 


// Function Expression

const greet = function(name) {
  return `Hey ${name} ! Welcome to JavaScript !`;
}

console.log(greet("Naim"));
console.log(greet("Muhammad Naimur"));



// Arrow Function 

const firstProgrammeWithArrowFunction = () => {
  console.log("Hello World !");
}


firstProgrammeWithArrowFunction();

const userIntro = (username, userage) => {
  return `Hey Everyone ! I am ${username} and I am ${userage} years old`;
}


console.log(userIntro("Naim", 15));


console.log(userIntro("Muhammad Naimur", 15));




const userInfo = (username, userAge, userGoal) => `Hey Everyone ! I'm ${username}. I'm ${userAge} yearls old. I want to be a ${userGoal}`;

// is there is one return value we can skip return keyword. But if we open a scope {} then return value must be needed;



console.log(userInfo("Naim", 15, "Full Stack Web Developer"));

const getUser1 = () => ({ name: "Naim", age: 25 });

// Use `()` to wrap the object.

console.log(getUser1());

// Output: { name: "Naim", age: 25 }



const getUser2 = () => {
  return { name: "Naim", age: 25 };
};
console.log(getUser2());

// Output: { name: "Naim", age: 25 }


// IIFE ( Immediately Invoked Function Expression )


// IIFE with simple function

(function() {
  console.log("Hello World !");
})();

(function(name) {
  console.log(`Hello ${name}`);
})("Naim");

// Here ";" is an important thing without this second IIFE cannot run 

// IIFE with arrow Function 

(() => {
  console.log("Hello World !");
})();


((name) => {
  console.log(`Hello ${name}`);
})("Naim");

// Here ";" is also an important thing 


// Function with array

const arrayFunction = (inputArray) => {
  inputArray.forEach((item) => {
    console.log(item);
  })
}

const myArr = [1, 2, 3, 4, 5, 6];

arrayFunction(myArr);


// Function with Object 


const objectFunction = (inputObject) => {

  if (!inputObject.userName) {
    console.log("Please enter your username");
  } else {
    return `Hey ${inputObject.userName} ! Welcome to JavaScript`;
  }

}


const myObj = {
  userName: "Muhammad Naim",
  userAge: 15,
}


console.log(objectFunction(myObj));


const restFuncion = (...number) => {

  const totalSum = number.reduce((accumulator, item) => {
    return accumulator += item;
  }, 0);

  console.log(totalSum);

}


restFuncion(1, 2, 3, 4, 5);



