import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import {asyncgetuser} from './app/userAction';

function App() {

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(asyncgetuser())
    })


  return (
    <div className='h-screen bg-gray-800 text-white px-10 py-5'>
      <button>Get User</button>
    </div>
  )
}

export default App