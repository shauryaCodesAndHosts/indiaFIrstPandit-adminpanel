import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({
    name: '',
    image: '',
    description: '',
    totalItems: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await api.get(`/category/${id}`); // Adjust this endpoint to fetch category by ID
      setCategory(response.data);
      console.log('Fetched category data:', response.data); // Log API response
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/category/edit/${id}`, category); // Adjust this endpoint to update category by ID
      navigate('/category');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div>
      <h1>Edit Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          value={category.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={category.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="number"
          name="totalItems"
          value={category.totalItems}
          onChange={handleChange}
        />
        <button type="submit">Update Category</button>
      </form>
    </div>
  );
};

export default EditCategory;
