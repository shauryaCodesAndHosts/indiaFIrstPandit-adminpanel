import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from '../api/api';

const EditPuja = () => {
    const { id } = useParams(); // Get the puja ID from the URL parameters

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

    const navigate = useNavigate(); // Navigation hook to redirect after updating the puja

    useEffect(() => {
        fetchPuja(); // Fetch the puja details when the component mounts
    }, []);

    const fetchPuja = async () => {
        try {
            const response = await api.get(`/puja/${id}`);
            setPuja(response.data); // Set the puja data to state
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPuja({ ...puja, [name]: value }); // Update state when input fields change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/puja/edit/${id}`, puja); // Send updated puja data to the server
            navigate('/puja'); // Redirect to the puja list page after successful update
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Edit Puja</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={puja.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="description"
                    value={puja.description}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="benefits"
                    value={puja.benefits}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="mantra"
                    value={puja.mantra}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="panditNeeded"
                    value={puja.panditNeeded}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="freqExtraAddedPandit"
                    value={puja.freqExtraAddedPandit}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="amount"
                    value={puja.amount}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="image1"
                    value={puja.image1}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="image2"
                    value={puja.image2}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="image3"
                    value={puja.image3}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="pujaCategoryId"
                    value={puja.pujaCategoryId}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="samagriId"
                    value={puja.samagriId}
                    onChange={handleChange}
                />

                <button type="submit">Update Puja</button>
            </form>
        </div>
    );
};

export default EditPuja;
