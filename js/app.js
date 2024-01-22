let dayElem = document.querySelector(".day");
let hourElem = document.querySelector(".hour");
let minuteElem = document.querySelector(".minute");
let secondElem = document.querySelector(".second");

let counter = () => {
  let examenDay = new Date("2024-02-10T08:00:00");
  let hozir = new Date();
  let qolganVaqt = examenDay - hozir;

  let qolganSekund = parseInt((qolganVaqt / 1000) % 60);
  let qolganMinut = parseInt((qolganVaqt / 1000 / 60) % 60);
  let qolganSoat = parseInt((qolganVaqt / 1000 / 60 / 60) % 24);
  let qolganKun = parseInt(qolganVaqt / 1000 / 60 / 60 / 24);

  dayElem.textContent = qolganKun.toString(10).padStart(2, "0");
  hourElem.textContent = qolganSoat.toString(10).padStart(2, "0");
  minuteElem.textContent = qolganMinut.toString(10).padStart(2, "0");
  secondElem.textContent = qolganSekund.toString(10).padStart(2, "0");
};
counter();
setInterval(counter, 1000);
