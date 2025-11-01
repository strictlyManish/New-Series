import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncUpdateProduct, asyncDeleteProduct } from "../app/actions/productAction";
import { asyncUpdateuser } from "../app/actions/userAction";
import toast from "react-hot-toast";


export default function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const user = useSelector((state) => state.useReducer.user);
  const products = useSelector((state) => state.productReducer.products);

  const product = products.find((p) => p.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: product,
  });

  const handleUpdate = (updatedProduct) => {
    dispatch(asyncUpdateProduct(product.id, updatedProduct));
  };

  const handleDelete = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };

  const addtocartfn = (product) => {
    const copyuser = { ...user, cart: [...user.cart] };
    const index = copyuser.cart.findIndex((c) => c?.product?.id == id);
    if (index === -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[index] = {
        product,
        quantity: copyuser.cart[index].quantity + 1
      };
    }
    dispatch(asyncUpdateuser(copyuser.id, copyuser));

    toast.success('product added')

  };


  return (
    <div className="max-w-6xl h-screen mx-auto py-6 sm:py-8 lg:py-10 px-3 sm:px-4 lg:px-6 text-white">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-700">

        <img
          src={product?.image}
          alt={product?.title}
          loading="lazy"
          className="object-contain w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg bg-gray-900 p-2 sm:p-3"
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">{product?.title}</h1>
          <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 line-clamp-4 sm:line-clamp-none">{product?.description}</p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-green-400 mb-4 sm:mb-6">${product?.price}</p>

          <button 
            onClick={() => addtocartfn(product)} 
            className="w-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black text-base sm:text-lg font-medium py-2.5 sm:py-3 rounded-lg transition touch-manipulation"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Admin Edit Panel */}
      {user?.isAdmin && (
        <div className="mt-6 sm:mt-8 lg:mt-10 bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-700">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 text-gray-200">Admin Controls</h2>

          <form onSubmit={handleSubmit(handleUpdate)} className="space-y-3 sm:space-y-4">

            <input
              {...register("image")}
              type="url"
              className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Product Image URL"
            />

            <input
              {...register("title")}
              type="text"
              className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Product Title"
            />

            <input
              {...register("price")}
              type="number"
              className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="0.00"
            />

            <input
              {...register("category")}
              type="text"
              className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Product Category"
            />

            <textarea
              {...register("description")}
              className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-24 sm:h-28 resize-none"
              placeholder="Product Description"
            ></textarea>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-3">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition text-white font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base touch-manipulation"
              >
                Update Product
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 transition text-white font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base touch-manipulation"
              >
                Delete Product
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
}