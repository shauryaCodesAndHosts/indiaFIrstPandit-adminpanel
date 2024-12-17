// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CategoryList from './components/CategoryList';
// import AddCategory from './components/AddCategory';
// import EditCategory from './components/EditCategory';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CategoryList />} />
//         <Route path="/add-category" element={<AddCategory />} />
//         <Route path="/edit-category/:id" element={<EditCategory />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './components/category/CategoryList';
import AddCategory from './components/category/AddCategory';
import EditCategory from './components/category/EditCategory';
import Login from './components/login-out/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ProductList from './components/product/ProductList';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import ProductCategoryList from './components/category/ProductCategoryList';
import AddPujaCategory from './components/pujaCategory/AddPujaCategory';
import PujaCagtegoryList from './components/pujaCategory/PujaCagtegoryList';
import EditPujaCategory from './components/pujaCategory/EditPujaCategory';
import PujaList from './components/puja/PujaList';
import AddPuja from './components/puja/AddPuja';
import EditPuja from './components/puja/EditPuja';
import PujasPujaCategory from './components/pujaCategory/PujasPujaCategory';
import SamagriList from './components/samagri/SamagriList';
import AddProductSamagri from './components/samagri/AddProductSamagri';
import AddSamagri from './components/samagri/AddSamagri';
import AddPujaSamagri from './components/samagri/AddPujaSamagri';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category"
          element={
            <ProtectedRoute>
              <CategoryList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-category"
          element={
            <ProtectedRoute>
              <AddCategory />
            </ProtectedRoute>
          }
        />


        <Route
          path="/edit-category/:id"
          element={
            <ProtectedRoute>
              <EditCategory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/category-product/:id"
          element={
            <ProtectedRoute>
              <ProductCategoryList   />
            </ProtectedRoute>
          }
        />


        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />


        <Route
          path="/edit-product/:id"
          element={
            <ProtectedRoute>
              <EditProduct   />
            </ProtectedRoute>
          }
        />

          <Route
          path='/add-puja-category'
          element={
            <ProtectedRoute>
              <AddPujaCategory></AddPujaCategory>
            </ProtectedRoute>
          }
          />

          <Route
          path = '/puja-category'
         element = {
          <ProtectedRoute>
            <PujaCagtegoryList></PujaCagtegoryList>
          </ProtectedRoute>
         }
         />

         <Route
         path='/edit-puja-category/:id'
          element = {
            <ProtectedRoute>
              <EditPujaCategory></EditPujaCategory>
            </ProtectedRoute>
          }
          
          />


          <Route
          path='/pujas-category-puja/:id'
          element={
            <ProtectedRoute>
              <PujasPujaCategory></PujasPujaCategory>
            </ProtectedRoute>
          }
          />


          <Route
          path='/puja'
          element = {
            <ProtectedRoute>
              <PujaList></PujaList>
            </ProtectedRoute>
          }
          
          />


          <Route 
          path='/add-puja'
          element = {
            <ProtectedRoute>
              <AddPuja></AddPuja>
            </ProtectedRoute>
          }
          />

          <Route 
          path='/edit-puja/:id'
          element ={
            <ProtectedRoute>
              <EditPuja></EditPuja>
            </ProtectedRoute>
          }
          />

          <Route 
          path='/samagri'
          element={
            <ProtectedRoute>
              <SamagriList></SamagriList>
            </ProtectedRoute>
          }
          >
          </Route>

          <Route
          path='/add-samagri'
          element={
            <ProtectedRoute>
              <AddSamagri></AddSamagri>
            </ProtectedRoute>
          }
          
          />

          <Route
          path='/samagri/:samagriId/add-product'
          element={
            <ProtectedRoute>            
              <AddProductSamagri></AddProductSamagri>
            </ProtectedRoute>
          }
          >
          </Route>

          <Route
          path='/samagri/:samagriId/add-puja'
          element={
            <ProtectedRoute>
              <AddPujaSamagri></AddPujaSamagri>
            </ProtectedRoute>
          }
          >
          </Route>

      </Routes>
    </Router>
  );
};

export default App;

