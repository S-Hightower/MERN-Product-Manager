import React from "react";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {

    return (
        <div className="container-sm mt-3 mb-5">
            <h1>All Products</h1>
            {props.products.map( (product, index) => 
                <div key = {index}>
                    <Link to={`/` + product._id}>
                        {product.title}
                    </Link>
                </div>
            )}
        </div>//container
    )
};

export default ProductDisplay;