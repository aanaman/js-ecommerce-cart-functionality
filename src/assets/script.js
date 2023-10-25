/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

let products = [
   {
      name: "Cherry",
      price: 6.99,
      quantity: 0,
      productId: 100,
      image: "./images/cherry.jpg"
   },
   {
      name: "Orange",
      price: 14.99,
      quantity: 0,
      productId: 101,
      image: "./images/orange.jpg"
   },
   {
      name: "Strawberry",
      price: 7.99,
      quantity: 0,
      productId: 102,
      image: "./images/strawberry.jpg"
   },
   {
    name: "Banana",
    price: 3.99,
    quantity: 0,
    productId: 103,
    image: "./images/banana.jpg"
   },
   {
    name: "Pineapple",
    price: 9.99,
    quantity: 0,
    productId: 104,
    image: "./images/pineapple.jpg"
   },
   {
    name: "Carrot",
    price: 5.99,
    quantity: 0,
    productId: 105,
    image: "./images/carrot.jpg"
   }
];

let cart = [];

function findProduct(productId) {
  return products.find(function(product) {
    return product.productId === productId;
  });
}

function addProductToCart(productId) {
    let product = findProduct(productId);
    if (product) {
        product.quantity++;
        if (!cart.includes(product)) {
          cart.push(product);
        }
    }
}

function increaseQuantity(productId) {
    let product = findProduct(productId);
    if (product) {
        product.quantity++;
    }
}

function decreaseQuantity(productId) {
    let product = findProduct(productId);
    if (product) {
        product.quantity--;
        if (product.quantity === 0) {
          removeProductFromCart(productId);
        }
    }
}

function removeProductFromCart(productId) {
    let product = findProduct(productId);
    if (product) {
        product.quantity = 0;
        cart.splice(cart.indexOf(product), 1);
    }
}

function cartTotal() {
  let total = 0;
  cart.forEach(function(product) {
    total += product.price * product.quantity;
  });
  return total;
}

let totalPaid = 0;

function pay(amount) {
  totalPaid += amount;
  let remaining = totalPaid - cartTotal();

  if (remaining >= 0) {
    totalPaid = 0;
    emptyCart()
  }

  return remaining;
}

function emptyCart() {
  cart.forEach(function(product) {
    product.quantity = 0;
  });
  cart = [];
}


function currency(currencyType) {
  currencySymbol = currencyType;
  drawProducts();
  drawCart();
  drawCheckout();
}


module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
  currency
}
