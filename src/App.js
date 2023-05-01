import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Error,
  Products,
  SingleProduct,
  Category,
  Contact,
  Cart,
  Checkout,
  AfterPayment,
} from './pages';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/products/:id' element={<Category />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/:id' element={<AfterPayment />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
