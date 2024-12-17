import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from '../api/api';


const EditProduct = () => {

    const {id} = useParams();

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

    // useEffect(
    //     () => {
    //         fetchProduct();
    //     }, []
    // );


    useEffect(() => {
        fetchProduct();
      }, []);
    

    const fetchProduct = async () => {
        try {
            // console.log("here")
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
            console.log(response);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name] : value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/products/edit/${id}`, product)
            navigate('/product')
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div>
            <h1>Edit Product</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />

                <input 
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    required
                />

                <input 
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                ></input>

                <input 
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                />

                <input 
                    type="stock"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    required
                />

                <input 
                    type="text"
                    name="categoryId"
                    value={product.categoryId}
                    onChange={handleChange}
                    required
                />

                <button type="submit" >Update Product</button>
            </form>
            
        </div>
    );
};

export default EditProduct;
