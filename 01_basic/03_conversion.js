// Conversion  
// conversion number

let score = 33                  // use null, any name, trueor false

console.log(score);
console.log(typeof score);      // output is 33 / number

let valueInNumber = Number (score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(score);
console.log(typeof score);


// 33 => "33"
// "33abc" => NaN    (Not A Number)
// true => 1  ; false => 0


let isloggedIn = "SAURABH"

let booleanIsLoggedIn = Boolean (isloggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0=> false
// " " => true
// "saurabh" => true 

// convert in string type 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



//***********operations***************
// String to number conversion

let value = 3
let negValue = -value
console.log(negValue);

// some basic mathematical oprations

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);

// some Triky oprations 

let str1 = "hello"
let str2 = "  shambho"
let str3 = str1 + str2;
console.log(str3);

// prefix  / postfix conversion operations 


let gameCounter = 100
++gameCounter;
console.log(gameCounter);


