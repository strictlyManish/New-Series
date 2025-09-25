import React from "react";

function Read(propps) {
  const { data, setData } = propps;


  const renderData = data.map((obj) => {
    return (
      <div key={obj.id} className="flex bg-gray-900 p-5 justify-between rounded">
        <p className="capitalize">{obj.title}</p>
        <button  
        className="bg-gray-700 w-fit h-fit px-5 py-2 rounded-md active:scale-95 cursor-pointer"
        onClick={()=>setData(data.filter((item) => item.id !== obj.id))}>Delete</button>
      </div>
    );
  });

  return (
    <div>
      <h1 className=" mb-5 text-3xl capitalize"><span className="text-pink-700">Pending</span> todos</h1>
      <div className="flex flex-col gap-2 w-[25vw]">{renderData}</div>
    </div>
  );
}

export default Read;
