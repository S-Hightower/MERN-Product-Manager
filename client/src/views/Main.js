import axios from "axios";
import React, { useEffect, useState } from "react";

import Form from "../components/Form";
import ProductDisplay from "../components/ProductDisplay";

const Main = (props) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id != id));
    }

    return(
        <div>
            <Form/>
            <hr />
            {loaded && <ProductDisplay products = {products} removeFromDom={removeFromDom} />}
        </div>
    );
};

export default Main;