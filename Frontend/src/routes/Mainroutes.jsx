import { Routes, Route } from 'react-router-dom'
import Products from './../pages/Products';
import Login from './../pages/Login';
import Register from './../pages/Register';
import CreateProduct from './../pages/admin/CreateProduct';
import ProductDetailes from '../components/ProductDetailes';
import Profile from './../pages/user/Profile';
import PageNotFound from './../PageNotFound';
import Atuhente from './Atuhente';




function Mainroutes() {



  return (
    <Routes>

      <Route path='/' element={<Products />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/admin/create-product' element={<Atuhente> <CreateProduct /> </Atuhente>} />
      <Route path='/admin/user-profile' element={<Atuhente> <Profile /></Atuhente>} />
      <Route path='/product/:id' element={<Atuhente> <ProductDetailes /></Atuhente>} />


      <Route path='*' element={<PageNotFound />} />


    </Routes>
  )
}

export default Mainroutes