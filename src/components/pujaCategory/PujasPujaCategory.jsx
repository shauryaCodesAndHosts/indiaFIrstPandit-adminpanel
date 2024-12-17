import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom"
import api from "../api/api";

function PujasPujaCategory() {

    const {id} = useParams();
    console.log(id)
    const [puja, setPuja] = useState([]);
    useEffect (
        () => {
            fetchPuja();
        },[]
    );

    const fetchPuja = async () => {
        try {
            const response = await api.get(`/pujaCategory/getAllPujas/${id} `);
            console.log(response.data)
            setPuja(response.data);
            } 
                
        catch (error) {
            console.log(error);
        }
    };

    const deletePuja = async () => {
        if(window.confirm("Are you sure you want to delete this puja ??"))
        {
            try {
                await api.delete(`/puja/delete/${id}`);
                setPuja(puja.filter( (puja)=> puja.id != id ));
            } catch (error) {
                console.log(error);
            }
        }
    };


    return (
        <div>
            

            <div>
            

            <div>
            <h1>Puja List</h1>
        
        <Link to={"/add-puja"}><button>Add new Puja</button></Link>
        
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Benefits</th>
                        <th>Mantra</th>
                        <th>Pandit Needed</th>
                        <th>Freq. Extra Pandit</th>
                        <th>Amount</th>
                        <th>Image 1</th>
                        <th>Image 2</th>
                        <th>Image 3</th>
                        <th>Puja Category ID</th>
                        <th>Samagri ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {puja.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                            <td>{p.benefits}</td>
                            <td>{p.mantra}</td>
                            <td>{p.panditNeeded}</td>
                            <td>{p.freqExtraAddedPandit}</td>
                            <td>{p.amount}</td>
                            {/* <td>
                                <img src={p.image1} alt="Image 1" width="100" />
                            </td>
                            <td>
                                <img src={p.image2} alt="Image 2" width="100" />
                            </td>
                            <td>
                                <img src={p.image3} alt="Image 3" width="100" />
                            </td> */}
                            <td>{p.image1}</td>
                            <td>{p.image2}</td>
                            <td>{p.image3}</td>
        
                            <td>{p.pujaCategoryId}</td>
                            <td>{p.samagriId }</td>
                            <td>
                                <button onClick={() => deletePuja(p.id)}>Delete</button>
                                <Link to={`/edit-puja/${p.id}`}>
                                <button >Edit</button>                        
                                </Link>
        
                            </td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
        
        
        
                </div>
        


        </div>
    )
}

export default PujasPujaCategory
