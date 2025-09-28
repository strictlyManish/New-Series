import React, { useContext } from "react";
import { RecipiesContext } from "../Context/Recipe";
import {useNavigate, useParams} from "react-router-dom";

function Details() {


  const [data,setData] = useContext(RecipiesContext);
  const {id} = useParams();
  const userdata = data.filter((obj)=> id == obj.id);

  const naviagete = useNavigate();




  return (
    <div className="max-w-full  h-full mt-5 mx-auto text-white rounded-2xl  overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="h-[50%] flex items-center justify-center border-b border-gray-600 overflow-hidden w-full">
        <img src={userdata[0].url} alt="" width={'100%'} />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="space-y-2">
          <p className="font-extrabold uppercase text-orange-500 text-2xl">{userdata[0].recipeName}</p>
          <p className="font-semibold text-gray-500 text-lg">{userdata[0].chiefName}</p>
          <p className="font-extrabold text-lg">INGRIDIENTS :

            <span className="font-thin"> {userdata[0].recipeIngredients.join(", ")}</span>
          </p>
          <p className="font-extrabold text-lg">DISCRIPTION : 

            <span className="font-medium"> {userdata[0].recipeDesc}</span>
          </p>
          <p className="font-extrabold text-lg">CATEGORIES : 
            <span className="font-mono"> {userdata[0].categories.join(",")}</span>
          </p>
        </div>

        {/* Button Section */}
        <div className="flex gap-5 justify-end mt-4">
          <button className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-700 transition">
            FAVORATE
          </button>
          <button onClick={()=>naviagete("/recipies")} className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-700 transition">
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
