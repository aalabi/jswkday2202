let cluber = [24, "Mr Buhari", "Johnson"];

/* if (cluber[0] >= 18) {
  document.write("Step into the Club");
} */

/* if (cluber[0] >= 18) {
  document.write("Step into the Club");
} else {
  document.write(`You have been reported to your parent: ${cluber[1]}`);
} */

/* if (cluber[0] >= 18) {
  document.write("Step into the Club");
} else if (cluber[1]) {
  document.write(`You have been reported to your parent: ${cluber[1]}`);
} else if (cluber[2]) {
  document.write(`You have been reported to your parent: ${cluber[2]}`);
} */

/* if (cluber[0] >= 18) {
  document.write("Step into the Club");
} else if (cluber[1]) {
  document.write(`You have been reported to your parent: ${cluber[1]}`);
} else if (cluber[2]) {
  document.write(`You have been reported to your guardian: ${cluber[2]}`);
} else {
  document.write(`You have been reported to the authority`);
} */

/* if (cluber[1] == "Mr Buhari") {
  document.write("Welcome Presidentido Pikin");
} else {
  document.write("Welcome");
}
 */

/* cluber[1] == "Mr Buhari"
  ? document.write("Welcome Presidentido Pikin")
  : document.write("Welcome"); */

let parentOccupation;
/* if (cluber[1] == "Mr Buhari") {
  parentOccupation = "President";
} else {
  parentOccupation = "Not President";
  
} */
/* parentOccupation = cluber[1] == "Mr Buhari" ? "President" : "Not President";
console.log(parentOccupation);
 */

let score = 45;
if (score > 100 || score < 0) {
  document.write("Invalid Score");
} else if (score >= 70 && score <= 100) {
  document.write("A");
}
