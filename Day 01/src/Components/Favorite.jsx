import RecipeCard from './RecipeCard';
function Favorite() {

  const data = JSON.parse(localStorage.getItem('liked')) || []

  

  return (
    <div className='flex gap-5 mt-10'>
      {data.map((obj)=> <RecipeCard key={obj.id} recipe={obj} />)}
    </div>
  )
}

export default Favorite