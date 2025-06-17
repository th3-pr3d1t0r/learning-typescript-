"use strict";
function calculateShopingCartTotal(items) {
    let prices = [];
    items.forEach((item) => prices.push(item.price * item.quantity));
    let total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(total);
    return total;
}
const shoppingCart1 = [
    { productId: 101, name: "Wireless Headphones", quantity: 1, price: 150.00 },
    { productId: 102, name: "USB-C Adapter", quantity: 2, price: 12.50 },
    { productId: 103, name: "Gaming Mouse Pad", quantity: 1, price: 20.00 },
];
const shoppingCart2 = [
    { productId: 201, name: "Coffee Beans", quantity: 3, price: 15.00 },
    { productId: 202, name: "Mug Set", quantity: 1, price: 25.00 },
];
const emptyShoppingCart = [];
calculateShopingCartTotal(shoppingCart1);
calculateShopingCartTotal(shoppingCart2);
//# sourceMappingURL=shopping_cart.js.map