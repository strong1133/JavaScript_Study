
/*
 * 
Java Script 언어 공부 
2. OPERATING 
 * 
 */


//**************** 
// String concatenation
//**************** 

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`String literals: 1 + 2: ${1+2}`);
 

//**************** 
// Numeric operators
//**************** 

console.log(1+1) //add
console.log(1-1) //substract
console.log(1/1) //divide
console.log(1*1) //multiply
console.log(5%2) //remainder
console.log(2**3) //exponentitaion


//**************** 
// Increment and Decrement
//**************** 
let counter =2 ;

const preIncrement = ++counter;
console.log(preIncrement);
console.log(counter);
const postIncrement = counter++;
console.log(postIncrement);
console.log(counter);


 //**************** 
// equality - quiz
//****************
console.log( 0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false


 //**************** 
//  Ternary operator
//  Condition ? value1 : value2;
//****************
let name = 'ellie'
console.log(name  === 'ellie' ? 'Yes' : 'No');
