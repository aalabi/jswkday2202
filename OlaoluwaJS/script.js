// Assignment 1 writing a senntence by calling a variable name

// let urName = "Samuel Olaoluwa Akinyemi";
// let occupation = "Digital Creator";
// let town = "No 16, kunleshow street,  Ayobo, Ipaja Lagos,";
// let age = "32 years old.";


// // let sentence =
// //   "My name is " + Urname + 
// //   ", I am a " + occupation + 
// //   ", <br></br> I live at " + town + 
// //   " and I am " + age;

// sentence = `<div class ="style1">My name is ${urName}, I am a ${occupation}, <br></br> I live at ${town} <br></br> and I am ${age}</div> `;

// console.log(sentence);
// document.write(sentence);

// End

// Start
// Assignment 2 (CBT question format)

// const exam = [
//     ["Who is the President of Nigeria?", "Olaoluwa", "Adebayo", "Kolade", "Alabi", "Olaoluwa"],
//     ["Who is the President of USA", "Buhari", "Tunde", "Biden", "Alabi", "Biden"],
//     ["Who is the President of Ghana", "Kofo", "Guy", "Nana", "Alabi", "Nana"],
//     ["Who is the President of South Africa", "Kofo", "Buhari", "Olaoluwa", "Cyril", "Cyril"],
//     ["Who is the Prime Minister of UK", "Theresa", "Johnson", "Cyril", "Olaoluwa", "Johnson"],
//   ];

//   const question = ` <hr class= "hr">
//   <h2 class="style2"> Current Affairs Questions </h2>
//  <div class="style3"> 1. ${exam[0][0]}<br/>
//   (a) ${exam[0][1]} (b) ${exam[0][2]} (c) ${exam[0][3]} (d) ${exam[0][4]} 
//   <br><br/> </div>

//   <div class="style4"> 2. ${exam[1][0]}<br/>
//   (a) ${exam[1][1]} (b) ${exam[1][2]} (c) ${exam[1][3]} (d) ${exam[1][4]} 
//   <br><br/> </div>

//   <div class="style5"> 3. ${exam[2][0]}<br/>
//   (a) ${exam[2][1]} (b) ${exam[2][2]} (c) ${exam[2][3]} (d) ${exam[2][4]} 
//   <br><br/> </div>
  
//   <div class="style6"> 4. ${exam[3][0]}<br/>
//   (a) ${exam[3][1]} (b) ${exam[3][2]} (c) ${exam[3][3]} (d) ${exam[3][4]} 
//   <br><br/> </div>

//   <div class="style7"> 5. ${exam[4][0]}<br/>
//   (a) ${exam[4][1]} (b) ${exam[4][2]} (c) ${exam[4][3]} (d) ${exam[4][4]} 
//   <br><br/> </div>

//   `
//   document.write(question);
// End


// Start
// Assignment 3 Multiplication Table and Showing even and odd numbers

// Multiplication Table
// for (let a = 1; a <= 12; a++) { 
//   document.write(` <div> 2 X ${a}  =  ${a*2} <br> </div>` )
//   }

// for (let a = 1; a <= 12; a++) { 
//   document.write(`<hr> <div> 3 X ${a}  =  ${a*3} <br> </div> <hr>` )
//     }

// for (let a = 1; a <= 12; a++) { 
//       document.write(` <div> 4 X ${a}  =  ${a*4} <br> </div>` )
//         }



// for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 2 = " + index * 2 + "<br/>");
//   }

// for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 3 = " + index * 3 + "<br/>");
//   }

// for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 4 = " + index * 4 + "<br/>");
//   }

// for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 5 = " + index * 5 + "<br/>");
//   }

//   for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 6 = " + index * 6 + "<br/>");
//   }

//   for (let index = 1; index <= 12; index = index + 1) { 
//     document.write(index + " X 7 = " + index * 7 + "<br/>");
//   }

// for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 8 = " + index * 8 + "<br/>");
//   }

// for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 9 = " + index * 9 + "<br/>");
//   }

// for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 10 = " + index * 10 + "<br/>");
//   }

//   for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 11 = " + index * 11 + "<br/>");
//   }

//   for (let index = 1; index <= 12; index = index + 1) {
//     document.write(index + " X 12 = " + index * 12 + "<br/>");
//   }

// Otis
// for( i=1; i<12; i++){

//    document.write(` The answer is:${i} * 2 =  ${i*2} <br>` )
//   }

//   for( let i=0; i<12; i++){
//     console.log( i + " x 2" + i*2)
// }
  

// const exam = [
//       ["Who is the President of Nigeria?", "Olaoluwa", "Adebayo", "Kolade", "Alabi", "Olaoluwa"],
//       ["Who is the President of USA", "Buhari", "Tunde", "Biden", "Alabi", "Biden"],
//       ["Who is the President of Ghana", "Kofo", "Guy", "Nana", "Alabi", "Nana"],
//       ["Who is the President of South Africa", "Kofo", "Buhari", "Olaoluwa", "Cyril", "Cyril"],
//       ["Who is the Prime Minister of UK", "Theresa", "Johnson", "Cyril", "Olaoluwa", "Johnson"],
//       ["Who is the President of Ghana", "Kofo", "Guy", "Nana", "Alabi", "Nana"],
//       ["Who is the President of South Africa", "Kofo", "Buhari", "Olaoluwa", "Cyril", "Cyril"],
//       ["Who is the President of Nigeria?", "Olaoluwa", "Adebayo", "Kolade", "Alabi", "Olaoluwa"],
//       ["Who is the President of USA", "Buhari", "Tunde", "Biden", "Alabi", "Biden"],
//     ];


// This is showing odd numbers for the questions
// for(let E =0; E <= exam.length; E+=2){
//   console.log(exam[E])
// }

// This is showing even numbers for the questions
// for(Ex=1;  Ex <= exam.length; Ex+=2 ){
//   console.log(exam[Ex])
// }
// End

// Start
// class work(selecting class/Id and styling and hiding image )

// const welcome=document.getElementById("myHome")
// welcome.style.backgroundColor = "red"
// welcome.style.Color = "blue"
// welcome.style.fontSize = "50px"
// console.log(welcome);

// const unorderedList=document.getElementById("link")
// unorderedList.style.backgroundColor = "blue"
// unorderedList.style.Color = "white"
// unorderedList.style.fontSize = "50px"
// unorderedList.style.fontFamily = "sans serif"
// console.log(unorderedList);

// hidden image method
// const index=document.getElementById("rere")
// if(index.style.display='none')
// document.write("empty image shown")
// End

// Start
// Assg 5 13/05/22 (hiding product images using array and removechild)

 let main = document.getElementById('main');
 let listImage = main.children;
    main.removeChild(listImage[9]);
    main.removeChild(listImage[2]);

 console.log(listImage[2]);
// End

