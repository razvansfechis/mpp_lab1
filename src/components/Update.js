import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Cars from './Cars';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';

function Update() {
    const[name, setName] = useState("");
    const[brand, setBrand] = useState("");
    const[price, setPrice] = useState("");
    const[id, setId] = useState("");

    let history = useNavigate();

    var index = Cars.map(function(c) {
        return c.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Cars[index];
        a.Name = name;
        a.Brand = brand;
        a.Price = price;

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setBrand(localStorage.getItem('Brand'))
        setPrice(localStorage.getItem('Price'))
        setId(localStorage.getItem('Id'))
    }, []);

    return(
     <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrand">
                <Form.Control type="text" placeholder="Enter Brand" value={brand} required onChange={(e) => setBrand(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control type="text" placeholder="Enter Price" value={price} required onChange={(e) => setPrice(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
    </div>
    )
}

export default Update;