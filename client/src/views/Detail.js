import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

const Detail = (props) => {

    const[product, setProduct] = useState("");
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                console.log(res.data.product)})
            .catch(error => console.log(error));
    }, [id]);

    const deleteProduct = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => id)
            .catch(error => console.log(error));
        history.push('/');
    };

    return (
        product.error ?
        <h1>{product.error}</h1> :
        <div className="container-sm mt-3 mb-5">
            <div className="text-end mb-3">
                <Link to = {'/'}>Back to Main Page</Link>
            </div>
            <h1>Product: {product.title}</h1>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
            <div className="text-end mb-3">
                <Link to = {'/api/products/' + product._id + '/edit'}>Edit Product</Link>
            </div>
            <div className="text-end mb-3">
                <button onClick={e => {deleteProduct(product._id)}} className="btn btn-outline-danger">Delete Product</button>
            </div>
        </div>//container
    );
};

export default Detail;