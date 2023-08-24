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
  
  function delayedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved!");
      }, 2000); // 2000 milliseconds (2 seconds)
    });
  }
  
  delayedPromise().then(message => {
    console.log(message); // Output: Promise resolved!
  }).catch(error => {
    console.error(error);
  });
  