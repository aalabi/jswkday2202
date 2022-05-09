const exam = [
    ["Who is the President of Nigeria", "Segun", "Buhari", "Olamide", "Buhari"],
    ["Who is the President of USA?", "Biden", "Fashola", "Kunle", "Biden"],
    ["Who is the President of Ghana", "Mide", "Tomiwa", "Nana", "Nana"],
    ["Who is the President of South Africa", "Cyril", "Yemisi", "John", "Cyril"],
    ["Who is the President of UK", "Johnson", "Timi", "Olumide", "Johnson"],
];


question = `
    1). ${exam[0][0]} <br/>
    (a) ${exam[0][1]}  (b) ${exam[0][2]} (c) ${exam[0][3]}
    <br/><br/>
`


document.write(question);
