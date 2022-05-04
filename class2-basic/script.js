const name = "Alabi A.";
let age;
const isMarried = true;
let occupation = "business owner";
age = 46;
let bankBalance = 1000;
let town = "Gbagada";

let sentence =
  "My name is " + name + ", I am a " + occupation + " and I live in " + town;

sentence = `My name is ${name}, I am a ${occupation} and I live in ${town}`;

console.log(sentence);
document.write(sentence);

//My name is Alabi, I am a web developer and I live in Ikeja

/* console.log(typeof age);
age = prompt();
console.log(typeof age); */

let price = 10;
console.log(price === "10");

let knowHTML = true;
!knowHTML;
