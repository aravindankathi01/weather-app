import React from "react";
import hero from "../assets/bg-image.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className='w-screen h-screen sm:bg-cover first-letter flex justify-center items-center flex-col text-center gap-4'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${hero})`,
      }}>
      <h1 className='text-slate-300 text-6xl font-bold'>Daily weather</h1>
      <p className='text-slate-200 text-base sm:text-lg font-normal p-5 opacity-70'>
        Our app will accurately display current weather conditions in no time
      </p>
      <Link
        to='/details'
        className='text-2xl font-bold text-slate-300 p-2 rounded-full border-2'>
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
