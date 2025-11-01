import { Routes, Route } from 'react-router-dom';
import Products from './../pages/Products';
import Login from './../pages/Login';
import Register from './../pages/Register';
import CreateProduct from './../pages/admin/CreateProduct';
import ProductDetailes from '../components/ProductDetailes';
import Profile from './../pages/user/Profile';
import PageNotFound from './../PageNotFound';
import Atuhentication from './Atuhentication';
import Cart from '../pages/Cart';



function Mainroutes() {
  return (
    <Routes>

      <Route path='/' element={<Products />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/admin/create-product' element={<Atuhentication><CreateProduct /></Atuhentication>} />
      <Route path='/admin/user-profile' element={<Atuhentication><Profile /></Atuhentication>} />
      <Route path='/product/:id' element={<Atuhentication><ProductDetailes /></Atuhentication>} />
      <Route path='/cart' element={<Atuhentication><Cart/></Atuhentication>} />

      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )
}

export default Mainroutes;
