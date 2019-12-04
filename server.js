const express = require("express");
const cors =require("cors");
const app = express();
const products = require("./products");
app.listen(3000)

app.use(cors());
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");

});
app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/product/:productId",(req,res)=>{
    const id = req.params.productId;
    const productFound = products.find(p => p._id==id);
    res.send(productFound   );

})



