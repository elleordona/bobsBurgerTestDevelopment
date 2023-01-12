//file where we execute the different tests
const { assertEquals } = require(`../test-framework.js`);
const { basket } = require(`../src/basket.js`);

//initialize variables 
let expected, actual, result, item; //undefined
const myBasket = new basket(); //create an empty basket

//Test One
console.log('======= Test One =======');
console.log('addItem adds item into basket and increases the length by 1'); //stating what the test to be carried out is

//Arrange
expected = 1; //expected value from test
item = "bagel"; //input the name of the item

//Act
actual = myBasket.addItem(item); //testing the addItem function 
//console.log(actual); // print the value that is calculated (can hide this value)

//Assert
result = assertEquals(expected, actual); //compares expected and actual output
console.log(`${result ? `Passed` : `Failed`}`); //shows the user if the test passed of failed
//console.log(myBasket.basketItems); //logging the contents of the basket (can hide this value)

//Clean Up 
input = []; //resetting all the variables for a new test
expected = undefined;
actual = undefined;
result = undefined;
console.log('======= Test One Done =======');