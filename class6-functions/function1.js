console.log(age);
app();

function app() {
  let age = 43;
  alert("My first JavaScript");
}

let frmFunction = function () {
  alert("from function statment");
};

frmFunction = () => alert("from function statment");
frmFunction();

greet = (theName) => alert("Hello " + theName);
greet("Alabi");

const double = (no) => 2 * no;
const triple = (no) => 3 * no;
const square = (no) => no * no;

function evaluate(no, calculate) {
  console.log(calculate(no));
}

const evaluate = (no, calculate) => console.log(calculate(no));

evaluate(10, square);
