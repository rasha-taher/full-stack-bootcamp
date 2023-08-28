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
 
  
  //step 2
  function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
          resolve("Data fetched successfully!");
        } else {
          reject("Network Error!");
        }
      }, 3000);
    });
  }
  
  simulateNetworkRequest()
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    async function fetchSinglePost() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched post:", data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    
    fetchSinglePost();
    
  
  
  