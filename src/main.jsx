import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './componets/Home'
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import AboutUs from './componets/AboutUs';
import ContactUs from './componets/ContactUs';
import ProductListing from './componets/ProductListing';
import CommonLayout from './common/CommonLayout';
import ProductsCard from './common/ProductsCard';



createRoot(document.getElementById('root')).render(
  <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='contact-us' element={<ContactUs />} />
        <Route path='products/:slug?' element={<ProductListing />} />
        <Route path='product-Card/:slug?' element={<ProductsCard />} />


        <Route element={<CommonLayout/>}>
          
          <Route path='about-us' element={<AboutUs />} />

        </Route>

      </Routes>
    </BrowserRouter>
  </>,
)
