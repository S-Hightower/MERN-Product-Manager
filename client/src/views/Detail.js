import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {

    const[product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                console.log(res.data.products)})
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div className="container-sm mt-3 mb-5">
            <div className="mb-5">
                <Link to = {'/'}>Back to Main Page</Link>
            </div>
            <h1>Product: {product.title}</h1>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    );
};

export default Detail;