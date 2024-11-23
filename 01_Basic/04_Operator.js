// Operator in JavaScript 


// Arithmetic Operators ( + - * ** / % )
console.table([
  5 + 5,
  5 - 5,
  5 * 5,
  5 ** 5,
  5 / 5,
  5 % 5,
  ])
  
  
// Comparison Operators ( < <= > >= == === ) return true / false


console.table([
  5 > 5,
  5 >= 5,
  5 < 5,
  5 <= 5,
  5 == 5,
  5 == "5",
  5 === "5"
  ])
  
  
// Logical Operator ( ! || &&) 

console.table([
  (5 > 5 ) || (5 >= 5),
  (5 >= 5) && ( 5 > 5),
  (!true)
  ])


// Nullish Coalescing Operator ?? ( null / undefined )



let myValue = 0;

let myRealValue1 = myValue || 10;

let myRealValue2 = myValue ?? 9999;

console.log(myRealValue1); // Cause 0 is considered as a falsy vamue
console.log(myRealValue2); // only null or undefined consider a a falsy value


let myValue2 = null;

let myRealValue3 = myValue2 ?? 9999;

console.log(myRealValue3);


// Assignment Operator ( = )

let myNum = "Naim";


// Unary Operator ( + ++ - -- ) 


// ++  +

let value = +"9";

value = -"9";

value++ // value + 1;

++value // 10

// -- -

value-- // value - 1 ;

--value // 8



// += -= *= /= **= %=

let x = 10;

x += 6 ; // x = x + 6;

x -= 6 ; // x = x - 6;

x *= 2 ; // x = x * 6;

x /= 2 ; // x = x / 2 ;

x **= 2 ; // x = x ** 2 ; 

x %= 2 ; // x = x % 2 ;



