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