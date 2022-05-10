//MAP
/* 
map(function(element) { ... })
map(function(element, index) { ... }) 
*/
let nos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/* 
// anonymous function implementation
const doubleNos = nos.map(function (element) {
  return element * 2;
});
console.log(doubleNos);
*/

// arrow function implementation
const doubleNos = nos.map((element) => element * 2);
console.log(doubleNos);

// arrow function implementation
const nosPlusIndex = nos.map((element) => element + 1);
console.log(nosPlusIndex);

//FOREACH
/* 
forEach(function(element) { ... })
forEach(function(element, index) { ... }) 
*/

// arrow function implementation
nos.forEach((element) => console.log(element));

// anonymous function implementation
let evenNos = nos.filter(function (element) {
  if (element % 2 == 0) {
    return element;
  }
});
console.log(evenNos);

for (const aNo of nos) {
  console.log(aNo);
}
