//file where we execute the different tests
const { assertEquals } = require(`../test-framework.js`);
const { basket } = require(`../src/basket.js`);

//initialize variables 
let expected, actual, result, item; //undefined


//Test One
console.log('======= Test One =======');
console.log('addItem adds item into basket and increases the length by 1'); //stating what the test to be carried out is

//Arrange
expected = 1; //expected value from test
item = "bagel"; //input the name of the item

//Act
const myBasket = new basket(); //create an empty basket
actual = myBasket.addItem(item); //testing the addItem function 
//console.log(actual); // print the value that is calculated (can hide this value)

//Assert
result = assertEquals(expected, actual); //compares expected and actual output
console.log(`${result ? `Passed` : `Failed`}`); //shows the user if the test passed of failed
//console.log(myBasket.basketItems); //logging the contents of the basket (can hide this value)

//Clean Up 
item, expected, actual, result = undefined; //resetting all the variables for a new test
console.log('======= Test One Done =======');
console.log(` `); //blank space to split up tests

//Test Two
console.log('======= Test Two =======');
console.log('using addItem to a basket with something already inside will increase the contents by 1'); //stating what the test to be carried out is

//Arrange
expected = 2; //the expected value of the test
item = 'bagel 2'; // new item being added to the basket

//Act
// using the basket from previous test to confirm this test so there is no need to restate myBasket
actual = myBasket.addItem(item); //adding another item to the previous basket
//console.log(actual) // logging the value that is calculated (can hide this value)

//Assert
result = assertEquals(expected, actual); //compares expected and actual output
console.log(`${result ? `Passed` : `Failed`}`); //shows the user if the test passed of failed
//console.log(myBasket.basketItems); //logging the contents of the basket (can hide this value)

//Clean Up 
item, expected, actual, result = undefined; //resetting all the variables for a new test
console.log('======= Test Two Done =======');
console.log(` `); //blank space to split up tests