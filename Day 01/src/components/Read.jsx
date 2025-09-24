
function Read(propps) {
  const {data,setData} = propps;
  const len = data.length;

  const deleteHandler = (id) =>{
    const filterdData = data.filter((item)=>{
        return item.id !== id
    });
    setData(filterdData)
  };

  

  const renderData = data.map((obj) => {
    return (
      <li
        key={obj.id}
        className="bg-gray-700 p-5 list-none rounded-md mt-2 relative"
      >
        <span className="text-[10px] absolute left-[90%] italic text-gray-400">
          {obj.id}
        </span>
        <p className="capitalize">{obj.title}</p>
        <button onClick={()=>deleteHandler(obj.id)} className="mt-2 bg-gray-500 px-5 py-1 rounded-full shadow-2xl cursor-pointer active:backdrop-blur-2xl transition-all">Delete</button>
      </li>
    );
  });

  
  return (
    <div className="w-[25vw] transition-all h-[90vh] overflow-x-auto relative">
      <p className="pb-3 sticky top-0 z-1 bg-pink-700 backdrop-blur-xl p-2 rounded-b-2xl italic uppercase font-medium">
        Pending Tasks
        <span className="absolute right-0 mr-1.5">Total : {len}</span>
      </p>
      {renderData}
    </div>
  );
}

export default Read;
