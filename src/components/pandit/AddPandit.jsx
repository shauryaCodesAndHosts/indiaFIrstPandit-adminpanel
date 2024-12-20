import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function AddPandit() {
  const [pandit, setPandit] = useState({
    name: "",
    contactNumber: "",
    contactNumber2: "",
    expertise: "",
    permanentAddress: "",
    presentAddress: "",
    documentsLink: "",
    numberOfPujaDone: "",
    complaints: "",
    additionalInformation: "",
    verified: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPandit({
      ...pandit,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/priests/create", pandit);
      alert("Pandit added successfully!");
      navigate("/pandits");
    } catch (error) {
      console.error("Error adding pandit:", error);
    }
  };

  return (
    <div className="add-pandit-container">
      <h1>Add Pandit</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={pandit.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter primary contact number"
            value={pandit.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber2">Alternate Contact Number:</label>
          <input
            type="text"
            id="contactNumber2"
            name="contactNumber2"
            placeholder="Enter alternate contact number"
            value={pandit.contactNumber2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expertise">Expertise:</label>
          <input
            type="text"
            id="expertise"
            name="expertise"
            placeholder="Enter expertise"
            value={pandit.expertise}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="permanentAddress">Permanent Address:</label>
          <textarea
            id="permanentAddress"
            name="permanentAddress"
            placeholder="Enter permanent address"
            value={pandit.permanentAddress}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="presentAddress">Present Address:</label>
          <textarea
            id="presentAddress"
            name="presentAddress"
            placeholder="Enter present address"
            value={pandit.presentAddress}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="documentsLink">Documents Link:</label>
          <input
            type="text"
            id="documentsLink"
            name="documentsLink"
            placeholder="Enter document link"
            value={pandit.documentsLink}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPujaDone">Number of Pujas Done:</label>
          <input
            type="number"
            id="numberOfPujaDone"
            name="numberOfPujaDone"
            placeholder="Enter number of pujas done"
            value={pandit.numberOfPujaDone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaints">Complaints:</label>
          <textarea
            id="complaints"
            name="complaints"
            placeholder="Enter complaints (if any)"
            value={pandit.complaints}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="additionalInformation">Additional Information:</label>
          <textarea
            id="additionalInformation"
            name="additionalInformation"
            placeholder="Enter additional information"
            value={pandit.additionalInformation}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="verified">Verified:</label>
          <input
            type="checkbox"
            id="verified"
            name="verified"
            checked={pandit.verified}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Pandit</button>
      </form>
    </div>
  );
}

export default AddPandit;
