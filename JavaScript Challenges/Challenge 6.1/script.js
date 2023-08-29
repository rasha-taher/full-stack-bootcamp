//step 1

function delay(milliseconds) {
    const delayingPromise = new Promise((resolve) => {
      setTimeout(()=>{
        resolve("done")}
        , milliseconds);
    })
    return delayingPromise;
  }

  //step 2
  function fetchRandomFact() {
    return fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => data.text)
      .catch(error => {
        console.error("Error fetching random fact:", error);
      });
  }
  
  fetchRandomFact().then(fact => {
    console.log("Random Fact:", fact);
  });

//step 3
async function fetchRandomFactWithAsync() {
    try {
      let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      let data = await response.json();
      return data.text;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  
  fetchRandomFactWithAsync().then(fact => {
    console.log("Random Fact:", fact);
  });