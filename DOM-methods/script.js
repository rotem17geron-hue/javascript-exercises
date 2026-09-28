const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


//a <p> with red text that says “Hey I’m red!”

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I’m red!"
paragraph.style.color = "red";
container.appendChild(paragraph);


const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.background = "blue";

});