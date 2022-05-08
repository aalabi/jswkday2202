// Assignment 1
let Urname = "Samuel Olaoluwa Akinyemi";
let occupation = "Digital Creator";
let town = "No 16, kunleshow street,  Ayobo, Ipaja Lagos,";
let age = "32 years old.";


// let sentence =
//   "My name is " + Urname + 
//   ", I am a " + occupation + 
//   ", <br></br> I live at " + town + 
//   " and I am " + age;

sentence = `<div class ="style1">My name is ${Urname}, I am a ${occupation}, <br></br> I live at ${town} <br></br> and I am ${age}</div> `;

console.log(sentence);
document.write(sentence);


// Assignment 2 (CBT question format)
const exam = [
    ["Who is the President of Nigeria?", "Olaoluwa", "Adebayo", "Kolade", "Alabi", "Olaoluwa"],
    ["Who is the President of USA", "Buhari", "Tunde", "Biden", "Alabi", "Biden"],
    ["Who is the President of Ghana", "Kofo", "Guy", "Nana", "Alabi", "Nana"],
    ["Who is the President of South Africa", "Kofo", "Buhari", "Olaoluwa", "Cyril", "Cyril"],
    ["Who is the Prime Minister of UK", "Theresa", "Johnson", "Cyril", "Olaoluwa", "Johnson"],
  ];

  const question = ` <hr class= "hr">
  <h2 class="style2"> Current Affairs Questions </h2>
 <div class="style3"> 1. ${exam[0][0]}<br/>
  (a) ${exam[0][1]} (b) ${exam[0][2]} (c) ${exam[0][3]} (d) ${exam[0][4]} 
  <br><br/> </div>

  <div class="style4"> 2. ${exam[1][0]}<br/>
  (a) ${exam[1][1]} (b) ${exam[1][2]} (c) ${exam[1][3]} (d) ${exam[1][4]} 
  <br><br/> </div>

  <div class="style5"> 3. ${exam[2][0]}<br/>
  (a) ${exam[2][1]} (b) ${exam[2][2]} (c) ${exam[2][3]} (d) ${exam[2][4]} 
  <br><br/> </div>
  
  <div class="style6"> 4. ${exam[3][0]}<br/>
  (a) ${exam[3][1]} (b) ${exam[3][2]} (c) ${exam[3][3]} (d) ${exam[3][4]} 
  <br><br/> </div>

  <div class="style7"> 5. ${exam[4][0]}<br/>
  (a) ${exam[4][1]} (b) ${exam[4][2]} (c) ${exam[4][3]} (d) ${exam[4][4]} 
  <br><br/> </div>

  `
  document.write(question);

