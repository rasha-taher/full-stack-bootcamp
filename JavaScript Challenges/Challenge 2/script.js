//step 1
var myage=22;
 if(myage>=20)
    console.log("You can enter this room.");
else console.log("You can't  enter this room.");

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);

//step 2

const age = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive=false;
 if(age>=18 && hasDriverLicense==true )
    canDrive=true;
console.log(canDrive);
var canRentCar=false;
if(age>=22 && hasDriverLicense==true && hasCar==false)
    canRentCar=true;
console.log(canRentCar);
var needDriver=false;
if(age<18 && hasDriverLicense==false && hasCar==false)
needDriver=true;
console.log(needDriver);


// step 3
var role ="admin";
switch(role) {
    case "admin":
     console.log("You have read and write access for the data");
      break;
    case "user":
        console.log("You have only read access for the data");
      break;
    case "guest":
        console.log("You have no access for the data");
        break;
    default:
      console.log("User role is not recoginized");
  }