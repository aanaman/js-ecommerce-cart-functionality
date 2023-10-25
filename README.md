# eCommerce Cart Functionality with JavaScript
 Udacity Introduction to Programming Nanodegree Project using JavaScript to build the core functionality for an eCommerce shopping cart

## Project Specifications
* Add item to the cart:
   * The first time an item is clicked, the item is added to the cart
   * After the first time an item is clicked, the quantity is increased.
     
* Increase, decrease and remove an item from the cart:
  * Decreasing when quantity is at 1 will remove the item from the cart.
  * Remove will remove the item from the cart completely (even if the quantity is greater than 1).
* A minimum of 3 products should be created.
* Each product object should include a unique name, price, quantity, productId, and image.
* All of the products should be in an array named ```products```.
* Javascript functions are created to implement the required functionality:
  * ```addProductToCart(productId)```: gets the product using the productId and checks if the product is already in the array. If the product is in the cart, the product quantity is increased. If not, the product is added to ```cart```.
  * ```increaseQuantity(productId)```: gets product using the productId and increases product quantity.
  * ```decreaseQuantity(productId)```: gets product using the productId and decreases product quantity.
  * ```removeProductFromCart(productId)```: gets product using the productId and removes it entirely from the cart.
  * ```cartTotal()```: calculates and returns the total cost of all products in the cart. Use ```price``` and ```quantity``` to calculate the total cost.
  * ```pay(amount)```: takes in an amount from the text field and checks if the amount is greater or less than the value returned from ```cartTotal()```. In this function, the ```amount``` argument represents the money paid by the customer. Returns the positive or negative difference.
