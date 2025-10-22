import React from "react";
import { conectsMeData } from "../data/ProjectData";
import { useNavigate } from "react-router-dom";

export default function ConectsMe() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-between w-full h-full gap-6 p-6 py-40 text-black bg-gray-200 md:flex-row ">
      {/* Contact Info Cards */}
      <div className="flex justify-center flex-1 gap-4">
        {conectsMeData.map((data, index) => (
          <div className="flex pr-0 md:pr-[450px] flex-col md:flex-row">
            <div
              key={index}
              className="bg-white rounded-xl md:rounded-full shadow-lg p-6 size-[350px] md:w-[500px] md:h-[500px] text-center "
            >
              <p className="pt-4 text-lg font-semibold md:pt-20 text-dimgreen">
                {data.title}
              </p>
              <h1 className="py-6 mt-2 text-3xl md:text-5xl ">{data.body}</h1>
              <h1 className="pb-6 text-3xl md:text-5xl">{data.body2}</h1>
              <button
                onClick={() => navigate("/contact")}
                className="px-10 py-5 mt-2 font-bold text-white transition md:mt-12 bg-dimgreen rounded-xl hover:bg-yellow-400 hover:text-black"
              >
                {data.button}
              </button>
            </div>
            <div className="">
              <img
                src={data.img}
                alt=""
                className={`w-[350px] md:mt-0 mt-12 md:absolute right-4 md:right-72 md:w-[500px] rounded-full shadow-lg object-cover bg-yellow-400 border-4 border-yellow-400  `}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
