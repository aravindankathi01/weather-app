import React from "react";
import Carousel from "./Carousel";

const CurrentStatus = ({ current, forecast, location }) => {
  const { name, region, country } = location;
  const { temp_c, temp_f, wind_kph, condition, humidity } = current;
  return (
    <div className='sm:w-[60vw] h-min mx-auto w-full flex flex-col text-white gap-7'>
      <div className='h-1/2 flex justify-evenly items-center flex-wrap'>
        <div className='flex flex-row text-center justify-center items-center gap-2'>
          <img
            src={condition.icon}
            alt='condition'
            className='w-30 h-30 rounded-full'></img>
          <p className='text-base font-normal opacity-70'>{condition.text}</p>
        </div>
        <div className='flex flex-row text-center justify-center items-center gap-2'>
          <h1 className='text-2xl font-medium text-center'>{name}</h1>
          <p className='text-lg font-normal opacity-70'>, {country}</p>
        </div>
      </div>
      <div className='flex justify-evenly items-center flex-wrap'>
        <div className='flex flex-col text-center'>
          <h1 className='text-2xl font-medium'>
            {temp_c}°<span className='text-sm font-medium'>C</span>
          </h1>
          <p className='text-base font-normal opacity-70'>Temperature</p>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-2xl font-medium'>
            {humidity}
            <span className='text-sm font-medium'>%</span>
          </h1>
          <p className='text-base font-normal opacity-70'>Humidity</p>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-2xl font-medium'>
            {wind_kph} <span className='text-sm font-medium'>km/h</span>
          </h1>
          <p className='text-base font-normal opacity-70'>Windspeed</p>
        </div>
      </div>
      <Carousel hour={forecast.forecastday[0].hour} />
    </div>
  );
};

export default CurrentStatus;
// forecast.forecastday[0].hour
