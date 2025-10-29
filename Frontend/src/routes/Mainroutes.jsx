import { Routes, Route } from 'react-router-dom'
import Home from './../pages/Home';
import Products from './../pages/Products';
import Login from './../pages/Login';
import Register from './../pages/Register';
import CreateProduct from './../pages/admin/CreateProduct';
import ProductDetailes from '../components/ProductDetailes';

function Mainroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />


      <Route path='/admin/create-product' element={<CreateProduct />} />
      <Route path='/product/:id' element={<ProductDetailes/>} />
    </Routes>
  )
}

export default Mainroutes