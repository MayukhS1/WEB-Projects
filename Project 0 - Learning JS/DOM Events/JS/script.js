const CTA = document.querySelector(".cta a")
const ALERT = document.getElementById('booking-alert')

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, current) { //event object
  e.preventDefault();
  (current.innerHTML == "Book Now!") ? current.innerHTML = "Ooops!" : current.innerHTML = "Book Now!";
  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

//CTA.onclick = reveal;
//instead we can use addEventListener
CTA.addEventListener("click", function(e){ reveal(e, this ); }, false);
//last paprameter is about bubbling
//can add multiple function as Well
CTA.addEventListener("click", function() {
  console.log("Another Thing Happened");
}, false);
