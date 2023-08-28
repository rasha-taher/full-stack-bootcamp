// step 1

let container =document.createElement('div')
container.setAttribute('class',"container")
document.body.appendChild(container);

let loginContainer =document.createElement('div')
loginContainer.setAttribute('class',"login__container")
container.append(loginContainer)

let loginSignIn =document.createElement('div')
loginSignIn.setAttribute('class',"login__signin")
loginContainer.append(loginSignIn)

let loginSignInNow =document.createElement('div')
loginSignInNow.setAttribute('class',"login__signin-now")
loginSignIn.append(loginSignInNow)

let h1text = document.createElement('h1')
h1text.textContent="Sign up NOW!";
loginSignInNow.append(h1text);

let h3text = document.createElement('h3')
h3text.textContent="Enter your details";
loginSignInNow.append(h3text)

let form= document.createElement('form')
loginSignInNow.append(form);

let label1= document.createElement('label')
label1.textContent="Email"
form.append(label1)

let inputField = document.createElement('input')
inputField.setAttribute('class', 'input-field')
inputField.type='email'
inputField.placeholder="email"
inputField.required='required';

label1.append(inputField);


let label2= document.createElement('label')
form.append(label2)
label2.textContent="Password"

let inputField2 = document.createElement('input')
inputField2.setAttribute('class','input-field')
inputField2.type='password'
inputField2.placeholder="Password"
inputField2.required='required';

label2.append(inputField2);

let label3= document.createElement('label')
label3.textContent="Confirm Password"
form.append(label3)


let inputField3 = document.createElement('input')
inputField3.setAttribute('class','input-field')
inputField3.type='password'
inputField3.placeholder="Confirm Password"
inputField3.required='required';

label3.append(inputField3);

let fillButton = document.createElement('button')
form.append(fillButton)
fillButton.setAttribute('class', 'filled-btn')
fillButton.setAttribute('id', "submit-btn")
fillButton.textContent="Submit";


fillButton.addEventListener('click', function(){
    if(inputField2.value!==inputField3.value){
        let errorMessage= document.createElement('h4')
        form.insertBefore(errorMessage, fillButton.nextSibling)
        console.log('error')
    }else {
        window.location.href = "quotes.html";
    }
} )

