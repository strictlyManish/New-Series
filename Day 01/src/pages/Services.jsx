import "../index.css";
import { Outlet, useNavigate } from "react-router-dom";
function Services() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-5xl px-5">Services Section</h1>
      <div className="flex transition-all">
        <div className="container flex flex-col gap-6 mt-6 px-5">
          <div className="box">
            <h1>Orange</h1>
            <p className="text-[12px] font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              iusto rem sed deleniti
            </p>
            <button
              onClick={() => navigate(`/service/details/${"Orange"}`)}
              className="px-5 bg-gray-600 m-2 rounded-full py-2 active:scale-95 cursor-pointer"
            >
              See details
            </button>
          </div>
          <div className="box ">
            <h1>Apple</h1>
            <p className="text-[12px] font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              iusto rem sed deleniti
            </p>
            <button
              onClick={() => navigate(`/service/details/${"Apple"}`)}
              className="px-5 bg-gray-600 m-2  rounded-full py-2 active:scale-95 cursor-pointer"
            >
              See details
            </button>
          </div>
          <div className="box">
            <h1>Mango</h1>
            <p className="text-[12px] font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              iusto rem sed deleniti
            </p>
            <button
              onClick={() => navigate(`/service/details/${"Mango"}`)}
              className="px-5 bg-gray-600 m-2 rounded-full py-2 active:scale-95 cursor-pointer"
            >
              See details
            </button>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Services;
