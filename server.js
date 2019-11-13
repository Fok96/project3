const express = require("express");
const app = express();
const products = require("./products");
app.listen(3000)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");

});
app.get("/products", (req, res) => {
    res.json(products);
});
app.get("/product/:productId", (req, res) => {
    console.log(req.params.productId);
    const Id = req.params.productId;
    let status = null;
    for (let p of products) {
        if (Id == p._id) {
            res.send(p);
            
        }
    if (status == null){
            console.log("lathos id");
            res.json({
                message: "product not found"
            })
        }
    }
});
app.get("/product-v2/:productId",(req,res)=>{
    const id = req.params.productId;
    const productFound = products.find(p => p._id==id);
    res.send(productFound   );

})



