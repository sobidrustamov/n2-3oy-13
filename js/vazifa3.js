document.querySelector("body").addEventListener("dblclick", (e) => {
  let div = document.createElement("div");
  let x = e.clientX;
  let y = e.clientY;
  div.classList.add("sticky");
  div.style.left = x + "px";
  div.style.top = y + "px";
  document.body.append(div);
  let span = document.createElement("span");
  span.classList.add("delete");
  span.textContent = "x";
  div.append(span);
  div.addEventListener("click", (e) => {
    let p = document.createElement("p");
    div.append(p);
    // p.innerHTML = "fvd";
    p.style.width = "90%";
    p.style.height = "100%";
    p.setAttribute("contenteditable", true);
  });
  span.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});
