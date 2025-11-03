import { useContext } from "react"
import hero from "../assets/hero.jpg"
import { MoviesContextdata } from './../context/MoviesContex';

function Home() {


  const [movies] = useContext(MoviesContextdata);

  const renderCard = movies.map((obj,i) => {
    return (
      <div key={i} style={{ backgroundImage: `url(${obj.poster})`, backgroundSize: 'cover',backgroundPosition:'center' }} className="box h-full w-[11%] rounded-md hover:w-[25%] transition-all flex justify-end items-end overflow-hidden">
        
      </div>
    )
  })



  return (
    <div className='w-screen'>
      <main className=" relative">
        <div className='overflow-hidden'>
          <img src={hero} height={'60vh'} className="object-cover mask-t-from-10% mask-b-from-0.2 aspect-auto" />
        </div>
        <div>
          <div className="box absolute bottom-9  w-screen h-[30vh] flex justify-end gap-2 px-9">
            {renderCard}
          </div>
        </div>
      </main>
      <div>
        hello
      </div>
    </div>
  )
}

export default Home