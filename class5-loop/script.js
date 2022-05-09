let question = "";
let noOfQuestions = exam.length;
let kanter = 0;
while (kanter < noOfQuestions) {
  let questionNo = kanter + 1;
  question += `
    ${questionNo}). ${exam[kanter][0]}<br/>
    (a) ${exam[kanter][1]} (b) ${exam[kanter][2]} (c) ${exam[kanter][3]}
    <br/><br/>
`;
  ++kanter;
}

document.write(question);
