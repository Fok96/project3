const express = require ("express");
const app =express();
app.listen(5000)
app.get("/",(req,res)=>{
    res.send("welcome to our store")
})
app.get("/products",(req,res)=>{
    res.json(products);
})
const chalk = require('chalk');
const products = require("./products.json");

console.log(chalk.bgBlue("Hello world"));

console.log("to katastima mas exei " + products.length + (" proionta"));

for (let p of products) {


    if (p.sale) {
        console.log(p.name + " " + chalk.green(p.sale))
    }
    else {
        console.log(p.name + " " + p.price);
    }
}
let sum = 0;
let max = 0;
let min = products[0].price;

for (let p of products) {
    sum = sum + p.price
}
for (let p of products) {
    if (p.price > max) {
        max = p.price;
    }
    if (p.price < min) {
        min = p.price


    }
}


let avg = sum / products.length;
console.log(sum);
console.log(avg);
console.log(max);
console.log(min);