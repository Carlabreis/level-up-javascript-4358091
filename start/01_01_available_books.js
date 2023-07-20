// Write your code here
// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }
 
// Book.prototype.getAvailability = function() {
  // if (this.numCopies === 0){
  //   return "out of stock"
  // } else if (this.numCopies < 10){
  //   return "low stock"
  // } else {
  //   return "in stock"
  // }
// }

// Book.prototype.sell = function(numSold = 1){
  // return this.numCopies -= numSold;
// }

// Book.prototype.restock = function(numCopiesRestock = 5){
  // return this.numCopies += numCopiesRestock;
// }

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
      if (this.numCopies === 0){
        return "out of stock"
      } else if (this.numCopies < 10){
        return "low stock"
      } else {
        return "in stock"
      }
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numCopiesRestock = 5) {
    this.numCopies += numCopiesRestock;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());

HungerGames.restock(12);
console.log(HungerGames.getAvailability());

HungerGames.sell(17);
console.log(HungerGames.getAvailability());