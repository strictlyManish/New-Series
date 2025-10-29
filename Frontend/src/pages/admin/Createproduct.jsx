import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncCreateProducts } from "../../app/actions/productAction";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProducts(product));
    navigate("/procucts");
    reset();
  };

  const imageURL = watch("image");

  return (
    <div className="h-screen flex flex-col md:flex-row gap-8 mt-5 px-5 py-10">
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full md:w-1/2 rounded-xl uppercase"
      >
        <h2 className="text-2xl font-bold text-gray-100 mb-5">Create Product</h2>

        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="product title"
            className="w-full bg-gray-600 text-[15px] uppercase p-4 rounded outline-none"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Price & Category */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <input
              placeholder="product amount"
              type="number"
              step="0.01"
              className="w-full bg-gray-600 text-[15px] uppercase p-4 rounded outline-none"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be at least 1" },
              })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          <div className="w-full">
            <input
              placeholder="product category"
              type="text"
              className="w-full bg-gray-600 text-[15px] uppercase p-4 rounded outline-none"
              {...register("category", { required: "Category is required" })}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <textarea
            placeholder="Enter product description"
            className="w-full bg-gray-600 text-[15px] uppercase p-4 rounded outline-none h-28 resize-none"
            {...register("description", { required: "Description is required" })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <input
            placeholder="Paste image url"
            type="text"
            className="w-full bg-gray-600 text-[15px] uppercase p-4 rounded outline-none"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition font-semibold"
        >
          Create Product
        </button>
      </form>

      {/* Image Preview */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[60vh] flex justify-center items-center border border-gray-500 rounded-xl bg-white/10 backdrop-blur-md overflow-hidden">
        {imageURL ? (
          <img
            src={imageURL}
            alt="Preview"
            className="object-contain w-full h-full"
          />
        ) : (
          <p className="text-gray-300 text-sm">Image Preview Will Appear Here</p>
        )}
      </div>
    </div>
  );
}