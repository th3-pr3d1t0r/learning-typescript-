"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const allProducts = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", },
    { id: 2, name: "Keyboard", price: 75, category: "Electronics" },
    { id: 3, name: "The Great Novel", price: 25, category: "Books" },
    { id: 4, name: "T-Shirt", price: 20, category: "Clothing" },
    { id: 5, name: "Mouse", price: 30, category: "Electronics" },
    { id: 6, name: "Cookbook", price: 35, category: "Books" },
];
const sampleCategories = [
    { id: 101, name: "Electronics", description: "Gadgets and devices." },
    { id: 102, name: "Books", description: "Written and published works." },
    { id: 103, name: "Furniture", description: "Items for home and office decor." },
];
function filterProductByCategory(products, targetCaegory) {
    let matchingProducts = products.filter((product) => product.category == targetCaegory);
    return matchingProducts;
}
filterProductByCategory(allProducts, "Electronics");
function updateProductprice(products, productId, newPrice) {
    for (let product of products) {
        if (product.id == productId) {
            product.price = newPrice;
            break;
        }
    }
    return products;
}
function getProductDetails(products, categorys, productId) {
    let correctProduct = products.find((product) => product.id == productId);
    if (correctProduct == undefined) {
        return null;
    }
    let correctCategry = categorys.find((category) => category.name == correctProduct.category);
    if (correctCategry == undefined) {
        return null;
    }
    const detailedProduct = {
        id: correctProduct.id,
        name: correctProduct.name,
        price: correctProduct.price,
        categoryName: correctCategry.name,
        categoryDescription: correctCategry.description
    };
    return detailedProduct;
}
getProductDetails(allProducts, sampleCategories, 1);
function deletProductById(products, productId) {
    let productExists = products.findIndex((product) => product.id == productId);
    if (productExists == -1) {
        return false;
    }
    else {
        products.splice(productExists, 1);
    }
    return true;
}
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "OutOfStock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
function addNewProduct(products, newProductInput) {
    if (newProductInput.name === "" || newProductInput.price <= 0 || newProductInput.category === "") {
        return null;
    }
    let higherId = 0;
    products.forEach(product => {
        if (product.id > higherId) {
            higherId = product.id;
        }
    });
    if (newProductInput.status === undefined) {
        newProductInput.status = ProductStatus.Available;
    }
    if (newProductInput.quantity === undefined) {
        newProductInput.quantity = 0;
    }
    let newProduct = {
        id: higherId + 1,
        name: newProductInput.name,
        price: newProductInput.price,
        category: newProductInput.category,
        status: newProductInput.status,
        quantity: newProductInput.quantity
    };
    products.push(newProduct);
    return newProduct || null;
}
class UserService {
    constructor(usersArray) {
        this.users = usersArray;
    }
    ;
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 500));
            let user = this.users.find((user) => user.id == id);
            if (user == undefined) {
                return null;
            }
            return user;
        });
    }
}
class AdminUserService extends UserService {
    constructor(usersArray) {
        super(usersArray);
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 700));
            let user = this.users.find((user) => user.id == id);
            if (user === undefined) {
                return false;
            }
            let position = this.users.indexOf(user);
            this.users.splice(position, 1);
            return true;
        });
    }
}
//# sourceMappingURL=index.js.map