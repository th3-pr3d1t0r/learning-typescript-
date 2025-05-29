"use strict";
let sale = 123456789;
let course = "typscript ";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(n => n.toString);
let user = [32, "dave"];
user[0].toString;
let mySize = 2;
function calculateTax(income, taxYear = 2021) {
    if (income > 50000)
        return (income * 10) / 100 & taxYear;
    else
        return (income * 5) / 100 & taxYear;
}
calculateTax(100000);
//# sourceMappingURL=index.js.map