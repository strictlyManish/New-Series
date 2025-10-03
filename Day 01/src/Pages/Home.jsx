import React, { useEffect } from 'react'
import axios from '../Utils/axios'


function Home() {

  const getdata = async () =>{
   try {
    let dat = await axios('products')
    console.log(dat)
   } catch (error) {
    console.log(error)
   }
  };

  useEffect(()=>{
    getdata()
  })


  return (
    <div>Home</div>
  )
}

export default Home