console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  basket.push(item);
  return true;
}
console.log(
  `True or False you added an item to the basket: `,
  addItem("shrimp")
);
console.log(basket);
// Should just show my basket of shrimp
console.log(`True if adding bahn mi: `, addItem("bahn mi"));
console.log(basket);

/* - Create a global variable named `basket` and set it to an empty array.
 - Create a function called `addItem`. It should:
 - take an input parameter for a string `item`
 - add the new item to the global array `basket`.
 - return `true` indicating the item was added

 - Create a function called `listItems`. It should:
 - loop over the items in the `basket` array
 - console.log each individual item on a new line */

/* WHY DOES THIS SHOW UP UNDEFINED? 
function listItems() {
  for (let items of basket) {
    console.log(items);
  }
}
console.log(`These are the items in the basket: `, listItems());
console.log(`These are the items in the basket:  ${listItems()}`);
*/

function listItems(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
  }
}
listItems(basket);

/* 
 NOTES to help me figure out what i'm doing
 - creating the function of list of items
 - for looping that i'm declaring items as my variable and I'm checking the basket for those variables.
 - i console log that variable items to get the list.


- Create a function called `empty`. It should:
  - reset the `basket` to an empty array */

// BROKEN - LOOK UP ARRAY.SPLICE TO FIX IT
function empty() {
  basket = [];
}
console.log(`Items in the basket: ${basket}`);
//Showing items in basket first before you run the empty function
empty();
console.log(`Check out the array is now empty: `, basket);
//Showing that you have now emptied it by console logging it

//> __IMPORTANT__
//> Make sure that you are writing code *in the file* to test every function that you write!

//For example, to test `addItem`:
//```
//console.log(`Basket is ${basket}`);
//console.log('Adding apples (expect true)', addItem('apples'));
//console.log(`Basket is now ${basket}`);

/*__Using functions in other functions!__

1. Add a global `const` named `maxItems` and set it to 5.

2. Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)

3. Update the required `addItem` function to:
  - Use the `isFull` function to prevent more than `maxItems` from being 
    added to the basket. 
  - If an item was added to the array, return `true`
  - If there was no room and the item could not be added return `false`

*/
const maxItems = 5;

function isFull() {
  if (basket.length < maxItems) {
    return false;
  }
  return true;
}
console.log(isFull());

addItem("shrimp");
addItem("garbanzo beans");
addItem("shrimpfriedrice");
addItem("tea");
console.log(isFull());
console.log(basket);
addItem("coffee");
addItem("noodles");
console.log(isFull());
console.log(basket);
