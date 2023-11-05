let form = document.querySelector("form");
let ball = document.querySelector(".ball");
let p = document.querySelector("p");
let list = [];
let text;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = e.target[0];
  text = input.value;
  if (!text) {
    alert("Input bosh bo'lmasligi kerak");
    return;
  }

  list.push(text);
  e.target.reset();
});

ball.addEventListener("click", () => {
  let a = Math.floor(Math.random() * list.length);
  p.classList.replace("large", "md");
  p.innerText = list[a];
  console.log(list[a]);
});
