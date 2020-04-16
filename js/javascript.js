/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/




let button01 = document.querySelector(".button01");
let button02 = document.querySelector(".button02");
let button03 = document.querySelector(".button03");

let video01 = document.querySelector(".video01");
let video02 = document.querySelector(".video02");
let video03 = document.querySelector(".video03");

let loader = document.querySelector(".videoloading");
setTimeout(function() {
  loader.classList.add("hidden");
}, 4000)

let intro = document.querySelector(".videointro");
setTimeout(function() {
  intro.classList.add("hidden");
}, 9000)







button01.addEventListener('click', function() {
  video01.classList.remove("hidden");
  video02.classList.add("hidden");
  video03.classList.add("hidden");

  video01.load();
  video02.pause();
  video03.pause();
});

button02.addEventListener('click', function() {
  video01.classList.add("hidden");
  video02.classList.remove("hidden");
  video03.classList.add("hidden");

  video02.load();
  video01.pause();
  video03.pause();
});

button03.addEventListener('click', function() {
  video01.classList.add("hidden");
  video02.classList.add("hidden");
  video03.classList.remove("hidden");

  video01.pause();
  video02.pause();
  video03.load();
});




let buttons = document.querySelectorAll("img");

let currenticon = ""

buttons.forEach(button => button.addEventListener('click', function(e) {
  let currenttarget = e.currentTarget.dataset.button;

  if (currenticon == "") {
    currenticon = currenttarget;
  }

  console.log(currenticon, currenttarget)

  if (currenticon == "icon1" && currenttarget == "icon3") {
    currenticon = "icon3";
    video03.src = "media/03verliefdv2.mp4"

    console.log("test")
  }
}))






button01.addEventListener('mouseover', function() {
  button01.src = "media/icoon1hoverb.gif";
});

button01.addEventListener('mouseout', function() {
  button01.src = "media/icoon1b.gif";
});

button02.addEventListener('mouseover', function() {
  button02.src = "media/icoon2hoverb.gif";
});

button02.addEventListener('mouseout', function() {
  button02.src = "media/icoon2b.gif";
});

button03.addEventListener('mouseover', function() {
  button03.src = "media/icoon3hover.gif";
});

button03.addEventListener('mouseout', function() {
  button03.src = "media/icoon3b.gif";
});
