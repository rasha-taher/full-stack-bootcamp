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

//step 4 

const personalInformation = {
    name: "Rasha",
    age : 22,
    height:165,
    location: "Beirut, Lebanon",
    nationality : "Lebanese",
    contactInfo: {
      email: "my email",
      phone: "123-456-7890"
    }
  };
  console.log( "My email "+ personalInformation.contactInfo.email);
  console.log("My phone" + personalInformation.contactInfo.phone);

 let[firstNumber , secondNumber, ...restOfNumbers]=fiveNumbers;
 console.log("first Number " + firstNumber);
 console.log("the second number "+ secondNumber);
 console.log("the rest of the array " + restOfNumbers);

 let person1={
    Name: "John",
    age: 23,
    occupation: "web developer",
    status: "single"
};


let company= {
    Brand:"some brand",
    years: 20,
    occupation:"software development"
}
let mergedObject = { ...person1, ...company };

console.log(mergedObject);