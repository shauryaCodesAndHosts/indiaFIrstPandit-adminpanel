import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import "./AddSamagri.css" ;

function AddProductSamagri() {
  const [products, setProducts] = useState([]); // All available products
  const [selectedProductId, setSelectedProductId] = useState(""); // Selected product ID from dropdown
  const { samagriId } = useParams(); // Get samagri ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products/getAll");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!selectedProductId) {
      alert("Please select a product to add.");
      return;
    }

    try {
      await api.put(`/samagris/edit/addProduct/${samagriId}`, {
        id: selectedProductId, // Send product ID in the request body
      });
      alert("Product added to Samagri successfully!");
      navigate("/samagri");
    } catch (error) {
      console.error("Error adding product to Samagri:", error);
    }
  };

  return (
    <div className="add-samagri-container">
      <h1 style={{color: 'black'  }} >Add Product to Samagri</h1>
      <form onSubmit={handleAddProduct}>
        <div className="form-group">
          <label htmlFor="productSelect">Select Product:</label>
          <select
            id="productSelect"
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            required
          >
            <option value="">-- Select a Product --</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} (ID: {product.id})
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductSamagri;
