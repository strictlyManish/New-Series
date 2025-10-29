import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function Products() {

  const products = useSelector((state) => state.productReducer.products);
  if (!products || products.length === 0) {
    return <h2>Loading...</h2>;
  };

  return (
    <div className='flex flex-wrap gap-2 px-5  py-10 h-screen '>
      {products.map((obj) => (
        <Link 
          key={obj.id} 
          to={`/product/${obj.id}`}
          className='w-[15vw] h-fit p-3 rounded bg-gray-900'
        >
          <div className='flex justify-center'>
            <img src={obj.image} alt={obj.title} className='h-30 object-contain' />
          </div>
          <h1 className='font-medium text-[15px] mt-3'>{obj.title}</h1>
          <span className='text-2xl' >${obj.price}</span>
          <p className='bg-gray-800 rounded-full text-[12px] w-fit px-3 py-1'>{obj.category}</p>
          <p className='text-sm text-gray-100 mt-2 line-clamp-3'>{obj.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default Products
