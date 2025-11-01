import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Atuhentication from './Atuhentication';
import { Loader } from 'lucide-react';
// Lazy imports
const Products = lazy(() => import('./../pages/Products'));
const Login = lazy(() => import('./../pages/Login'));
const Register = lazy(() => import('./../pages/Register'));
const CreateProduct = lazy(() => import('./../pages/admin/CreateProduct'));
const ProductDetailes = lazy(() => import('../components/ProductDetailes'));
const Profile = lazy(() => import('./../pages/user/Profile'));
const Cart = lazy(() => import('../pages/Cart'));
const PageNotFound = lazy(() => import('./../PageNotFound'));

function Mainroutes() {
  return (
    <Suspense fallback={<div className='animate-spin flex h-screen w-screen items-center justify-center overflow-hidden'><Loader /></div>}>
      <Routes>

        <Route path='/' element={<Products />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/admin/create-product' element={<Atuhentication><CreateProduct /></Atuhentication>} />
        <Route path='/admin/user-profile' element={<Atuhentication><Profile /></Atuhentication>} />
        <Route path='/product/:id' element={<Atuhentication><ProductDetailes /></Atuhentication>} />
        <Route path='/cart' element={<Atuhentication><Cart /></Atuhentication>} />

        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Suspense>
  )
}

export default Mainroutes;
