// const exam = [
//     ["Who is the president of Nigeria?", " Muhammadu Buhari", "James Cameron" , "Kelvin James", "Muhammadu Buhari"]
//     ["Who is the president of Liberia?" , "Helen Justin Sirleaf", "Philemon Joshua", "Pinto Nutjis" , "Helen Justin Sirleaf"]
//     ["Who is the president of Liberia?" , "Helen Justin Sirleaf", "Philemon Joshua", "Pinto Nutjis" , "Helen Justin Sirleaf"]
//     ["Who is the president of Liberia?" , "Helen Justin Sirleaf", "Philemon Joshua", "Pinto Nutjis" , "Helen Justin Sirleaf"]
//     ["Who is the president of Liberia?" , "Helen Justin Sirleaf", "Philemon Joshua", "Pinto Nutjis" , "Helen Justin Sirleaf"]
    
    
// ];

// const examAnswer= `
//    ${1.} &nbsp; ${exam[0][0]} &nbsp; ${exam[0][1]}&nbsp; ${exam[0][2]}&nbsp; ${exam[0][3]} <br>
//    ${2.} &nbsp; ${exam[1][0]} &nbsp; ${exam[1][1]}&nbsp; ${exam[1][2]}&nbsp; ${exam[1][3]} <br>
//    ${3.} &nbsp; ${exam[2][0]} &nbsp; ${exam[2][1]}&nbsp; ${exam[2][2]}&nbsp; ${exam[2][3]} <br>
//    ${4.} &nbsp; ${exam[3][0]} &nbsp; ${exam[3][1]}&nbsp; ${exam[3][2]}&nbsp; ${exam[3][3]} <br>
//    ${5.} &nbsp; ${exam[4][0]} &nbsp; ${exam[4][1]}&nbsp; ${exam[4][2]}&nbsp; ${exam[4][3]} <br>
// `;

// document.write("examAnswer");


// const exam = [
//     ["Who is the president of Nigeria?", " Muhammadu Buhari", "James Cameron" , "Kelvin James", "Muhammadu Buhari"],
//     ["Who is the president of Liberia?", "Helen Justin Sirleaf", "Philemon Joshua", "Pinto Nutjis" , "Helen Justin Sirleaf"],
//     ["Who is the president of Congo?", "Newman Jake", "fred Likto", "Kelvin Bingo" , "Newman Jake"],
//     ["Who is the president of South Afirca?", "kelvin tayong", "Odin thor", "Striden Joshua" , "kelvin tayong"],
//     ["Who is the president of Zambia?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
// ];

// const examAnswer= `
//    <table width = 1200 border =1>

//    <tr>
//   <td> ${1.}</td><td colspan=2> ${exam[0][0]}</td> <td>${"a."} ${exam[0][1]}</td> <td>${"b."}  ${exam[0][2]}</td> <td> ${"c."} ${exam[0][3]}</td> 
//    </tr>

//    <tr> 
//    <td>${2.}</td> <td colspan=2 > ${ exam[1][0]} </td>  <td>${"a."}${exam[1][1]} </td>  <td>${"b."}${exam[1][2]} </td> <td>${"c."} ${exam[1][3]}</td> 
//    </tr>
   
//    <tr>
//    <td>${3.}</td>  <td colspan=2> ${ exam[2][0]} </td> <td>${"a."} ${exam[2][1]}</td> <td>${"b."} ${exam[2][2]} </td> <td>${"c."} ${exam[2][3]}</td>
//    </tr> 

//    <tr>
//    <td> ${4.}</td>  <td colspan=2>${ exam[3][0]} </td> <td> ${"a."} ${exam[3][1]}</td>  <td> ${"b."} &nbsp${exam[3][2]}</td> <td> ${"c."} ${exam[3][3]} </td> 

//    </tr>
   
//    <td>${5.}</td> <td  colspan=2 >${ exam[4][0]}</td> <td>${"a."} ${exam[4][1]} </td> <td>${"b."}${exam[4][2]} </td> <td>${"c."} ${exam[4][3]} </td>
//    </table>
// `;

// document.write(examAnswer);

// //calculation for multiplaication table 

// for( i=1; i<12; i++){

//  document.write(` The answer is:${i} * 2 =  ${i*2} <br>` )
// }

// for( let i=0; i<12; i++){
//     console.log( i + " x 2" + i*2)
// }

// this is the second assignment 


// let examsQuestions = exam.filter(exams =>{
// return exam[0]*2
// })
// console.log(examsQuestions);


const exam = [
    ["Who is the president of Nigeria?", " Muhammadu Buhari", "James Cameron" , "Kelvin James", "Muhammadu Buhari"],
    ["Who is the president of Liberia?", "Helen Justin Sirleaf", "Philemon Joshua", "Pinto Nutjis" , "Helen Justin Sirleaf"],
    ["Who is the president of Congo?", "Newman Jake", "fred Likto", "Kelvin Bingo" , "Newman Jake"],
    ["Who is the president of South Afirca?", "kelvin tayong", "Odin thor", "Striden Joshua" , "kelvin tayong"],
    ["Who is the president of Zambia?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of United States of America?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of  Kenya?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of Ireland?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of Finland?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of Dubai?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of Ghana?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of Mozambique?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of turkey?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of Ukraine?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of Russia?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
    ["Who is the president of Egypt?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"]
];



//This is for the odd questions
for(let i =0; i <= exam.length; i+=2){
    console.log(exam[i])
}



//this is for the even numbers 
for(let index =1; index <= exam.length; index+=2){
    console.log(exam[index])
}

