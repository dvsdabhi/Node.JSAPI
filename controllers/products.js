const Product = require("../model/product");

const getAllProducts = async(req,res) => {

    // return all data
    const data = await Product.find({});
    res.status(200).json({ data });

    // return search result
    // const data = await Product.find(req.query);
    // res.status(200).json({ data });


    // return all company=mi 
    // const { company } = req.query;
    // const queryObject = {};

    // if(company){
    //     queryObject.company = company;
    //     console.log(queryObject);
    // }
    // const data = await Product.find(queryObject);
    // res.status(200).json({ data });

    // return all match company=apple and name=iphone data
    // const { company,name,featured } = req.query;
    // const queryObject = {};

    // if(company){
    //     queryObject.company = company;
    // }

    // if(featured){
    //     queryObject.featured = featured;
    // }

    // if(name){
    //     queryObject.name = {$regex: name, $options: 'i'};
    // }
    // console.log(queryObject);

    // const data = await Product.find(queryObject);
    // res.status(200).json({ data });

    // return sorting data
    // const { sort } = req.query;
    // const queryObject = {};
    // let apidata = Product.find(queryObject);

    // if(sort){
    //     let sortFix = sort.replace(","," ");
    //     apidata = apidata.sort(sortFix);
    // }

    // const data = await apidata;
    // res.status(200).json({ data });

    //return some field
    // const { select } = req.query;
    // const queryObject = {};
    // let apidata = Product.find(queryObject);

    // if(select){
    //     let selectFix = select.split(",").join(" ");
    //     apidata = apidata.select(selectFix);
    // }

    // const data = await apidata;
    // res.status(200).json({data});

    // Paginations
    // const page = Number(req.query.page) || 1;
    // const limit = Number(req.query.limit) || 3;
    // const skip = (page - 1) * limit;
    // const queryObject = {};
    // let apidata = Product.find(queryObject);

    // apidata = apidata.skip(skip).limit(limit);

    // const data = await apidata;
    // res.status(200).json({data});

};

const getAllProductsTesting = async (req,res) => {
    res.status(200).json({msg:"I am getAllProductsTesting"});
};

module.exports = { getAllProducts, getAllProductsTesting };