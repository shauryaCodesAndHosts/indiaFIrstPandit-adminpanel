// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Import the CSS file

// const Home = () => {
//   return (
//     <div style={styles.container}>
//       <h1>Welcome to the Inventory Management System</h1>
//       <div style={styles.links}>
//         <Link to="/product" style={styles.link}>
//           Product
//         </Link>
//         <Link to="/category" style={styles.link}>
//           Category
//         </Link>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '50px',
//   },
//   links: {
//     marginTop: '20px',
//   },
//   link: {
//     display: 'inline-block',
//     margin: '10px',
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     textDecoration: 'none',
//     borderRadius: '5px',
//   },
// };

// export default Home;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Import the CSS file

// const Home = () => {
//   return (
//     <div className="home-container">
        
//          <div className="home-content">
//         <h1>Welcome to the Admin Panel</h1>
       
//         <p>Manage Products and Categories</p>
//          <div className="home-links">
           
//         <Link to="/product" className="home-link">
//            Manage Products
//         </Link>
//         <Link to="/category" className="home-link">
//             Manage Categories
//         </Link>
//          </div>
//         </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Admin Panel</h1>
        <p>Manage Your Application</p>
        <div className="home-links">
          <Link to="/product" className="home-link">
            Manage Products
          </Link>
          <Link to="/category" className="home-link">
            Manage Categories
          </Link>
          <Link to="/puja-category" className="home-link">
            Manage Puja Categories
          </Link>
          <Link to="/puja" className="home-link">
            Manage Pujas
          </Link>
          <Link to="/samagri" className="home-link">
            Manage Samagris
          </Link>
          <Link to="/users" className="home-link">
            Manage Users
          </Link>
          <Link to="/pandits" className="home-link">
            Manage Pandits
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;