//step 1 
let fiveNumbers=[2, 7, 12, 50, 3];

let personalInfo={
    name: "Rasha",
    age : 22,
    height:165,
    location: "Beirut, Lebanon",
    nationality : "Lebanese"
};

//step 2 
let nextThreeNumbers=[5 , 1, 10];
let allNumbers ;
allNumbers=[...fiveNumbers, ...nextThreeNumbers];
console.log(allNumbers);

let additionalInfo={
    occupation : "web developer",
    hobby: "watching movie/series",
    education : "computer science"
}

let fullInfo= {...personalInfo, ...additionalInfo};
console.log(fullInfo);

//step 3


let [firstNum, secondNum, thirdNum]= fiveNumbers;
 console.log(firstNum);  
 console.log(secondNum); 
 console.log(thirdNum);

 let {name , age, height}=personalInfo;
console.log(name);
console.log(age)
console.log(height);