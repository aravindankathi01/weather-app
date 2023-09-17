import React from "react";
import { formatDateToCustomFormat } from "../utils/utilityFunctions";

const FutureForecasts = ({ futureData }) => {
  return (
    <>
      <h1 className='text-2xl font-medium'>Forecasts</h1>
      <div className='sm:w-[60vw] w-[90vw] h-min overflow-y-scroll lg:overflow-hidden mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-2'>
        {futureData.map((data, index) => {
          const { maxtemp_c, mintemp_c, condition } = data.day;
          const { day, month, weekday } = formatDateToCustomFormat(data.date);
          return (
            <div
              className='border-2 flex flex-row rounded-lg justify-around items-center text-slate-300'
              key={index}>
              <img
                src={condition.icon}
                alt='conditionIcon'
                className='h-10 w-10'></img>
              <div className='flex flex-row justify-center items-center'>
                <p className='text-2xl font-normal'>
                  {maxtemp_c}
                  <span className='text-sm font-normal'>/{mintemp_c}</span>
                </p>
              </div>
              <p className='text-2xl font-normal'>
                {day}{" "}
                <span className='text-sm font-normal'>
                  {month + ", " + weekday}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FutureForecasts;
