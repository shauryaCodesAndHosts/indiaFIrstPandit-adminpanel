import { useState } from "react";
import api from "../api/api";
import { Navigate, useNavigate } from "react-router-dom";

function AddSamagri() {

    const [samagri,setSamagri] = useState(
        {
            name:"",
        }
    );
    

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setSamagri({...samagri, [name]:value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/samagris/create',samagri);
            navigate('/samagri');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>

<div className="add-product-container">
          <h1>Add Product</h1>
          <form className="add-product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={samagri.name}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Add Samagri</button>
          </form>
        </div>


            
        </div>
    )
}

export default AddSamagri;
