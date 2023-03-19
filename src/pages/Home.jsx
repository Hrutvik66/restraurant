import React from "react";
// components
import Navbar from "../components/Navbar";
// images
import Hero from "../assets/burger.png";

const Home = () => {
  return (
    <div className="bg-[#f3e9e9] h-screen">
      <Navbar />
      <div className="flex items-center p-[7rem_5rem_5rem] h-full font-monserrat">
        <div className="flex flex-col flex-1 space-y-10">
          <h1 className="text-8xl font-bold">
            It's not just Food. It's an Experience
          </h1>
          <div className="flex space-x-10">
            <button className="button">View Menu</button>
            <button className="text-red-600 p-[0.5rem_2rem] rounded-xl border-[2px] hover:border-[#f3e9e9] border-red-600 bg-[#f3e9e9] hover:text-white hover:bg-red-600 hover-animation">Order Now</button>
          </div>
        </div>
        <div className="flex justify-center flex-1 items-center">
          <img
            src={Hero}
            alt=""
            className="h-[30rem] w-[30rem] absolute z-10"
          />
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-[40rem]"
          >
            <path
              fill="#C1BABA"
              d="M60,-21C65.8,-1.6,50.4,23.3,30.3,36.6C10.2,50,-14.5,51.9,-36,38.8C-57.5,25.7,-75.8,-2.4,-69.3,-22.8C-62.8,-43.2,-31.4,-55.8,-2.2,-55.1C27.1,-54.4,54.1,-40.4,60,-21Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
