'use strict';
/*
 * 
Java Script 언어 공부 
1. 변수 선언
 * 
 */



//**************** 
// let (ES6)
//**************** 

{
    let name = "hello";
    console.log(name);
    name ="JS"
    console.log(name);
}
// console.log(name); 
// { Block Scope } 블록안에 선언한 변수는 { } 블록 밖에선 참조할 수 없디.


//**************** 
// var (더이상 쓰지 않음 let 이전..)
//**************** 
{
    age = 4;
    var age;
}
console.log(age)

// var 는 선언하기 전에 사용할 수 도 있다.
// 이것을 hoisting 이라 부르는데 호이스팅은 어디서 선언하든 맨위애서 선언한 것처럼 만들어 주는 것
// var는 { Block Scope } 이 없디
// 초기에는 이런 것들이 유연성에서의 장점이 있었지만 js를 이용한 app의 규모가 커질수록
// var로 인해 어디서 선언이 되고 초기화 되는지가 추적이 어려워짐 따라서 let이 탄생하였음.



//**************** 
// Constans -> 한번 선언되면 더이상 새롭게 초기화할 수 없음.
//**************** 

const daysInWeek =7;
// daysInWeek =1; => Assignment to constant variable.
// const 형을 다시 초기화 하려 하면 에러가 발생.



//**************** 
// Number => Infinity, -Infinity, NaN
//**************** 

const infinity = 1/0;
const negtiveinfinity = -1/0;
const nAn = 'not a number' /2 ;

console.log(infinity); //Infinity
console.log(negtiveinfinity); // -Infinity
console.log(nAn); //NaN

const bigint = 123123123123142321232323123233314142434n;
console.log(bigint)