let menu = document.getElementsByClassName("menu");
let head = document.getElementsByTagName("header");
let foot = document.getElementsByTagName("footer");

let newDiv = document.createElement('div');
newDiv.setAttribute('class', 'container');
document.body.appendChild(newDiv);

let newpara = document.createElement('p');
newDiv.appendChild(newpara); 

newDiv.classList.add('newpara');
newpara.textContent = "Hello, World!"; 

let cont = document.getElementsByClassName("container");

for (let i = 0; i < cont.length; i++) {
    cont[i].style.backgroundColor = "blue";
}

newpara.style.color = "white";
newpara.style.fontSize = "24px";
newpara.style.fontFamily = "Helvetica";
newpara.style.border = "1px solid black";

const headingTags = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

headingTags.forEach(heading => {
    heading.style.fontStyle = "italic";
});
