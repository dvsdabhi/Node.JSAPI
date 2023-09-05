require("dotenv").config();
const connectDB = require("./db/config");
const Product = require("./model/product");

const ProductJson = require("./product.json");

const start = async () => {
    try{
        await connectDB(process.env.connection_url);
        await Product.deleteMany();
        await Product.create(ProductJson);
    }catch(error){
        console.log(error);
    }
}

start();