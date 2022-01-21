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
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new: true})
        .then(result => res.json(updatedProduct))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

//Delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(result => res.json(deletedProduct))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};