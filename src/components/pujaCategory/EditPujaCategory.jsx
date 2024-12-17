import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

function EditPujaCategory() {

    const { id } = useParams();
    
    const[pujaCategory, setPujaCategory] = useState(
        {
            name:'',
            image:'',
            description:'',
            totalItems:0
        }
    );
    
    const navigate = useNavigate();

    useEffect(
        ()=> {
            fetchPujaCategory();
        },[]
    );

    const fetchPujaCategory = async () => {
        try {
            const response = await api.get(`/pujaCategory/${id}`);
            setPujaCategory(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPujaCategory({...pujaCategory, [name] : value})
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/pujaCategory/edit/${id}`, pujaCategory);
            navigate('/puja-category');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>

<div>
      <h1>Edit Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={pujaCategory.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          value={pujaCategory.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={pujaCategory.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="number"
          name="totalItems"
          value={pujaCategory.totalItems}
          onChange={handleChange}
        />
        <button type="submit">Update Category</button>
      </form>
    </div>

            
        </div>
    )
}

export default EditPujaCategory
