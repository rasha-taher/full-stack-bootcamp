// Step 1

//DOM Tree Navigation

let menu = document.querySelector(".menu");
let head = document.querySelector("header");
let foot = document.querySelector("footer");

console.log(menu.children);
console.log(head.children);
console.log(foot.children);

//DOM Element Creation
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "container");
document.body.appendChild(newDiv);

let newpara = document.createElement("p");
newDiv.appendChild(newpara);

newDiv.classList.add("newpara");
newpara.textContent = "Hello, World!";

//Element Styling
let cont = document.getElementsByClassName("container");

for (let i = 0; i < cont.length; i++) {
  cont[i].style.backgroundColor = "blue";
}

newpara.style.color = "white";
newpara.style.fontSize = "24px";
newpara.style.fontFamily = "Helvetica";
newpara.style.border = "1px solid black";

const headingTags = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

headingTags.forEach((heading) => {
  heading.style.fontStyle = "italic";
});

// Step 2

//Multiple Event Listeners

let newButton = document.createElement("button");
newButton.setAttribute("class", "changingColor");
newButton.textContent = "Click Me!";

newButton.style.width = "100px";
newButton.style.height = "50px";

document.body.appendChild(newButton);

newButton.addEventListener("mouseover", function () {
  newButton.style.backgroundColor = "red";
});

newButton.addEventListener("mouseout", function () {
  newButton.style.backgroundColor = "white";
});

//Event Delegation
//  let ori= document.getElementById('original');
//  let buttons=document.getElementsByClassName('button');
// buttons.addEventListener("click", function() {
//      ori.textContent= buttons.textContent;
// });

const originDiv = document.getElementById("original");

// Add event listener to the container
originDiv.addEventListener("click", function (event) {
  // Check if the clicked element is a button
  if (event.target.tagName === "BUTTON") {
    // Log the text content of the clicked button
    console.log("Clicked button:", event.target.textContent);
  }
});

//Form Data Extraction

let form = document.createElement("form");
document.body.appendChild(form);

let nameLabel = document.createElement("label");
let nameBox = document.createElement("input");
nameBox.type = "text";
nameBox.setAttribute("class", "name");
nameLabel.textContent = "Name: ";
form.appendChild(nameLabel);
form.appendChild(nameBox);

let emailLabel = document.createElement("label");
let emailBox = document.createElement("input");
emailBox.type = "email";
emailBox.setAttribute("class", "email");
emailLabel.textContent = "Email: ";
form.appendChild(emailLabel);
form.appendChild(emailBox);

let subButton = document.createElement("button");
subButton.textContent = "Submit";
form.appendChild(subButton);

//Step 3

// DOM Cloning

let originalDiv = document.createElement("div");
originalDiv.setAttribute("id", "original");
originalDiv.style.display = "none";
document.body.appendChild(originalDiv);

let paragraph = document.createElement("p");
paragraph.textContent = "This is a paragraph.";
originalDiv.appendChild(paragraph);

let ul = document.createElement("ul");
originalDiv.appendChild(ul);

let li1 = document.createElement("li");
li1.textContent = "Item 1";
let li2 = document.createElement("li");
li2.textContent = "Item 2";
let li3 = document.createElement("li");
li3.textContent = "Item 3";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

let clonebtn = document.querySelector("#clone-btn");
clonebtn.addEventListener("click", function () {
  if ((originalDiv.style.display = "none")) originalDiv.style.display = "block";
  else originalDiv.style.display = "none;";
});


// Element Removal

let removeButton = document.createElement("button");
removeButton.setAttribute("class", "removes");
removeButton.textContent = "Remove Header";
removeButton.style.width = "200px";
removeButton.style.height = "50px";
document.body.appendChild(removeButton);

removeButton.addEventListener("click", function () {
  if (head) {
    head.style.display = "none";
  }
});

//Inserting Elements

function insertBeforeFooter() {
  const newElement = document.createElement("div");
  newElement.textContent = "New Element Inserted";

  const footer = document.querySelector("footer");
  if (footer) {
    footer.insertAdjacentElement("beforebegin", newElement);
  }
}
