import React, { useEffect, useState} from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}/edit`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        history.push('/');
    };

    return (
        <div className="container-sm mt-3 mb-5">
            <div className="text-end mb-3">
                <Link to = {'/'}>Back to Main Page</Link>
            </div>
            <h1>Update a Project</h1>
            <form onSubmit={Update}>
                <div className="form-group mt-3">
                    <input type="text" className="form-control mb-3" onChange={e => setTitle(e.target.value)} value={title}/>
                    <input type="text" className="form-control mb-3" onChange={e => setPrice(e.target.value)} value={price}/>
                    <input type="text" className="form-control" onChange={e => setDescription(e.target.value)} value={description}/>
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn-lg btn btn-info">Update Product</button>
                </div>
            </form>
        </div>//container
    )
};

export default Update;