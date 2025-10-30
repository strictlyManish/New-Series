import { Routes, Route } from 'react-router-dom'
import Home from './../pages/Home';
import Products from './../pages/Products';
import Login from './../pages/Login';
import Register from './../pages/Register';
import CreateProduct from './../pages/admin/CreateProduct';
import ProductDetailes from '../components/ProductDetailes';
import { useSelector } from 'react-redux';
import Profile from './../pages/user/Profile';




function Mainroutes() {

  const { user } = useSelector((state) => state.useReducer);

  return (
    <Routes>
      <Route path='/' element={user ? <Products /> : <Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/admin/create-product' element={<CreateProduct />} />
      <Route path='/admin/user-profile' element={<Profile />} />
      <Route path='/product/:id' element={<ProductDetailes />} />
    </Routes>
  )
}

export default Mainroutes