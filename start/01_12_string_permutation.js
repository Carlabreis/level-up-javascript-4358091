// Write your code here

// function scrabble(letters) {
//   let total;
//   for (let i = 1; i <= letters.length; i++){
//     if (total === undefined){
//       total = i;
//       continue;
//     }
//     total *= i;
//   }
//   return total;
// }

// RECURSION function
function scrabble(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * scrabble(letters.slice(1));
}

console.log(scrabble("hello"));
