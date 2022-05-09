let keeper = "";
let centralDefender = "";

let team = ["de g", "harry m", "elanga", ""];

console.log(team[0]);

let urName = "Alabi A.";
let age = 46;
let isMarried = true;
let dateOfDeath = undefined;

let me = ["Alabi A", 46, true];
me[5] = null;
/* console.log(`My name is ${me[0]} I am ${me[1]} old`);
console.log(me); */

/* const officeOfYarAdua = ["governor", "president"];
officeOfYarAdua[0] = "sug president";
console.log(officeOfYarAdua);
 */

let cars = [];
cars[3] = "Camry";
console.log(cars);

const exam = [
  ["Who is the President of Nigeria?", "Alabi", "Adebayo", "Kolade", "Alabi"],
  ["Who is the President of USA", "Buhari", "Tunde", "Biden", "Biden"],
  ["Who is the President of Ghana", "Kofo", "Guy", "Nana", "Nana"],
  ["Who is the President of South Africa", "Kofo", "Buhari", "Cyril", "Cyril"],
  ["Who is the President of UK", "Theresa", "Johnson", "Cyril", "Johnson"],
];

let question = "";

question +=`

1). ${exam[0][0]}<br>
(a) ${exam[0][1]} &nbsp;(b) ${exam[0][2]}&nbsp;(c) ${exam[0][3]}<br><br>

2). ${exam[1][0]}<br>
(a) ${exam[1][1]} &nbsp;(b) ${exam[1][2]} &nbsp;(c) ${exam[1][3]}<br><br>

3). ${exam[2][0]}<br>
(a) ${exam[2][1]} &nbsp;(b) ${exam[2][2]} &nbsp;(c) ${exam[2][3]}<br><br>

4). ${exam[3][0]}<br>
(a) ${exam[3][1]} &nbsp;(b) ${exam[3][2]} &nbsp;(c) ${exam[3][3]}<br><br>

5). ${exam[4][0]}<br>
(a) ${exam[4][1]} &nbsp;(b) ${exam[4][2]} &nbsp;(c) ${exam[4][3]}<br><br>
`
  document.write(question);