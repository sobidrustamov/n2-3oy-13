document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  let div = document.createElement("div");
  // div.classList.add("sticky");
  div.style.left = x + "px";
  div.style.top = y + "px";
  // document.body.append(div);
});
