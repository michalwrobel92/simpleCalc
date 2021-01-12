"use strict";

let button = "";

document.querySelector(".add").addEventListener("click", function () {
  const a = parseInt(document.getElementById("numA").value);
  const b = parseInt(document.getElementById("numB").value);
  document.querySelector("#value").textContent = a + b;
});

document.querySelector(".substract").addEventListener("click", function () {
  const a = parseInt(document.getElementById("numA").value);
  let b = parseInt(document.getElementById("numB").value);
  document.querySelector("#value").textContent = a - b;
});

document.querySelector(".multiply").addEventListener("click", function () {
  const a = parseInt(document.getElementById("numA").value);
  const b = parseInt(document.getElementById("numB").value);
  document.querySelector("#value").textContent = a * b;
});

document.querySelector(".divide").addEventListener("click", function () {
  const a = parseInt(document.getElementById("numA").value);
  const b = parseInt(document.getElementById("numB").value);
  if (b === 0) {
    window.alert("Seriously man, dividing by zero?");
  }
  document.querySelector("#value").textContent = a / b;
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector("#numA").value = "";
  document.querySelector("#numB").value = "";
  document.querySelector("#value").textContent = "=";
});
