// Control Flow and Loops

// if else 

const myName = "Muhammad Naim";

if(myName){
  console.log(myName);
}else{
  console.log("Sorry");
}


let myAge = 15;

if(myAge > 18){
  console.log("I am adult");
}else{
  console.log("I am not adult");
}


// if else if else

let number = 10;

if(number > 100){
  console.log("Number is more than 100");
}else if(number > 50){
  console.log("Number is more than 50");
}else if(number > 25){
  console.log("Number is more than 25");
}else{
  console.log("Number is less than 25");
}


// Ternary Operator 

let myFullName = "Muhammad Naimur Rahman Naim";

myFullName === "Muhammad Naimur Rahman Naim" ? console.log("Yes, My full name is Muhammad Naimur Rahman Naim") : console.log("Sorry ! My Full name was Muhammad Naimur Rahman Naim");


let myNum = 5;
myNum > 10 ? console.log("Number is more than 10") : console.log("Number is less than 10");



// Switch

let day = "Sunday"

switch (day) {
  case 'Saturday':
    console.log("Today is Saturday ");
    break;
  case 'Sunday' :
    console.log("Today is Sunday");
    break;
  case 'Monday' :
    console.log("Today is Monday");
    break;
  case 'Tuesday' :
    console.log("Today is Tuesday");
    break;
  case 'Wednesday' :
    console.log("Today is Tuesday");
    break;
  case 'Thursday' :
    console.log("Today is Thursdays");
    break;
  case 'Feiday' :
    console.log("Today is Friday ");
    break;
  default:
  console.log("Please enter a valid day");
};



// Loop in JavaScript 

// while loop

let startValue  = 1;

while(startValue <= 10){
  console.log(startValue);
  startValue++;
}


// do while loop

let starValue1 = 1;

do{
  console.log(starValue1);
  starValue1++
}while(starValue1 <= 10);

let x = 1;

 do{
   console.log(x);
   x++;
 }while(x >= 10);
 
 
 // for loop 
 
 
 for (let i = 1 ; i <= 10; i++) {
  console.log(`The value of i is ${i}`);
 }
 
 
 // infinity loop 
 
 // if we remove the iteration value it will be a infinity loop

 for(;;){
   let i = 1;
   //console.log(i);
   i++;
 }
 
 

for(let i = 1; i <= 10; i++){
  if(i === 5){
    break; // stop the loop
  }
  
  console.log(i);
}


for(let i = 1; i <= 10; i++){
  if(i === 5){
    continue; // skip printing 5
  }
  
  console.log(i);
}


for( let i = 1; i <= 10; i++){
  for(let j = 1; j <= 10; j++){
    console.log(` ${i} * ${j} = ${i * j}`);
  }
}





