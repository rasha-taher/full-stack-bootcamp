// Step 1 
let button = document.createElement('button')
document.body.appendChild(button)
button.style.padding="10px 20px"
button.style.fontSize="16px"
button.style.backgroundColor="#3498db"
button.style.color="#ffffff"
button.style.border="none"
button.style.cursor="pointer"
button.textContent="Click Me"

let randomNumber = Math.floor(Math.random() * 1000) + 1;

button.addEventListener('click', function(){
    this.style.backgroundColor="red"
    this.style.color="white";
    this.textContent=`Clicked ${randomNumber}`
})

// step 2 

let htext = document.createElement('h1')
document.body.appendChild(htext);
htext.style.border="10px dotted green"
htext.textContent="some random text"

document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
      htext.style.backgroundColor = 'red';
    } else if (event.key === 's' || event.key === 'S') {
      const currentLeft = parseInt(getComputedStyle(htext).left);
      htext.style.left = (currentLeft + 10) + 'px';
    }
    else if(event.key==='d'|| event.key==='D'){
        let ptext = document.createElement('p')
        document.body.appendChild(ptext)
        ptext.textContent="Key D was pressed"
    }
    else if(event.key==='w'|| event.key==='W'){
        if(htext.style.display=="none"){
            htext.style.display="block"
        }else {
            htext.style.display="none"
        }
    }
    else if (event.key === ' ' || event.key === 'Spacebar') {
        const currentFontSize = parseInt(getComputedStyle(htext).fontSize);
        htext.style.fontSize = (currentFontSize + 5) + 'px';
      }
  });
  
  //step 3
  let form = document.createElement('form');
  document.body.appendChild(form);

  let fullName =document.createElement('input')
  fullName.type="text"
  fullName.placeholder="Full Name"

  let email =document.createElement('input')
  email.type="email"
  email.placeholder="Email"

  let password =document.createElement('input')
  password.type="password"
  password.placeholder="Password"

  let confpassword =document.createElement('input')
  confpassword.type="password"
  confpassword.placeholder="Confirm Password"

  let subButton =document.createElement('input')
  subButton.type="button";
    subButton.value="Submit"

  form.appendChild(fullName)
  form.appendChild(email)
  form.appendChild(password)
  form.appendChild(confpassword)
  form.appendChild(subButton)

subButton.addEventListener("click", function (event) {
   event.preventDefault();
   var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(! pattern.test(email.value)){
        email.setAttribute("placeholder", "Please enter a valid email address.");
        email.style.borderColor = "red";
        return false;
    }else{
    email.style.borderColor="gray";
    } 

     if(password.value!==confpassword.value){
    password.setAttribute("placeholder", "Passwords don't match");
     confpassword.setAttribute("placeholder", "Passwords don't match");
     alert("Passwoords don't match ")
    }else {password.style.borderColor = "gray"; // Reset border color for valid input
    confpassword.style.borderColor = "gray"; // Reset border color for valid input
  }
    alert("Success")
});

let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'red';
  });

  input.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = ''; 
  });
});
