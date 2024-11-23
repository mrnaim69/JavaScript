// Type Conversion 

// ===> Number()

// String To Number 

const myNum = "69";

const myNum1 = Number(myNum);
const myNum2 = parseInt(myNum);
const myNum3 = parseFloat(myNum);
const myNum4 = +myNum;
const myNum5 = -myNum;


console.table([
  myNum1,
  myNum2,
  myNum3,
  myNum4,
  myNum5,
  ])
  

console.table([
  typeof myNum1,
  typeof myNum2,
  typeof myNum3,
  typeof myNum4,
  typeof myNum5,
  ])
  
  
// Boolean to Number 

const myBool = true;
const myBool1 = Number(myBool);
const myBool2 = parseInt(myBool);
// parseInt cann't convet boolean to number 
const myBool3 = parseFloat(myBool);
// parseFloat cann't convet boolean to number
const myBool4 = +myBool;
const myBool5 = -myBool;


console.table([
  myBool,
  myBool1,
  myBool2,
  myBool3,
  myBool4,
  myBool5,
  ])
  
  
 // ====> String()
 
 // Number to Sting
 
 const myNumber = 69;
 const myNumber1 = String(myNumber);
 
 const myNumber2 = myNumber + "";
 const myNumber3 = "" + myNumber;
 
 console.table([
   myNumber1,
   myNumber2,
   myNumber3,
   ])
  
  
  
  // Boolean to Sting 
  
  const myBoolean = true;
  
  const myBoolean1 = String(myBoolean);
  
  const myBoolean2 = myBoolean + "";
  
  console.table([
    myBoolean1,
    myBoolean2,
    ])
    
    
  
//  ====> Boolean()

// Number to boolean

const myNumberBol = 69;
const myNumberBol1 = Boolean(myNumberBol);

console.log(myNumberBol1)


// String to Boolean

const myStr1 = "Hello";
const myStrBol = Boolean(myStr1);

let myValue = null;

let myUndefined = undefined;

console.log(myStrBol);
console.log(Boolean(myValue));
console.log(Boolean(myUndefined));






