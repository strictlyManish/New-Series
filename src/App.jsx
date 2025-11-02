import React, { useMemo, useState } from 'react'

function App() {
  const [add, setAdd] = useState(0)
  const [sub, setSub] = useState(99)


  const result = useMemo(() =>{
    console.log('Function called !')
    return add+2
  },[add])


  return (
    <div className='h-screen w-screen bg-gray-700 text-white px-10 py-12'>
      <h1 className='text-2xl'>Addition : {result}</h1>
      <h1 className='text-2xl'>Subtraction : {sub}</h1>
      <div className='flex gap-10 rounded mt-10'>
        <button onClick={()=>setAdd(add+2)} className='bg-blue-400 px-2  text-3xl'>+</button>
        <button onClick={()=>setSub(sub-1)}  className='bg-red-400 px-2 text-3xl'>-</button>
      </div>
    </div>
  )
}

export default App