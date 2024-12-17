import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const AddPujaCategory = () => {

    const[pujaCategory, setPujaCategory] = useState(
        {
            name:'',
            image:'',
            description:'',
            totalItems:0
        }
    );

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name , value} = e.target ;
        setPujaCategory({...pujaCategory, [name]:value})
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try {
            await api.post("pujaCategory/create", pujaCategory);
            navigate('/puja-category');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
              <div className="add-category-container">
    <h1>Add Category</h1>
    <form className="add-category-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={pujaCategory.name}
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
          value={pujaCategory.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={pujaCategory.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="totalItems">Total Items:</label>
        <input
          type="number"
          id="totalItems"
          name="totalItems"
          placeholder="Total Items"
          value={pujaCategory.totalItems}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Category</button>
    </form>
  </div>

        </div>
    )
}

export default AddPujaCategory;
