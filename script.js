/*console.warn("don't drink");
console.error("this is an error");
console.warn(" don't fall for him");
console.time("for loop");
for (let i = 0; i < 500; i++) {
  console.log(233);
}
console.timeEnd("for loop");

console.time("while loop");
let i = 0;
while (i < 500) {
  console.log(233);
  i++;
}
console.timeEnd("while loop");

window.console.log(window);
console.log(document.body);
document.body.style.background = "cerulean";
*/
/*const changebodyred = () => {
  document.body.firstElementChild.Style.background = "red";
};*/

/*let b = document.body;
console.log("first child of b is: ", b.firstChild);
console.log("first element child of b is: ", b.firstelementChild);*/

let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.captions);
