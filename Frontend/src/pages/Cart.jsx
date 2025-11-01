import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateuser } from './../app/actions/userAction';

function Cart() {
  const user = useSelector((state) => state.useReducer.user);
  const dispatch = useDispatch();

  const incresred = (index) => {
    const copyuser = { ...user, cart: [...user.cart] };

    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1
    };

    dispatch(asyncUpdateuser(copyuser.id, copyuser));
  };

  const decresred = (index) => {
    const copyuser = { ...user, cart: [...user.cart] };

    if (copyuser.cart[index].quantity > 1) {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1
      };
    } else {
      copyuser.cart.splice(index, 1);
      
    }

    dispatch(asyncUpdateuser(copyuser.id, copyuser));
  };



  const renderCart = user?.cart?.map((obj, index) => {
    return (
      <div
        key={obj.product.id}
        className="flex flex-col sm:flex-row gap-5 p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4"
      >
        <img
          src={obj.product.image}
          alt={obj.product.name || "Product"}
          className="w-full sm:w-32 h-32 object-cover rounded-md"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-1">
              {obj.product.title}
            </h3>
            <p className="text-xl font-bold text-gray-400">
              ${obj.product.price}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => decresred(index)}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 font-bold transition-colors"
            >
              -
            </button>
            <p className="text-lg font-semibold min-w-8 text-center">
              {obj.quantity}
            </p>
            <button
              onClick={() => incresred(index, obj)}
              className="w-8 h-8 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-md text-white font-bold transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-6">Shopping Cart</h1>
      {user?.cart?.length > 0 ? (
        <div>{renderCart}</div>
      ) : (
        <div className="text-center h-screen w-screen py-12">
          <p className="text-gray-200 text-lg">Your cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default Cart;