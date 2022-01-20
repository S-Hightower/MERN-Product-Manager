const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.post("/", ProductController.createProduct);
};