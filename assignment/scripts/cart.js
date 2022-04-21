console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = [];

function addItem(item) {
  basket.push("item");
  return true;
}
console.log(`True or False you added to the basket: `, addItem());
console.log(basket);

//- Create a global variable named `basket` and set it to an empty array.

//- Create a function called `addItem`. It should:
//  - take an input parameter for a string `item`
//  - add the new item to the global array `basket`.
//  - return `true` indicating the item was added

//- Create a function called `listItems`. It should:
// - loop over the items in the `basket` array
//  - console.log each individual item on a new line

//- Create a function called `empty`. It should:
//  - reset the `basket` to an empty array

//> __IMPORTANT__
//> Make sure that you are writing code *in the file* to test every function that you write!

//For example, to test `addItem`:
//```
//console.log(`Basket is ${basket}`);
//console.log('Adding apples (expect true)', addItem('apples'));
//console.log(`Basket is now ${basket}`);
