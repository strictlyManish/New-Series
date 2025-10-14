import { Route, Routes } from 'react-router-dom'
import Home from './../pages/Home';
import Login from './../pages/Login';
import Products from './../pages/Products';
import Register from "./../pages/Register"

function Mainroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Mainroutes