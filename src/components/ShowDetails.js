import { Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Cars from './Cars';

function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    console.log('ID:', id); // Log the id parameter for debugging

    // Find the car object with the corresponding id
    const car = Cars.find(car => car.id === id);
    console.log('Car:', car); // Log the car object for debugging

    const goBackToHome = () => {
        navigate('/');
    };

    return (
        <div style={{ margin: "10rem" }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {car ? (
                        <tr key={car.id}>
                            <td>{car.Name}</td>
                            <td>{car.Brand}</td>
                            <td>${car.Price}</td>
                        </tr>
                    ) : (
                        <tr><td colSpan="3">Car details not available</td></tr>
                    )}
                </tbody>
            </Table>
            <button onClick={goBackToHome}>Back to Home</button>
        </div>
    );
}

export default Details;