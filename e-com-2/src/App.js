import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Container/Home';
import Shop from './Container/Shop';
import Detail from './Container/Detail';
import Cart from './Container/Cart';
import Checkout from './Container/Checkout';
import Contact from './Container/Contact';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop/:category"' element={<Shop/>} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout'element={<Checkout/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
