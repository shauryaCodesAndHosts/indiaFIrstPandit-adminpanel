import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import "./SamagriList.css"; // CSS for styling

function SamagriList() {
    const [samagris, setSamagris] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchSamagris();
    }, []);

    const fetchSamagris = async () => {
        try {
            const response = await api.get('/samagris/getAll');
            setSamagris(response.data);
        } catch (err) {
            console.error("Error fetching samagris", err);
            setErrorMessage("Failed to fetch samagris. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const deleteSamagri = async (id, name) => {
        if (window.confirm(`Are you sure you want to delete the samagri "${name}"?`)) {
            try {
                await api.delete(`/samagris/delete/${id}`);
                setSamagris(samagris.filter((samagri) => samagri.id !== id));
            } catch (error) {
                console.error("Error deleting samagri", error);
                setErrorMessage("Failed to delete samagri. Please try again later.");
            }
        }
    };

    return (
        <div>
            <h1>Samagri List</h1>
            <Link to="/add-samagri">
                <button>Add New Samagri</button>
            </Link>

            {loading ? (
                <p>Loading samagris...</p>
            ) : errorMessage ? (
                <p className="error">{errorMessage}</p>
            ) : samagris.length === 0 ? (
                <p>No samagris available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>UUID</th>
                            <th>Name</th>
                            <th>Products</th>
                            <th>Pujas</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {samagris.map((samagri) => (
                            <tr key={samagri.id}>
                                <td>{samagri.id}</td>
                                <td>{samagri.name}</td>
                                <td>
                                    {samagri.productDtos && samagri.productDtos.length > 0 ? (
                                        <ul>
                                            {samagri.productDtos.map((product) => (
                                                <li key={product.id}>{product.name}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        "No Products"
                                    )}
                                </td>
                                <td>
                                    {samagri.pujaDtos && samagri.pujaDtos.length > 0 ? (
                                        <ul>
                                            {samagri.pujaDtos.map((puja) => (
                                                <li key={puja.id}>{puja.name}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        "No Pujas"
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => deleteSamagri(samagri.id, samagri.name)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/edit-samagri/${samagri.id}`}>Edit</Link>
                                    <br></br>
                                    <Link to={`/samagri/${samagri.id}/add-product`}>Add Product</Link>
                                    <br></br>
                                    <Link to={`/samagri/${samagri.id}/add-puja`}>Add Puja</Link>


                                </td>
 
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default SamagriList;
