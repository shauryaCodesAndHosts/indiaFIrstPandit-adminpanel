import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

function EditPandit() {
  const { id } = useParams(); // Get the Pandit ID from the URL
  const [pandit, setPandit] = useState(null);
  const navigate = useNavigate();

  // Fetch existing Pandit details
  useEffect(() => {
    const fetchPandit = async () => {
      try {
        const response = await api.get(`/priests/${id}`);
        setPandit(response.data);
      } catch (error) {
        console.error("Error fetching pandit details:", error);
      }
    };

    fetchPandit();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPandit((prevPandit) => ({
      ...prevPandit,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/priests/edit/${id}`, pandit);
      alert("Pandit updated successfully!");
      navigate("/pandits");
    } catch (error) {
      console.error("Error updating pandit:", error);
    }
  };

  // Render loading state
  if (!pandit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-pandit-container">
      <h1>Edit Pandit</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
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
            value={pandit.expertise}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="permanentAddress">Permanent Address:</label>
          <textarea
            id="permanentAddress"
            name="permanentAddress"
            value={pandit.permanentAddress}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="presentAddress">Present Address:</label>
          <textarea
            id="presentAddress"
            name="presentAddress"
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
            value={pandit.numberOfPujaDone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaints">Complaints:</label>
          <textarea
            id="complaints"
            name="complaints"
            value={pandit.complaints}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="additionalInformation">Additional Information:</label>
          <textarea
            id="additionalInformation"
            name="additionalInformation"
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
        <button type="submit">Update Pandit</button>
      </form>
    </div>
  );
}

export default EditPandit;
