//code to add item to basket
class basket {

    basketItems = []; //array for items in the basket

    //functions for basket
    addItem(item) {
        this.basketItems.push(item); //add the item string into the basket array
        return this.basketItems.length; // returns the length of the basket array
    }
}

module.exports = { basket }