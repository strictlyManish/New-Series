import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();

  const param = useParams();

  



  return (
    <div className="p-5 w-[50vw] bg-gray-700 rounded">
      <h1 className="text-3xl p-5">{param.fruit}</h1>
      <div className="flex flex-col gap-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea
          perferendis molestias, commodi sit facere minus vel tempore est
          exercitationem tenetur, in veniam natus voluptas qui minima. Ab,
          laboriosam iure. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsa ea perferendis molestias, commodi sit facere minus vel
          tempore est exercitationem tenetur, in veniam natus voluptas qui
          minima. Ab, laboriosam iure. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsa ea perferendis molestias, commodi sit facere
          minus vel tempore est exercitationem tenetur, in veniam natus voluptas
          qui minima. Ab, laboriosam iure.
        </p>
      </div>
      <button
        onClick={() => navigate("/service")}
        className="px-5 bg-gray-600 m-2 rounded-full py-2 active:scale-95 cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
}

export default ProductDetails;
