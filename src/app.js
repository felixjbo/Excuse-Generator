/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function() {
  function excuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let whoN = who[Math.floor(Math.random() * who.length) + 1];
    let actionN = action[Math.floor(Math.random() * who.length) + 1];
    let whatN = what[Math.floor(Math.random() * what.length) + 1];
    let whenN = when[Math.floor(Math.random() * when.length) + 1];

    return whoN + " " + actionN + " " + whatN + " " + whenN;
  }
};
