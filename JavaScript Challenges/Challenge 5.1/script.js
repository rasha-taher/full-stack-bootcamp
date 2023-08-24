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
      const currentLeft = parseInt(getComputedStyle(htext).left) || 0;
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
  
  
  
  
