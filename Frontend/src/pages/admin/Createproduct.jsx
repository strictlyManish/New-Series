import { useForm } from "react-hook-form";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Product Data:", data);
    alert("✅ Product Created! Check console for details.");
    reset();
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mt-5 w-1/2"
    >
      <h2 className="text-2xl font-bold text-gray-100">Create Product</h2>


      {/* Title */}
      <div>
        <label className="block mb-1 font-semibold">Title</label>
        <input
          type="text"
          className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="block mb-1 font-semibold">Price ($)</label>
        <input
          type="number"
          step="0.01"
          className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be at least 1" },
          })}
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      <div className="flex justify-between">
        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            className="w-[20vw] border p-3 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("description", { required: "Description is required" })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <input
            type="text"
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("category", { required: "Category is required" })}
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>
      </div>

      {/* Image */}
      <div>
        <label className="block mb-1 font-semibold">Image URL</label>
        <input
          type="text"
          className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
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

  );
}