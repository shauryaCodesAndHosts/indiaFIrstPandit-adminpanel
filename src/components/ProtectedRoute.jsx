// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('jwtToken');
//   return token ? children : <Navigate to="/login" />; //if token exists then it returns the children else it navigates to the /login method 
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Import a library to decode JWTs

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('jwtToken');

  if (token) {
    try {
      // Decode the JWT to get its payload, including the expiration time
      const decodedToken = jwtDecode(token); 
      // Check if the token is expired (compare exp claim with current time)
      if (decodedToken.exp * 1000 < Date.now()) {
        // Token is expired, redirect to login
        localStorage.removeItem('jwtToken'); // Optionally remove the expired token
        return <Navigate to="/login" />; 
      }
    } catch (error) {
      // Token is invalid or unable to decode, redirect to login
      return <Navigate to="/login" />; 
    }
  }

  // If token doesn't exist or is valid, render the children
  return token ? children : <Navigate to="/login" />; 
};

export default ProtectedRoute;