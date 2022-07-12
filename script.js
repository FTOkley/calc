// const display = document.querySelector("#display");
const input = document.querySelectorAll("input");
let value = "";
var themeA = document.querySelector("#first");
var themeB = document.querySelector("#second");
var themeC = document.querySelector("#third");
// var screen = document.querySelector("#display");
// var answer = document.querySelector(".row");
var keys = document.querySelectorAll(".key");
var screen = document.getElementById("display");
var backMain = document.getElementsByTagName("body");
var backToggle = document.getElementsByClassName("switchbox");
var backKeypad = document.getElementsByClassName("keypads");
var backDisplay = document.getElementsByClassName("display");
var backKey = document.getElementsByClassName("key");
var text = document.getElementsByClassName("name");

var calcBody = document.getElementsByClassName("calculator");
var answers = document.getElementById("answer");
var reset = document.getElementById("reset");
var del = document.getElementById("del");

//   switchBtn.addEventListener("click", () => {
//     //console.log('toggle theme');
//     if (switchBtn.checked == true) {
//       document.body.setAttribute("data-theme", "dark");
//     } else {
//       document.body.setAttribute("data-theme");
//     }
//     //console.log(switchBtn.checked);
//   });
//console.log(input);
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
    // if (!event.target.classList.contains("switch")) {
    //   event, target.classList.add("active");
    //   setTimeout(() => {
    //     event.target.classList.remove("active");
    //   }, 400);
    // }
  });
});

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
      console.log((screen.style["backgroundColor"] = "hsl(224, 36%, 15%)"));
      console.log((screen.style["color"] = "hsl(0, 0, 100%)"));

      keys.forEach((key) => {
        key.style.backgroundColor = "hsl(30, 25%, 89%)";
      });

      keys.forEach((key) => {
        key.style.color = "hsl(221, 14%, 31%)";
      });

      keys.forEach((key) => {
        key.style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
      });

      answers.style["boxShadow"] = "0 5px hsl(6, 70%, 34%)";
      console.log((answers.style["backgroundColor"] = "hsl(6, 63%, 50%)"));
      console.log((answers.style["color"] = "hsl(198, 20%, 13%)"));

      reset.style["boxShadow"] = "0 5px hsl(224, 28%, 35%)";
      reset.style["backgroundColor"] = "hsl(225, 21%, 49%)";

      del.style["boxShadow"] = "0 5px hsl(224, 28%, 35%)";
      del.style["backgroundColor"] = "hsl(225, 21%, 49%)";

      /*
      backMain[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      calcBody[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      backToggle[0].style.backgroundColor = "hsl(223, 31%, 20%)";
      backKeypad[0].style.backgroundColor = "hsl(223, 31%, 20%)";
      // screen[0].style.backgroundColor = "hsl(224, 36%, 15%)";
      // backKey[0].style.backgroundColor = "hsl(223, 31%, 20%)";
      
      keys.forEach(key => {
        key.style.backgroundColor = "hsl(30, 25%, 89%)";
      });




      
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(222, 26%, 31%)";

      //calculator background
      document.getElementsByClassName("calculator")[0].style.backgroundColor =
        "hsl(222, 26%, 31%)";

      //switch background
      document.getElementsByClassName("switchbox")[0].style.backgroundColor =
        "hsl(223, 31%, 20%)";

      //key Shadow
      document.getElementsByClassName("key")[0].style.boxShadow =
        "hsl(285, 91%, 52%)";

      //screen background
      document.getElementsByClassName("display")[0].style.backgroundColor =
        "hsl(222, 26%, 31%)";

      //key background
      document.getElementsByClassName("keypads")[0].style.backgroundColor =
        "hsl(223, 31%, 20%)";

      // //key shadow
      // document.getElementsByClassName("key")[0].style.boxShadow =
      //   "hsl(285, 91%, 52%)";

      //dispay background
      document.getElementById("display")[0].style.backgroundColor =
        "hsl(0, 36%, 15%)";
        */
    } else if (index == 1) {
      backMain[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      calcBody[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      backToggle[0].style.backgroundColor = "hsl(0, 5%, 81%)";
      backKeypad[0].style.backgroundColor = "hsl(0, 5%, 81%)";
      backKey[0].style.backgroundColor = "hsl(281, 89%, 26%)";
      console.log((screen.style["backgroundColor"] = "hsl(0, 0%, 93%)"));
      console.log((screen.style["color"] = "hsl(60, 10%, 19%)"));

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
      console.log((answers.style["backgroundColor"] = "hsl(25, 98%, 40%)"));
      console.log((answers.style["color"] = "hsl(198, 20%, 13%)"));

      reset.style["boxShadow"] = "0 5px hsl(185, 58%, 25%)";
      reset.style["backgroundColor"] = "hsl(185, 42%, 37%)";

      del.style["boxShadow"] = "0 5px hsl(185, 58%, 25%)";
      del.style["backgroundColor"] = "hsl(185, 42%, 37%)";

      // document.getElementsByTagName("body")[0].style.backgroundColor ="hsl(0, 0%, 90%)";
      /*
        backMain[0].style.backgroundColor = "hsl(0, 0%, 90%)";
        calcBody[0].style.backgroundColor = "hsl(0, 0%, 90%)";
        backToggle[0].style.backgroundColor = "hsl(0, 5%, 81%)";
        backKeypad[0].style.backgroundColor = "hsl(0, 5%, 81%)";
        backKey[0].style.backgroundColor = "hsl(0, 5%, 81%)";
        
        keys.forEach(key => {
          key.style.backgroundColor = "hsl(45, 7%, 89%)";
        });
  

      //calculator background
      document.getElementsByClassName("calculator")[0].style.backgroundColor =
        "hsl(0, 0%, 90%)";
      //switch background
      document.getElementsByClassName("switchbox")[0].style.backgroundColor =
        "hsl(0, 5%, 81%)";

      //screen background
      document.getElementsByClassName("display")[0].style.backgroundColor =
        "hsl(268, 71%, 12%)";

      //key background
      document.getElementsByClassName("keypads")[0].style.backgroundColor =
        "hsl(0, 5%, 81%)";
      //key Shadow
      document.getElementsByClassName("key")[0].style.boxShadow =
        "hsl(285, 91%, 52%)";
        */
    } else {
      // console.log( document.getElementsByTagName("body")[0].style.backgroundColor ="hsl(268, 75%, 9%)");

      //backKeypad[0].style.backgroundColor = "hsl(268, 71%, 12%)";

      // keys.style["boxShadow"] = "10px 10px hsl(177, 92%, 70%)"
      //  themeC[0].style.color = "hsl(268, 71%, 12%)";
      //  themeC[0].style.opacity = "1";
      backMain[0].style.backgroundColor = "hsl(268, 75%, 9%)";
      calcBody[0].style.backgroundColor = "hsl(268, 75%, 9%)";
      backToggle[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      backKeypad[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      backKey[0].style.backgroundColor = "hsl(281, 89%, 26%)";
      console.log((screen.style["backgroundColor"] = "hsl(268, 71%, 12%"));
      console.log((screen.style["color"] = "hsl(52, 100%, 62%)"));

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

      // console.log( text.style.color = "hsl(52, 100%, 62%)");

      /*
      
      //calculator background
      document.getElementsByClassName("calculator")[0].style.backgroundColor = "hsl(268, 75%, 9%)";

      //toggle, keypad background
     console.log( document.getElementsByClassName('switchbox')[0].style.backgroundColor = "hsl(268, 71%, 12%)");
     ;
     
      //text color
      document.getElementsByClassName("key")[0].style.color = "hsl(52, 100%, 62%)"; 
      
      //keypads backgroud
      document.querySelector(".keypads",'.switchbox', "#sdisplay")[0].style.backgroundColor="hsl(268, 71%, 12%)"

      
      //key color
    //  console.log(document.getElementsByClassName("key")[0].style.backgroundColor = "hsl(268, 47%, 21%)");

     const boxes = document.querySelectorAll('.key');
     */
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
