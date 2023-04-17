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
} from './pages';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/App.css';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/products/:id' element={<Category />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
