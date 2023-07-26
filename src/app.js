import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
  console.log("pls");
};
let excuseGenerator = () => {
  let who = [
    "The dog",
    "Some old person",
    "His turtles",
    "My birds",
    "My hamsters",
    "A group of sneaky crabs",
    "Someone that kind of looked like Danny Devito"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "took",
    "stole",
    "posted on e-bay",
    "sold",
    "exploted",
    "gave away",
    "did something I can't quite explain cause you'd think I'm insane to"
  ];
  let what = [
    "my homework",
    "my keys",
    "my car",
    "my wallet",
    "my house",
    "my lunch box",
    "my wig",
    "my left shoe while I was wearing it",
    "my lucky gloves"
  ];
  let when = [
    "before the class",
    "a few minutes ago",
    "when I woke up",
    "during my lunch",
    "while I was praying",
    "in my sleep",
    "last night",
    "yesterday",
    "3 hour ago",
    "when I was in the supermarket",
    "when I was getting coffee",
    "when I was with my dealer"
  ];
  let who2 = [
    "I",
    "a group of topless cops",
    "me and 3 dogs",
    "some lady",
    "me and my mom"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  let who2Index = Math.floor(Math.random() * who2.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    ", and " +
    who2[who2Index] +
    " had to chase them down the street."
  );
};
