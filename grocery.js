"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var Grocery = /** @class */ (function () {
    function Grocery(groceryNm, quantity, price) {
        this.groceryNm = groceryNm;
        this.quantity = quantity;
        this.price = price;
    }
    Grocery.prototype.getGrocery = function () {
        var groceryNm = this.groceryNm;
        var price = this.price;
        var quantity = this.quantity;
        return { groceryNm: groceryNm, quantity: quantity, price: price };
    };
    return Grocery;
}());
function writeHeader() {
    if ((0, fs_1.existsSync)("grocery.html")) {
        (0, fs_1.unlinkSync)("grocery.html");
    }
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), "<!DOCTYPE html>\n", {
        flag: 'a'
    });
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), "<head>\n", {
        flag: 'a'
    });
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '<link rel="stylesheet" href="application.css">\n', {
        flag: 'a'
    });
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), "</head>\n", {
        flag: 'a'
    });
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), "<h2>Grocery Table</h2>\n", {
        flag: 'a'
    });
}
function writeTableHeader() {
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '<table>\n', {
        flag: 'a'
    });
    writeTR();
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '      <th> Item Name </th>\n', {
        flag: 'a'
    });
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '      <th> Quantity </th>\n', {
        flag: 'a'
    });
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '      <th> Price </th>\n', {
        flag: 'a'
    });
    writeTRClose();
}
function writeTR() {
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '   <tr>\n', {
        flag: 'a'
    });
}
function writeTRClose() {
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '   </tr>\n', {
        flag: 'a'
    });
}
function writeTD() {
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '      <td>', {
        flag: 'a'
    });
}
function writeTDClose() {
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '</td>\n', {
        flag: 'a'
    });
}
function writeDetails(array_grocery) {
    writeTableHeader();
    var grocery_length = array_grocery.length;
    var n = 0;
    while (n < grocery_length) {
        writeTR();
        writeTD();
        var groceryNm = array_grocery[n].groceryNm;
        (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), groceryNm, {
            flag: 'a'
        });
        writeTDClose();
        writeTD();
        var quantity = array_grocery[n].quantity;
        var quantityStr = quantity.toString();
        (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), quantityStr, {
            flag: 'a'
        });
        writeTDClose();
        writeTD();
        var price = array_grocery[n].price;
        var priceStr = price.toString();
        (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), priceStr, {
            flag: 'a'
        });
        writeTDClose();
        n = n + 1;
        writeTRClose();
    }
    (0, fs_1.writeFileSync)((0, path_1.join)(".", "grocery.html"), '</table>\n', {
        flag: 'a'
    });
}
//console.log(array_grocery[1].getGrocery())
var grocery1 = new Grocery('Milk', 3, 1.00);
var grocery2 = new Grocery('Bread', 6, 2.00);
var grocery3 = new Grocery('Eggs', 12, 2.00);
var array_grocery = [grocery1, grocery2, grocery3];
writeHeader();
writeDetails(array_grocery);
