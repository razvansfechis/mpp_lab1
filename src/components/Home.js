import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Cars from './Cars';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const handleUpdate = (id, name, brand, price) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Brand', brand);
        localStorage.setItem('Price', price);
        localStorage.setItem('Id', id);
    }

    let history = useNavigate();

    const handleDelete = (id) => {
        var index = Cars.map(function(c) {
            return c.id;
        }).indexOf(id);

        Cars.splice(index,1);
    
        history('/');
    }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Cars && Cars.length > 0 ? (
                            Cars.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.Name}</td>
                                    <td>
                                        <Link to={`/showDetails/${item.id}`}>
                                            <Button>Show Details</Button>
                                        </Link>
                                        &nbsp;
                                        <Link to={'/update'}>
                                            <Button onClick={() => handleUpdate(item.id, item.Name, item.Brand, item.Price)}>Update</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="2">No data available</td></tr>
                        )}
                    </tbody>
                </Table>
                <br />
                <Link className='d-grid gap-2' to="/add">
                    <Button size="lg">Add</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;