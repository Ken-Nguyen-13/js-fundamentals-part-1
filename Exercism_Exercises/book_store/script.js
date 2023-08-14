/* 1 book is $8. There are 5 books in a series. 

Purchasing 2 different books is 5% discount.
3 = 10%
4 = 20%
5 = 25%
Your mission is to write code to calculate the 
price of any conceivable shopping basket 
(containing only books of the same series), 
giving as big a discount as possible.
*/

function cost(bookAmounts) {
  bookAmounts.sort(function (a, b) {
    return a - b;
  });
  const mostCopies = Math.max.apply(null, bookAmounts);
  let groupOfBooks = [];
  for (let i = 0; i < mostCopies; i++) {
    groupOfBooks.push([]);
    for (let k = 0; k < bookAmounts.length; k++) {
      if (!groupOfBooks[i].includes(bookAmounts[k])) {
        groupOfBooks[i].push(bookAmounts[k]);
        bookAmounts.splice(k, 1);
      }
    }
  }
  return groupOfBooks;
}
console.log(cost([1, 1, 1, 2, 2, 3, 4, 4])); //[1, 2, 3, 4] --> Leftover [1, 1, 2, 4] --> [1, 2, 4] --> Leftover [1] --> [1]
