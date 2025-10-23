import axios from "./utils/axios.config";


export default function App() {

  const getproduct = async () => {
    try {
      const {data} = await axios.get("/products");
      console.log(data)
      
    } catch (error) {
      
    }
  };




  return (
    <div className='bg-gray-800 h-screen px-5 py-5 text-white w-screen'>
      <button onClick={getproduct} className="bg-gray-500 p-2 rounded-full active:scale-95" >Products page</button>
    </div>
  )
}

