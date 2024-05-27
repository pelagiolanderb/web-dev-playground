import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import FrontStoreLogIn from '../front-store/FrontStoreLogIn';
import FrontStoreMainContent from '../front-store/MainContent';
import ProductListing from '../front-store/ProductListing';
import ViewCart from '../front-store/ViewCart';
import BackStoreMainContent from '../back-store/MainContent';
import BackStoreLogIn from '../back-store/BackStoreLogIn';
import ManageProduct from '../back-store/ManageProduct';
import ManageUser from '../back-store/ManageUser';

const StoreRouter = () => {
  return (
    <Router>
      <Routes>
        {/* front-store pages */}
        <Route 
          path='/front-store'
        >
          <Route path='main' element={<FrontStoreMainContent />}>
            <Route 
              path='product-listing' 
              element={<ProductListing />} 
            />
            <Route 
              path='view-cart' 
              element={<ViewCart />} 
            />
          </Route>
          <Route 
            path='login' 
            element={<FrontStoreLogIn />} 
          />
          <Route 
            path='register' 
            element={<RegistrationForm type='front-store'/>} 
          />
        </Route>

        {/* back-store pages */}
        <Route 
          path='/back-store'
        >
          <Route path='main' element={<BackStoreMainContent />}>
            <Route 
              path='manage-product' 
              element={<ManageProduct />} 
            />
            <Route 
              path='manage-user' 
              element={<ManageUser />} 
            />
          </Route>
          <Route 
            path='login' 
            element={<BackStoreLogIn />} 
          />
          <Route 
            path='register' 
            element={<RegistrationForm type='back-store'/>} 
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default StoreRouter