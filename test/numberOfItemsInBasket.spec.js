//file where we execute the different tests
const { assertEquals } = require(`../test-framework.js`);
const { basket } = require(`../src/basket.js`);

//initialize variables
let input = []; 
let expected, actual, result; //undefined
const myBasket = new basket(); //create an empty basket

//Test One
console.log('Adding an item => array size +1'); //stating what the test to be carried out is

//Arrange
expected = 1; //expected value from test
input = "bagel"; //input the name of the item

//Act
actual = myBasket.addItem(input); //testing the addItem function 
console.log(actual); // print the value that is calculated

//Assert
result = assertEquals(actual, expected); //compares expected and actual output
console.log(`Adding an item => array size +1: ${result ? `Passed` : `Failed`}`); //shows the user if the test passed of failed
console.log(myBasket.basketItems); //logging the contents of the basket

//Clean Up 
input = []; //resetting all the variables for a new test
expected = undefined;
actual = undefined;
result = undefined;
