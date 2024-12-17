    import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';
import "./AddCategory.css"; // Import the CSS file


const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get('/category/getAll');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const deleteCategory = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await api.delete(`/category/delete/${id}`); // Add this endpoint in your backend if it doesn't exist
        setCategories(categories.filter((category) => category.id !== id));
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const viewProducts = async (id) => {
    try {
      const response = await api.get(`/category/getAllProducts/${id}`);
      console.log('Products for category:', response.data);
    } catch (error) {
      console.error('Error fetching category products:', error);
    }
  };

  

  return (
    <div>
      <h1>Category List</h1>
      <Link to="/add-category">Add New Category</Link>
      <table>
        <thead>
          <tr>
            <th>UUID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Total Items</th>
            <th>Delete Category</th>
            <th>Edit Product</th>
            <th>Created At</th>
            <th>View All Products</th>

          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.image}</td>
              <td>{category.description}</td>
              <td>{category.totalItems}</td>
              <td>
                <button onClick={()=>deleteCategory(category.id)} >Delete</button>
              </td>
              <td>
              <Link to={`/edit-category/${category.id}`}>Edit</Link>
              </td>
              <td>{category.createdAt}</td>
              <td>
                {/* <button onClick={()=>viewProducts(category.id)} >View All Products</button> */}
                <Link to={`/category-product/${category.id}`}>View All products</Link>
                {console.log(`$(category.id)`)}
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
};


export default CategoryList;
