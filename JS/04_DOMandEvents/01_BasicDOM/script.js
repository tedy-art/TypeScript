let heading = document.getElementById("title");
let button = document.getElementsByClassName("btn");
let allparagraph = document.getElementsByTagName("p");

// Morden way
let heading2 = document.querySelector("#title");
let allButton = document.querySelectorAll("button");

// Change text
heading.textContent = "Welcome Tejas!";

// Change style
heading.style.color = "blue";
heading.style.fontSize = "30px";
