import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncUpdateProduct, asyncDeleteProduct } from "../app/actions/productAction";
import { asyncUpdateuser } from "../app/actions/userAction";


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

  const addtocartfn = (id) => {
    const copyuser = { ...user, cart: [...user.cart] };
    const index = copyuser.cart.findIndex((c) => c.productId == id);

    if (index === -1) {
      copyuser.cart.push({ productId: id, quantity: 1 });
    } else {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity + 1
      };
    }

    dispatch(asyncUpdateuser(user.id, copyuser));
  };


  return (
    <div className="max-w-6xl mx-auto py-10 px-4 text-white">

      {/* Product Display Card */}
      <div className="grid md:grid-cols-2 gap-8 bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">

        <img
          src={product?.image}
          alt={product?.title}
          className="object-contain w-full h-[350px] rounded-lg bg-gray-900 p-3"
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-3">{product?.title}</h1>
          <p className="text-gray-300 mb-4">{product?.description}</p>
          <p className="text-4xl font-semibold text-green-400 mb-6">₹{product?.price}</p>

          <button onClick={() => addtocartfn(product.id)} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-medium py-3 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Admin Edit Panel */}
      {user?.isAdmin && (
        <div className="mt-10 bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-5 text-gray-200">Admin Controls</h2>

          <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">

            <input
              {...register("image")}
              type="url"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500"
              placeholder="Product Image URL"
            />

            <input
              {...register("title")}
              type="text"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500"
              placeholder="Product Title"
            />

            <input
              {...register("price")}
              type="number"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500"
              placeholder="0.00"
            />

            <input
              {...register("category")}
              type="text"
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500"
              placeholder="Product Category"
            />

            <textarea
              {...register("description")}
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none border border-gray-600 focus:border-blue-500 h-28 resize-none"
              placeholder="Product Description"
            ></textarea>

            <div className="flex gap-4 pt-3">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg"
              >
                Update Product
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg"
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
