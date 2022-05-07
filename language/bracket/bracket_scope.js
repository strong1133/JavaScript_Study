
// 중괄호 scope

let a = 0;
a = 1;

{
    let b = 1;
    a = 3;

    console.log("a: ", a); // 3
}
console.log("a: ", a); //3
console.log("b: " ,b); // ERR -> b is not defined



{

    let s1 =1
}