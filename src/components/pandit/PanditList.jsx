import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

function PanditList() {


    const [priests, setPriests] = useState([]);

    useEffect(
        ()=> {
            fetchPriests();
        },[]
    );

    const fetchPriests = async () => {

        try {
            const response = await api.get('/priests/getAll');
            setPriests(response.data);
        } catch (error) {
            console.error(error);
        }

    };

    const deletePriest = async (id) => {
        
        if(window.confirm("Are you sure you want to delete this pandit ?"));
        {
        try {
            await api.delete(`/priests/delete/${id}`);
            setPriests(priests.filter( (priests) => priests.id != id ));

        } catch (error) {
            console.log(error)
            
        }
    }

    };

    return (
        <div>
            <h1>Pandits of India</h1>
            <Link to="/add-pandit" ><button>Add new pandit</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>UUID</th>
                        <th>Name</th>
                        <th>Contact number 1</th>
                        <th>COntact number 2</th>
                        <th>Expertise</th>
                        <th>Present Address</th>
                        <th>Permanent Address</th>
                        <th>Documents Link</th>
                        <th>Number of Puja's done</th>
                        <th>Complaints</th>
                        <th>Additional Notes</th>
                        <th>Verification Status</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        priests.map(
                            (priest) => (
                                <tr key={priest.id}>
                                    <td>{priest.id}</td>
                                    <td>{priest.name}</td>
                                    <td>{priest.contactNumber}</td>
                                    <td>{priest.contactNumber2}</td>
                                    <td>{priest.expertise}</td>
                                    <td>{priest.presentAddress}</td>
                                    <td>{priest.permanentAddress}</td>
                                    <td>{priest.documentsLink}</td>
                                    <td>{priest.numberOfPujaDone}</td>
                                    <td>{priest.complaints}</td>
                                    <td>{priest.additionalInformation}</td>
                                    <td>{priest.verified ? "yes": "no"}</td>
                                    <td>
                                        <Link ><button onClick={ ()=>deletePriest(priest.id)}>Delete</button></Link>
                                        <br></br>
                                        <Link to={`/edit-pandit/${priest.id}`} ><button>Edit</button></Link>
                                    </td>
                                </tr>

                            )

                        )

                    }


                </tbody>


            </table>

        </div>
    )
}

export default PanditList;