require("dotenv").config();
const express = require("express");
const connectDB = require("./db/config");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

const products_routes = require("./routes/products")

app.get("/",(req,res) =>{
    res.send("Hi, i am live");
});

app.use("/api/products",products_routes);
connectDB();
const start = async() => {
    try{
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes I Am Connected`);
        });
    }catch(error){
        console.log(error);
    }
}

start();