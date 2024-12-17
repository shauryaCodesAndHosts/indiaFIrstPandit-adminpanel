import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function AddPujaSamagri() {

    const [pujas, setPujas] = useState([]);
    const [selectedPujaId, setSelectedPujaId] = useState("");
    const {samagriId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPuja = async () => {
          try {
            const response = await api.get("/puja/getAll");
            setPujas(response.data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
        fetchPuja();
      }, []);
    
      const handleAddPuja = async (e) => {
        e.preventDefault();
        if (!selectedPujaId) {
          alert("Please select a product to add.");
          return;
        }
    
        try {
          await api.put(`/samagris/edit/addPuja/${samagriId}`, {
            id: selectedPujaId, // Send product ID in the request body
          });
          alert("Product added to Samagri successfully!");
          navigate("/samagri");
        } catch (error) {
          console.error("Error adding product to Samagri:", error);
        }
      };
    


    return (
        <div>
                <div className="add-samagri-container">
      <h1 style={{color: 'black'  }} >Add Puja to Samagri</h1>
      <form onSubmit={handleAddPuja}>
        <div className="form-group">
          <label htmlFor="pujaSelect">Select Puja:</label>
          <select
            id="pujaSelect"
            value={selectedPujaId}
            onChange={(e) => setSelectedPujaId(e.target.value)}
            required
          >
            <option value="">-- Select a Puja --</option>
            {pujas.map((puja) => (
              <option key={puja.id} value={puja.id}>
                {puja.name} (ID: {puja.id})
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Puja</button>
      </form>
    </div>

        </div>
    )
}

export default AddPujaSamagri
