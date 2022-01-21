const { request } = require("express");
const { model } = require("mongoose");
const Product = require("../models/product.model");

//Read All
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.jsnon({message: "Something went wrong", error: err}))
};

//Read One
module.exports.findOneProduct = (req, res) => {
    Product.findById({_id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

//Create
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

//Update
module.exports.updateProduct = (req, res) => {
    Product.updateOne(req.params.id, req.body)
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

//Delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne(req.params.id)
    .then(deletedProduct => res.json(deletedProduct))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};