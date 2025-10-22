import React from "react";

const Hero = ({ data }) => {
  return (
    <section
      className={`w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-36 py-10 mx-auto ${data.bgColor}`}
    >
      {/* Text Section */}
      <div className="flex-1 pt-20 space-y-6 text-center md:text-left">
        {data.title && <p className="text-2xl font-semibold">{data.title}</p>}
        <h1 className="text-4xl font-bold md:text-8xl">{data.name}</h1>
        {data.skill && (
          <h3 className="pt-6 text-xl md:text-4xl text-dimWhite">
            {data.skill}
          </h3>
        )}
      </div>

      {/* Image Section */}
      <div className="flex justify-center flex-1 mt-8 md:mt-0">
        <img
          src={data.img}
          alt={data.name}
          className={`absolute top-60 md:top-40 w-[250px] md:w-[400px] rounded-full shadow-lg object-cover bg-yellow-400 mt-11 transition-all hover:scale-105 duration-700 ${data.style}`}
        />
      </div>
    </section>
  );
};

export default Hero;
