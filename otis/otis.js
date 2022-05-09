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


const exam = [
    ["Who is the president of Nigeria?", " Muhammadu Buhari", "James Cameron" , "Kelvin James", "Muhammadu Buhari"],
    ["Who is the president of Liberia?", "Helen Justin Sirleaf", "Philemon Joshua", "Pinto Nutjis" , "Helen Justin Sirleaf"],
    ["Who is the president of Congo?", "Newman Jake", "fred Likto", "Kelvin Bingo" , "Newman Jake"],
    ["Who is the president of South Afirca?", "kelvin tayong", "Odin thor", "Striden Joshua" , "kelvin tayong"],
    ["Who is the president of Zambia?", "Uhuru David", "Stephen Olidin", "Fredrick Freepong" , "Botin Jimmy"],
];

const examAnswer= `
   <table width = 1200 border =1>

   <tr>
  <td> ${1.}</td><td colspan=2> ${exam[0][0]}</td> <td>${"a."} ${exam[0][1]}</td> <td>${"b."}  ${exam[0][2]}</td> <td> ${"c."} ${exam[0][3]}</td> 
   </tr>

   <tr> 
   <td>${2.}</td> <td colspan=2 > ${ exam[1][0]} </td>  <td>${"a."}${exam[1][1]} </td>  <td>${"b."}${exam[1][2]} </td> <td>${"c."} ${exam[1][3]}</td> 
   </tr>
   
   <tr>
   <td>${3.}</td>  <td colspan=2> ${ exam[2][0]} </td> <td>${"a."} ${exam[2][1]}</td> <td>${"b."} ${exam[2][2]} </td> <td>${"c."} ${exam[2][3]}</td>
   </tr> 

   <tr>
   <td> ${4.}</td>  <td colspan=2>${ exam[3][0]} </td> <td> ${"a."} ${exam[3][1]}</td>  <td> ${"b."} &nbsp${exam[3][2]}</td> <td> ${"c."} ${exam[3][3]} </td> 

   </tr>
   
   <td>${5.}</td> <td  colspan=2 >${ exam[4][0]}</td> <td>${"a."} ${exam[4][1]} </td> <td>${"b."}${exam[4][2]} </td> <td>${"c."} ${exam[4][3]} </td>
   </table>
`;

document.write(examAnswer);

