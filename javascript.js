const exam = [
    ["Who is the President of Nigeria", "Segun", "Buhari", "Olamide", "Buhari"],
    ["Who is the President of USA?", "Biden", "Fashola", "Kunle", "Biden"],
    ["Who is the President of Ghana", "Mide", "Tomiwa", "Nana", "Nana"],
    ["Who is the President of South Africa", "Cyril", "Yemisi", "John", "Cyril"],
    ["Who is the President of UK", "Johnson", "Timi", "Olumide", "Johnson"],
];
let question = "";
let noOfQuestion = exam.length;
let count = 0;

while (count < noOfQuestion){
let increment = count + 1;

question += `
    ${increment}). ${exam[count][0]} <br/>
    (a) ${exam[count][1]}  (b) ${exam[count][2]} (c) ${exam[count][3]}
    <br/><br/>
`;
++count;
}



document.write(question);
