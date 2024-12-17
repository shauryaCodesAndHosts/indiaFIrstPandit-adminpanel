import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

import "./AddCategory.css"; // Import the CSS file

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: '',
    image: '',
    description: '',
    totalItems: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/category/create', category);
      navigate('/category');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };


return (
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
          value={category.name}
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
          value={category.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={category.description}
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
          value={category.totalItems}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Category</button>
    </form>
  </div>
);
};

export default AddCategory;
