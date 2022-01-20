const Product = require("../models/jokes.model");

//Create
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({product: newProduct}))
        .catch(error => res.json({message: "Something went wrong", error: err}));
} ;