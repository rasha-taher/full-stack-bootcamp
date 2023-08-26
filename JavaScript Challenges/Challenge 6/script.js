//Step 1 
setTimeout(function() { console.log("Hello after 5 seconds!"); }, 5000); 

let htext=document.createElement('h1');
document.body.appendChild(htext)
htext.textContent="Digital Clock"

let pclock= document.createElement('p')
document.body.appendChild(pclock)

function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    pclock.textContent = timeString;
  }
  
  // Initial call to update the clock
  updateClock();
  
  // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);
  

  let p=new Promise((resolve)=>{
    setTimeout(function() {resolve("Promise resolved ");}, 2000);
  });

  p.then(message=>{
    alert(message); // Alert: Promise resolved!
    return "Chained message!";
  }).then((chainedMessage) => {
    console.log(chainedMessage); // Output: Chained message!
  }).catch((error) => {
    console.log("Error:", error);
  });
 
  
  
  
  
  