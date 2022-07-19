// const display = document.querySelector("#display");
const input = document.querySelectorAll("input");
let value = "";
let themeA = document.querySelector("#first");
let themeB = document.querySelector("#second");
let themeC = document.querySelector("#third");

let keys = document.querySelectorAll(".key");
let screen = document.getElementById("display");
let backMain = document.getElementsByTagName("body");
let backToggle = document.getElementsByClassName("switchbox");
let backKeypad = document.getElementsByClassName("keypads");
let backDisplay = document.getElementsByClassName("display");
let backKey = document.getElementsByClassName("key");

let calcBody = document.getElementsByClassName("calculator");
let answers = document.getElementById("answer");
let reset = document.getElementById("reset");
let del = document.getElementById("del");

hover = document.querySelectorAll("div");
let txt = document.getElementById("name", "theme", "number");
let numb = document.getElementById("number");
let toggle = document.getElementById("theme");

// backKeypad.addEventListener("mouseover", mouseon);

// backKeypad.addEventListener("mouseleave", mouseoff);

input.forEach((e) => {
  e.addEventListener("click", (event) => {
    if (event.target.value == "=") {
      if (value.length != 0) {
        let newVal = eval(value);
        value = newVal;
        display.value = value;
      }
    } else if (event.target.value == "RESET") {
      value = "";
      display.value = value;
    } else if (event.target.value == "DEL") {
      value = "";
      display.value = display.value.replace(/\d$/, "");
      //console.log(display.value);
    } else if (event.target.value == "on") {
    } else {
      value += event.target.value;
      display.value = value;
    }
  });
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

//Toggle switching by backgound color////
var buttons = document.querySelectorAll(".button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      backMain[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      calcBody[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      backToggle[0].style.backgroundColor = "hsl(223, 31%, 20%)";
      backKeypad[0].style.backgroundColor = "hsl(223, 31%, 20%)";
      backKey[0].style.backgroundColor = "hsl(281, 89%, 26%)";

      //Texts and text areas
      screen.style["backgroundColor"] = "hsl(224, 36%, 15%)";
      screen.style["color"] = "white";
      txt.style["color"] = "white";
      numb.style["color"] = "white";
      toggle.style["color"] = "white";

      //keypads
      keys.forEach((key) => {
        key.style.backgroundColor = "hsl(30, 25%, 89%)";
      });

      keys.forEach((key) => {
        key.style.color = "hsl(221, 14%, 31%)";
      });

      keys.forEach((key) => {
        key.style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
      });

/*
      ///do the mouse hover on keys
      hover.addEventListener("mouseenter", mouseon());

      function mouseon() {
        console.log((backKey.style.color = "black"));
      };
      */

      answers.style["boxShadow"] = "0 5px hsl(6, 70%, 34%)";
      answers.style["backgroundColor"] = "hsl(6, 63%, 50%)";
      answers.style["color"] = "hsl(198, 20%, 13%)";

      reset.style["boxShadow"] = "0 5px hsl(224, 28%, 35%)";
      reset.style["backgroundColor"] = "hsl(225, 21%, 49%)";

      del.style["boxShadow"] = "0 5px hsl(224, 28%, 35%)";
      del.style["backgroundColor"] = "hsl(225, 21%, 49%)";
    } else if (index == 1) {
      //main backgrounds
      backMain[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      calcBody[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      backToggle[0].style.backgroundColor = "hsl(0, 5%, 81%)";
      backKeypad[0].style.backgroundColor = "hsl(0, 5%, 81%)";
      backKey[0].style.backgroundColor = "hsl(281, 89%, 26%)";

      //texts and text areas
      screen.style["backgroundColor"] = "hsl(0, 0%, 93%)";
      screen.style["color"] = "hsl(60, 10%, 19%)";
      txt.style["color"] = "hsl(60, 10%, 19%)";
      numb.style["color"] = "hsl(60, 10%, 19%)";
      toggle.style["color"] = "hsl(60, 10%, 19%)";

      //keypads
      keys.forEach((key) => {
        key.style.backgroundColor = "hsl(45, 7%, 89%)";
      });
      keys.forEach((key) => {
        key.style.color = "hsl(60, 10%, 19%)";
      });
      keys.forEach((key) => {
        key.style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
      });

      answers.style["boxShadow"] = "0 5px hsl(25, 99%, 27%)";
      answers.style["backgroundColor"] = "hsl(25, 98%, 40%)";
      answers.style["color"] = "hsl(198, 20%, 13%)";

      reset.style["boxShadow"] = "0 5px hsl(185, 58%, 25%)";
      reset.style["backgroundColor"] = "hsl(185, 42%, 37%)";

      del.style["boxShadow"] = "0 5px hsl(185, 58%, 25%)";
      del.style["backgroundColor"] = "hsl(185, 42%, 37%)";
    } else {
      //Main Backgrounds
      backMain[0].style.backgroundColor = "hsl(268, 75%, 9%)";
      calcBody[0].style.backgroundColor = "hsl(268, 75%, 9%)";
      backToggle[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      backKeypad[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      backKey[0].style.backgroundColor = "hsl(281, 89%, 26%)";

      //Texts and text areas
      screen.style["backgroundColor"] = "hsl(268, 71%, 12%)";
      screen.style["color"] = "hsl(52, 100%, 62%)";
      txt.style["color"] = "hsl(52, 100%, 62%)";
      toggle.style["color"] = "hsl(52, 100%, 62%)";
      numb.style["color"] = "hsl(52, 100%, 62%)";

      //Keypads
      keys.forEach((key) => {
        key.style.backgroundColor = "hsl(268, 47%, 21%)";
      });

      keys.forEach((key) => {
        key.style.color = "hsl(52, 100%, 62%)";
      });

      keys.forEach((key) => {
        key.style.boxShadow = "0px 5px hsl(285, 91%, 52%)";
      });

      answers.style["boxShadow"] = "0 5px hsl(177, 92%, 70%)";
      console.log((answers.style["backgroundColor"] = "hsl(176, 100%, 44%)"));
      console.log((answers.style["color"] = "hsl(198, 20%, 13%)"));

      reset.style["boxShadow"] = "0 5px hsl(285, 91%, 52%)";
      reset.style["backgroundColor"] = "hsl(281, 89%, 26%)";

      del.style["boxShadow"] = "0 5px hsl(285, 91%, 52%)";
      del.style["backgroundColor"] = "hsl(281, 89%, 26%)";
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
