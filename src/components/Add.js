import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Cars from './Cars';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';

function Add() {
    const[name, setName] = useState("");
    const[brand, setBrand] = useState("");
    const[price, setPrice] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name,
        b = brand,
        c = price;

        Cars.push({id: uniqueId, Name: a, Brand: b, Price: c})

        history("/");
    }

    return(
         <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrand">
                <Form.Control type="text" placeholder="Enter Brand" required onChange={(e) => setBrand(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control type="text" placeholder="Enter Price" required onChange={(e) => setPrice(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
    )
}

export default Add;