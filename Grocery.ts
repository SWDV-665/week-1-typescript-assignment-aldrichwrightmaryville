import { readFileSync, writeFileSync, promises as fsPromises, unlinkSync, existsSync } from 'fs';
import { join } from 'path';


interface IGrocery { getGrocery(): void; }

class Grocery implements IGrocery {
  groceryNm: string;
  quantity: number;
  price: number;
 
  constructor(groceryNm: string, quantity: number, price: number) {
    this.groceryNm = groceryNm;
    this.quantity=quantity;
    this.price = price;
  }
 
  getGrocery() {
    let groceryNm = this.groceryNm;
    let price = this.price;
    let quantity = this.quantity;
    return {groceryNm, quantity, price}

  }
}

function writeHeader() {
    if (existsSync("grocery.html") )
    {
        unlinkSync("grocery.html")
    }

    writeFileSync(join(".", "grocery.html"), "<!DOCTYPE html>\n", {
        flag: 'a',})
    writeFileSync(join(".", "grocery.html"), "<head>\n", {
        flag: 'a',})
    writeFileSync(join(".", "grocery.html"), '<link rel="stylesheet" href="application.css">\n', {
            flag: 'a',})    
    writeFileSync(join(".", "grocery.html"), "</head>\n", {
                flag: 'a',})        
        

    writeFileSync(join(".", "grocery.html"), "<h2>Grocery Table</h2>\n", {
                    flag: 'a',})               
}
function writeTableHeader()
{
    writeFileSync(join(".", "grocery.html"), '<table>\n', {
        flag: 'a',})  
    writeTR()
    writeFileSync(join(".", "grocery.html"), '      <th> Item Name </th>\n', {
            flag: 'a',})      
    writeFileSync(join(".", "grocery.html"), '      <th> Quantity </th>\n', {
            flag: 'a',})   
    writeFileSync(join(".", "grocery.html"), '      <th> Price </th>\n', {
           flag: 'a',})                  
    writeTRClose()       
}
function writeTR()
{
    writeFileSync(join(".", "grocery.html"), '   <tr>\n', {
        flag: 'a',}) 
}
function writeTRClose()
{
    writeFileSync(join(".", "grocery.html"), '   </tr>\n', {
        flag: 'a',}) 
}
function writeTD() 
{
    writeFileSync(join(".", "grocery.html"), '      <td>', {
        flag: 'a',}) 
}
function writeTDClose()
{
    writeFileSync(join(".", "grocery.html"), '</td>\n', {
        flag: 'a',}) 
}

function writeDetails(array_grocery)
{
   
    writeTableHeader()     
    let grocery_length = array_grocery.length;
    let n = 0;
    while (n <grocery_length)
        {
            writeTR()
            writeTD()
                let groceryNm = array_grocery[n].groceryNm
                writeFileSync(join(".", "grocery.html"), groceryNm, {
                    flag: 'a',})
            writeTDClose() 
            
            
            writeTD()
                let quantity = array_grocery[n].quantity
                let quantityStr =quantity.toString()
                writeFileSync(join(".", "grocery.html"), quantityStr, {
                    flag: 'a',})
            writeTDClose()  
            writeTD()
                let price = array_grocery[n].price
                let priceStr = price.toString()
                writeFileSync(join(".", "grocery.html"), priceStr, {
                    flag: 'a',})
            writeTDClose()       
            n = n + 1
            writeTRClose()
        }
    writeFileSync(join(".", "grocery.html"), '</table>\n', {
        flag: 'a',})      


}
//console.log(array_grocery[1].getGrocery())
let grocery1 = new Grocery('Milk',3, 1.00);
let grocery2 = new Grocery('Bread',6, 2.00);
let grocery3 = new Grocery('Eggs',12, 2.00);

const array_grocery = [grocery1, grocery2, grocery3];

writeHeader();
writeDetails(array_grocery)
