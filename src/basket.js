//code to add item to basket
const { product } = require(`./product.js`)

class basket {

    basketItems = []; //array for items in the basket

    //functions for basket
    addItem(item) {
        if (item instanceof product) {
            this.basketItems.push(item); //add the item string into the basket array
        }
    }

    removeItem(item) {
        
    }
}

module.exports = {  basket  };