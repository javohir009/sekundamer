"use strict";

var body = document.querySelector("body");
var spinner = document.querySelector(".lds-spinner");
var title = document.querySelector(".h1");
var plus = document.querySelector(".plus");
var stop = document.querySelector(".stop");
var restart = document.querySelector(".restart");
window.addEventListener("DOMContentloaded", function () {
  setTimeout(function () {
    spinner.style.display = "none";
  }, 2000);
});
stop, plus.addEventListener("click", function () {
  var a = 0;
  var repeat = restart.addEventListener("click", function () {
    title.textContent = "00";
  });
  var interval = setInterval(function () {
    title.textContent = ++a;
  }, 100);
  stop.addEventListener("click", function () {
    setTimeout(function () {
      clearInterval(interval);
    });
  });
});