// Write your code here
function turnToUrlName(title) {
  //punctuation removed, case lowered, spaces replaced with hyphens
  return title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('-');
}

console.log(turnToUrlName("My blog title!"));