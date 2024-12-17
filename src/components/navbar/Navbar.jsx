// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Logout from '../login-out/Logout';
// import './Navbar.css';

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           Admin Page of India First Pandit
//         </Link>
//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <Link to="/" className="navbar-link">
//               Home
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/product" className="navbar-link">
//               Product
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/category" className="navbar-link">
//               Category
//             </Link>
//           </li>
//           <li className="navbar-item">
//             {location.pathname !== '/login' && <Logout />}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Logout from '../login-out/Logout';
// import './Navbar.css';

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           Admin Page of India First Pandit
//         </Link>
//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <Link to="/" className="navbar-link">
//               Home
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/product" className="navbar-link">
//               Product
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/category" className="navbar-link">
//               Category
//             </Link>
//           </li>
//             <li className="navbar-item">
//             {location.pathname !== '/login' && <Logout />}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from '../login-out/Logout';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          India First Pandit
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/product" className="navbar-link">
              Product
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/category" className="navbar-link">
              Category
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/puja-category" className="navbar-link">
              Puja Categories
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/puja" className="navbar-link">
              Pujas
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/samagri" className="navbar-link">
              Samagris
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/users" className="navbar-link">
              Users
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pandits" className="navbar-link">
              Pandits
            </Link>
          </li>
          <li className="navbar-item">
            {location.pathname !== '/login' && <Logout />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
