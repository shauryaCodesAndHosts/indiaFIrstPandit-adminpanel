import { useState } from "react"
import api from '../api/api'
import { useNavigate } from "react-router-dom";

function AddProduct() {

    const [product, setProduct] = useState(
        {
            name:'',
            image:'',
            description:'',
            price:'',
            stock:'',
            categoryId:''
        }
    );

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await api.post('/products/create', product);
          navigate('/product');
        } catch (error) {
          console.error('Error adding category:', error);
        }
      };
    
    

      return (
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
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL:</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Image URL"
                value={product.image}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                value={product.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input 
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={handleChange}
              />
            </div>


            <div className="form-group">
              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                placeholder="Stock"
                value={product.stock}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
                <label htmlFor="categoryId">Category Id</label>
                <textarea 
                    id="categoryId"
                    name="categoryId"
                    placeholder="Enter category Id"
                    value={product.categoryId}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit">Add Category</button>
          </form>
        </div>
      );
      };
      

export default AddProduct;
