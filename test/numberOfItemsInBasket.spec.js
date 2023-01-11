//file where we execute the different tests
const { assertEquals } = require(`../test-framework.js`);
const { basket } = require(`../src/addItem.js`);

//initialise variables
let input = []; 
let expected, actual, result; //undefined
const myBasket = new basket(); //create an empty basket

//Test One
console.log('Adding an item => array size +1'); //stating what the test to be carried out is

//Arrange
expected = 1;
input = "item"; //input the name of the item

//Act
actual = myBasket.addItem(input); //testing the addItem function 
console.log(actual);

//Assert
result = assertEquals(actual, expected); //compares expected and actual output
console.log(`Adding an item => array size +1: ${result ? `Passed` : `Failed`}`); //shows the user if the test passed of failed

//Clean Up 
input = []; //resetting all the variables for a new test
expected = undefined;
actual = undefined;
result = undefined;
