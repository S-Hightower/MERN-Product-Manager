import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductDisplay = props => {

    const { removeFromDom } = props;

    const deleteProduct = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {removeFromDom(id)})
            .catch(error => console.log(error));
    };

    return (
        <div className="container-sm mt-3 mb-5">
            <h1>All Products</h1>
            <div>
                {props.products.map((product, index) => {
                    return (<div key={index} className="mb-3">
                        <Link to={`/api/products/` + product._id}>
                            {product.title}
                        </Link>
                        |||
                        <button onClick={e => {deleteProduct(product._id)}} className="btn btn-outline-danger btn-sm">Delete Product</button>
                    </div>)
                })}
            </div>
        </div>//container
    )
};

export default ProductDisplay;