const name = "Ayomiposi";
let age;
const isMarried = false;
let occupation = "web developer";
age = 52;
let bankBalance =undefined;
let town = "Magodo";


let sentence = `My name is ${name}, I am a ${occupation} and I live in ${town}`;


console.log(sentence);
document.write(sentence);

const exam =[
  ['Who is the President of Nigeria?','Alabi','Adebayo','Kolade','Alabi'],
  ['Who is the President of USA?','Buhari','Tunde','Biden','Biden'],
  ['Who is the President of Ghana?','Kofo','Guy','Nana','Nana'],
  ['Who is the President of South Africa?','Kofo','Buhari','Cyril','Cyril'],
  ['Who is the President of UK?','Theresa','Johnson','Cyril','johnson'],
];


const question = `
    1.${exam[0][0]}<br/>
    (a) ${exam[0][1]} (b) ${exam[0][2]} (C) ${exam[0][3]}
    <br/><br/>
    
    2.${exam[1][0]}<br/>
    (a) ${exam[1][1]} (b) ${exam[1][2]} (C) ${exam[1][3]}
    <br/><br/>
    
    31.${exam[2][0]}<br/>
    (a) ${exam[2][1]} (b) ${exam[2][2]} (C) ${exam[2][3]}
    <br/><br/>
    
    4.${exam[3][0]}<br/>
    (a) ${exam[3][1]} (b) ${exam[3][2]} (C) ${exam[3][3]}
    <br/><br/>
    

    5.${exam[4][0]}<br/>
    (a) ${exam[4][1]} (b) ${exam[4][2]} (C) ${exam[4][3]}
    <br/><br/>
      `
console.log(question);
document.write(question);

/*const exam =[
  ['Who is the President of Nigeria?','Alabi','Adebayo','Kolade','Alabi'],
  ['Who is the President of USA?','Buhari','Tunde','Biden','Biden'],
  ['Who is the President of Ghana?','Kofo','Guy','Nana','Nana'],
  ['Who is the President of South Africa?','Kofo','Buhari','Cyril','Cyril'],
  ['Who is the President of UK?','Theresa','Johnson','Cyril','johnson'],
];


let question = "";
let noOfQuestions = exam.length;
let kanter = 0;
while (kanter < noOfQuestions) {
  let increment = kanter + 1;
  question += `
  ${increment}), ${exam[kanter][0]}<br/>
  (a)${exam[kanter][1]} (b)${exam[kanter][2]} (C)${exam[kanter][3]}
  <br/><br/>
  `;

++kanter
}
 document.write(question);*/
