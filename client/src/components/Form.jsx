import React, { useState } from "react";
import axios from 'axios';

const Form = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000', {title, price, description})
            .then(res => console.log(res))
            .catch(error => console.log(error));
        setTitle('');
        setPrice('');
        setDescription('');

        e.target.reset();
    };

    return (
        <div className="container-sm mt-3 mb-5">
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <input type="text" placeholder="Product Title" className="form-control mb-3" onChange={e => setTitle(e.target.value)} value={title}/>
                    <input type="text" placeholder="Price" className="form-control mb-3" onChange={e => setPrice(e.target.value)} value={price}/>
                    <input type="text" placeholder="Description" className="form-control" onChange={e => setDescription(e.target.value)} value={description}/>
                </div>
                <div className="mt-3">
                    <button className="btn btn-lg btn btn-info">Add Product</button>
                </div>
            </form>
        </div>//container
    )
};

export default Form;