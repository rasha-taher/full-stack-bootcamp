//step 1
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log("4+6=" + addNumbers(4,6));
console.log("123+896=" + addNumbers(123,896));
console.log("600+-10=" + addNumbers(600,-10));

function findMax( a, b){
    if(a>b) return a;
    else if (a<b) return b;
    else return "Both are equal";
}

console.log( "the max of 700 and 62 is :"+ findMax(700, 62));

console.log( "the max of 500 and 500 is :"+ findMax(500, 500));
 
function compute(num1 , num2 , operation){
    switch(operation){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        
        case "/":
            return num1/num2;
            break;
    }
}

console.log(compute(800, 100 , "/"));
console.log(compute(300, 75 , "-"));
console.log(compute(12, 23 , "*"));
console.log(compute(8078, 12005 , "+"));

//step 2
const squareNumber = (number) => {
    let localVar=7;
    return number * number;
};
  
console.log(squareNumber(5));
console.log(squareNumber(23));

let globalVar=10;
console.log(squareNumber(globalVar));
// console.log(squareNumber(localVar));

//step 3
console.log( 'from 1 to 10');
for(let i=1 ; i < 10;i++) console.log(i);

console.log( 'from 10 to 1');
let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}
console.log( 'print the numbers from 1 to 10, but only print the numbers that are even');
let k=1;
do{
    if(k%2==0)
    console.log(k);
    k++;
}while(k<=10);


let arr =['apple', 'banana', 'ananas' , "strawberry", 'watermelon' , "orange"];
for (let i=0; i<arr.length;i++){
    if(arr[i].length>5)
    console.log(arr[i]);
}