import React, { useEffect, useState } from "react";
import hero from "../assets/bg-image.jpg";

import { BASE_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      location && fetchSuggestions(location);
    }, 200);
    return () => {
      // console.log("clearing", timer);
      clearTimeout(timer);
    };
  }, [location]);
  async function fetchSuggestions(location) {
    try {
      const response = await fetch(BASE_URL + "&q=" + location);
      const data = await response.json();
      console.log("forecast", data);
      setSuggestions(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className='w-screen h-screen sm:bg-cover flex flex-col items-center pt-10 sm:pt-0 sm:justify-center'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${hero})`,
      }}>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-slate-300 text-6xl font-bold'>Daily weather</h1>
        <p className='text-slate-200 text-base sm:text-lg font-normal p-5 opacity-70'>
          Our app will accurately display current weather conditions in no time
        </p>
      </div>
      <div className='flex py-4 gap-2 sm:w-1/2 w-full mx-auto justify-between sm:justify-center'>
        <div className='flex rounded-full w-full items-center text-white relative border-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>

          <input
            type='text'
            value={location}
            name='location'
            placeholder='Search city'
            className='w-full p-2 rounded-r-full bg-black bg-opacity-5 text-start'
            onChange={(e) => setLocation(e.target.value)}></input>
          {suggestions.length && location ? (
            <div className='absolute w-[100vw] sm:w-[50vw] h-min flex flex-col text-white top-16 rounded-lg'>
              {suggestions.map((data) => {
                return (
                  <Link
                    to={"/location?query=" + data.url}
                    key={data.id}
                    className='p-2 border-b-2 border-dotted cursor-pointer'>
                    {data.name}, {data.region}, {data.country}
                  </Link>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* <div className='flex w-4/12 sm:w-2/12 justify-around items-center text-center gap-x-1'>
          <p className='w-1/2 rounded-full cursor-pointer bg-white'>C</p>
          <p className='w-1/2 rounded-full cursor-pointer bg-white'>F</p>
        </div> */}
      </div>
    </div>
  );
};

export default MainPage;
