const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);

//getting time info from date object

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

//so 60 unit in clock = 360 degree
//1 unit = 36/6 = 6 degree


// angle in degree (0 to 360)
let hrPosition = (hr * 360 / 12) + (min * 6 / 12);
//so that hour moves along with
//minute passing degree by degree
let minPosition = (min * 6) + (sec * 6 / 60);
//so that minute moves along with
//second passing degree by degree
let secPosition = sec * 6;

function runClock() {
  //WindowOrWorkerGlobalScope.setInterval() method
  //https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
  secPosition = secPosition+6; // updating the sec hand
  minPosition = (minPosition+ (6/60))
  hrPosition = hrPosition+(3/360);

  //put values in css
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
  //WindowOrWorkerGlobalScope.setInterval() method
var interval = setInterval(runClock, 1000);
