const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product-manager")

    .then(() => console.log('Established a connection to the database'))
    .catch(error => console.log('Something went wrong when connecting to the database', error));