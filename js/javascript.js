/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let button01 = document.querySelector(".button01");
let button02 = document.querySelector(".button02");
let button03 = document.querySelector(".button03");

let video01 = document.querySelector(".video01");
let video02 = document.querySelector(".video02");

button01.addEventListener('click', function() {
  video01.classList.remove("hidden");
  video02.classList.add("hidden")
});

button02.addEventListener('click', function() {
  video01.classList.add("hidden");
  video02.classList.remove("hidden")
});
