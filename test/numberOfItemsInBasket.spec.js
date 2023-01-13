//file where we execute the different tests
const { assertEquals } = require(`../test-framework.js`);
const { basket } = require(`../src/basket.js`);
const { product } = require(`../src/product.js`);

//initialize variables 
let expected, actual, result, input; //undefined

//Test One
console.log('======= Test One =======');
console.log('addItem adds item into basket and increases the length by 1'); //stating what the test to be carried out is

//Arrange
expected = 1; //expected value from test
input = new product('bagel 1'); //input the name of the item

//Act
let myBasket = new basket(); //create an empty basket
myBasket.addItem(input); // add item into the basket
actual = myBasket.basketItems.length; //find the length of the basketItems array
//console.log(actual); // print the value that is calculated (can hide this value)

//Assert
result = assertEquals(expected, actual); //compares expected and actual output
console.log(`${result ? `Passed` : `Failed`}`); //shows the user if the test passed of failed
//console.log(myBasket.basketItems); //logging the contents of the basket (can hide this value)

//Clean Up 
input, expected, actual, result = undefined; //resetting all the variables for a new test
console.log('======= Test One Done =======');
console.log(` `); //blank space to split up tests

//Test Two
console.log('======= Test Two =======');
console.log('using addItem to a basket with something already inside will increase the contents by 1'); //stating what the test to be carried out is

//Arrange
expected = 2; //the expected value of the test
input = new product('bagel 2'); // new item being added to the basket

//Act
// using the basket from previous test to confirm this test so there is no need to restate myBasket
myBasket.addItem(input); //adding another item to the previous basket
actual = myBasket.basketItems.length; // find the length of the basketItems array
//console.log(actual) // logging the value that is calculated (can hide this value)

//Assert
result = assertEquals(expected, actual); //compares expected and actual output
console.log(`${result ? `Passed` : `Failed`}`); //shows the user if the test passed of failed
//console.log(myBasket.basketItems); //logging the contents of the basket (can hide this value)

//Clean Up 
input, expected, actual, result = undefined; //resetting all the variables for a new test
console.log('======= Test Two Done =======');
console.log(` `); //blank space to split up tests

//Test Three
console.log('======= Test Three =======');
console.log('Only item instances are added to the basket') // only add items that exist in the store

//Arrange
expected = 0;
input = 'something'; // something is not an item instance so the basket length should stay zero

//Act
myBasket = new basket(); //creating a new basket for test three
myBasket.addItem(input); //adding another item to the previous basket
actual = myBasket.basketItems.length; // find the length of the basketItems array
//console.log(actual) // logging the value that is calculated (can hide this value)

//Assert
result = assertEquals(expected, actual); //compares expected and actual output
console.log(`${result ? `Passed` : `Failed`}`); //shows the user if the test passed of failed
//console.log(myBasket.basketItems); //logging the contents of the basket (can hide this value)

//Clean Up 
input, expected, actual, result = undefined; //resetting all the variables for a new test
console.log('======= Test Three Done =======');
console.log(` `); //blank space to split up tests