let questions = getQuestions(0, 3);
console.log(questions);

/**
 * generate a list of question and her options as an array from start to end (both inclusive)
 *
 * @param {int} start
 * * @param {int} end
 * @returns {array}
 */
function getQuestions(start, end) {
  const exam = [
    ["Who is the President of Nigeria?", "Alabi", "Adebayo", "Kolade", "Alabi"],
    ["Who is the President of USA", "Buhari", "Tunde", "Biden", "Biden"],
    ["Who is the President of Ghana", "Kofo", "Guy", "Nana", "Nana"],
    [
      "Who is the President of South Africa",
      "Kofo",
      "Buhari",
      "Cyril",
      "Cyril",
    ],
    ["Who is the President of UK", "Theresa", "Johnson", "Cyril", "Johnson"],
    ["Who is the President of UK", "Theresa", "Johnson", "Cyril", "Johnson"],
    ["Who is the President of UK", "Theresa", "Johnson", "Cyril", "Johnson"],
    ["Who is the President of UK", "Theresa", "Johnson", "Cyril", "Johnson"],
  ];
  let subExam = [];
  for (let index = start; index <= end; index++) {
    subExam.push(exam[index]);
  }

  return subExam;
}
