import React, { useEffect, useState } from 'react'

function Read({data}) {

  const [task,setTask] = useState([])


  useEffect(()=>{
    const fetchedData = JSON.parse((localStorage.getItem('task'))) || data;
    setTask(fetchedData)
  },[data])

  const renderData = task.map((obj)=>{
    return(
      <li key={obj.id} className='bg-gray-700 p-5 list-none rounded-md mt-2 relative'>
        <span className='text-[10px] absolute left-[90%] italic text-gray-400'>{obj.id}</span>
        <p>{obj.title}</p>
      </li>
    )
  })

  return (
    <div className='w-[25vw] transition-all h-[90vh] overflow-x-auto relative'>
      <p className='pb-2 sticky top-0 z-1 bg-pink-700 backdrop-blur-xl p-2 rounded-b-2xl'>Pending Tasks.</p>
      {renderData}
    </div>
  )
}

export default Read