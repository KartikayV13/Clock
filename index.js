let hr = document.querySelector("#hrs");
let mn = document.querySelector("#min");
let sc = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  //Digital Clock

  let hour = document.querySelector("#hours");
  let minute = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let ampm = document.querySelector("#ampm");

  let day1 = new Date();
  let h = day1.getHours();
  let m = day1.getMinutes();
  let s = day1.getSeconds();

  var am = h >= 12 ? "PM" : "AM";

  //convert 24 hrs to 12 hrs
  if (h > 12) {
    h = h - 12;
  }
  //Add zero before single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});
