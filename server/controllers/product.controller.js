const { request } = require("express");
const { model } = require("mongoose");
const Product = require("../models/product.model");

//Read All
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.jsnon({message: "Something went wrong", error: err}))
};

//Read One
module.exports.findOneProduct = (req, res) => {
    Product.findById({_id: req.params.id})
        .then(oneProduct => res.json({products: oneProduct}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

//Create
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({product: newProduct}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};