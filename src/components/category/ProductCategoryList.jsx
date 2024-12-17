import { useEffect, useState } from "react"
import api from "../api/api";
import { Link, useParams } from "react-router-dom";
// import "./ProductList.css"; // Import the CSS file


function ProductCategoryList() {
    const { id } = useParams();
    console.log(id)
    const [products, setProducts] = useState([]); 
    //products is a state variable which will have products 

    useEffect( ()=> {
        fetchProducts();
    },[]);
    // it is a hook that is used to perform things like fetching 
    //it have an empty dependency array 

    const fetchProducts = async () =>{
        try{
            const response = await api.get(`/category/getAllProducts/${id}`);
            setProducts(response.data);
        } catch(err)
        {
            console.error("error fetching products", err);
        }
    };

    
    const deleteProduct = async (id) =>
    {
        if(window.confirm('Are you sure you want to delete this product ??'))
        {
            try {
                await api.delete(`/products/delete/${id}`);
                setProducts(products.filter( (product) => product.id != id ));
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>
          <h1>Product List</h1>
          <Link to="/add-product">Add New Product</Link>
          <table>
            <thead>
              <tr>
                <th>UUID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Image URL</th>
                {/* <th>Category</th> */}
                <th>Category Id</th>
                <th>Delete Product</th>
                <th>Edit Product</th>
                <th>Creation TIme</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.image}</td>
                  {/* <td>{product.category.name}</td> */}
                  <td>{product.categoryId}</td>
                  <td>
                    <button onClick={() => deleteProduct(product.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={`/edit-product/${product.id}`}>Edit</Link>
                  </td>
                  <td>{product.createdAt}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default ProductCategoryList;