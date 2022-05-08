const name="Adepitan Fogo";
let age;
const isMarried = true;
let occupation;
age=20;
occupation="web dev";
let bankBalance = 1000;
let town="ikeja";


let sentence = "My name is " + name +",I am a " +occupation + " and I live in "+ town;
document.write(sentence);
console.log(sentence);


const exam = [
    ["Who is the President of Nigeria?", "Alabi", "Adebayo", "Kolade", "Alabi"],
    ["Who is the President of USA", "Buhari", "Tunde", "Biden", "Biden"],
    ["Who is the President of Ghana", "Kofo", "Guy", "Nana", "Nana"],
    ["Who is the President of South Africa", "Kofo", "Buhari", "Cyril", "Cyril"],
    ["Who is the President of UK", "Theresa", "Johnson", "Cyril", "Johnson"],
];

const question=`<br><br>
    1. ${exam[0][0]} <br>
    (a). ${exam[0][1]}  (b). ${exam[0][2]} (c).${exam[0][3]}
    <br><br>

    2. ${exam[1][0]} <br>
    (a). ${exam[1][1]}  (b). ${exam[1][2]} (c).${exam[1][3]}
    <br><br>

    3. ${exam[2][0]} <br>
    (a). ${exam[2][1]}  (b). ${exam[2][2]} (c).${exam[2][3]}
    <br><br>

    4. ${exam[2][0]} <br>
    (a). ${exam[2][1]}  (b). ${exam[2][2]} (c).${exam[2][3]}
    <br><br>

    5. ${exam[3][0]} <br>
    (a). ${exam[3][1]}  (b). ${exam[3][2]} (c).${exam[3][3]}
    

`;
document.write(question)