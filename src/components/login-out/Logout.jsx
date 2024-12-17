import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); // Clear the token
    navigate('/login'); // Redirect to login page
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
