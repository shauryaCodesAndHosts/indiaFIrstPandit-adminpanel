import { useState } from "react";
import api from '../api/api';
import { useNavigate } from "react-router-dom";

function AddPuja() {
    const [puja, setPuja] = useState({
        name: '',
        description: '',
        benefits: '',
        mantra: '',
        panditNeeded: '',
        freqExtraAddedPandit: '',
        amount: '',
        image1: '',
        image2: '',
        image3: '',
        pujaCategoryId: '',
        samagriId: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPuja({ ...puja, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/puja/create', puja); // Send the new puja data to the server
            navigate('/puja'); // Redirect to the puja list page after successful creation
        } catch (error) {
            console.error('Error adding puja:', error);
        }
    };

    return (
        <div className="add-puja-container">
            <h1>Add Puja</h1>
            <form className="add-puja-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={puja.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={puja.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="benefits">Benefits:</label>
                    <textarea
                        id="benefits"
                        name="benefits"
                        placeholder="Benefits"
                        value={puja.benefits}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="mantra">Mantra:</label>
                    <input
                        type="text"
                        id="mantra"
                        name="mantra"
                        placeholder="Mantra"
                        value={puja.mantra}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="panditNeeded">Pandit Needed:</label>
                    <input
                        type="number"
                        id="panditNeeded"
                        name="panditNeeded"
                        placeholder="Pandit Needed"
                        value={puja.panditNeeded}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="freqExtraAddedPandit">Frequency Extra Added Pandit:</label>
                    <input
                        type="number"
                        id="freqExtraAddedPandit"
                        name="freqExtraAddedPandit"
                        placeholder="Frequency Extra Added Pandit"
                        value={puja.freqExtraAddedPandit}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        value={puja.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image1">Image URL 1:</label>
                    <input
                        type="text"
                        id="image1"
                        name="image1"
                        placeholder="Image URL 1"
                        value={puja.image1}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image2">Image URL 2:</label>
                    <input
                        type="text"
                        id="image2"
                        name="image2"
                        placeholder="Image URL 2"
                        value={puja.image2}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image3">Image URL 3:</label>
                    <input
                        type="text"
                        id="image3"
                        name="image3"
                        placeholder="Image URL 3"
                        value={puja.image3}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pujaCategoryId">Puja Category ID:</label>
                    <textarea
                        id="pujaCategoryId"
                        name="pujaCategoryId"
                        placeholder="Enter puja category ID"
                        value={puja.pujaCategoryId}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="samagriId">Samagri ID (optional):</label>
                    <textarea
                        id="samagriId"
                        name="samagriId"
                        placeholder="Enter samagri ID"
                        value={puja.samagriId}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Add Puja</button>
            </form>
        </div>
    );
}

export default AddPuja;
