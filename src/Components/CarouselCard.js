import React from "react";
import {
  formatTimeTo12Hour,
  formatUnixTimestampTo12Hour,
} from "../utils/utilityFunctions";

const CarouselCard = ({
  time_epoch,
  temp_c,
  humidity,
  condition,
  wind_kph,
  time,
}) => {
  //   const convertedTime = formatUnixTimestampTo12Hour(time_epoch);
  const formattedTime = formatTimeTo12Hour(time);
  return (
    <div className='flex flex-col border-[1px] rounded-lg h-40 sm:w-24 w-20 justify-around items-center text-center shadow-lg'>
      <p className='text-sm font-medium opacity-90'>{formattedTime}</p>
      <img src={condition.icon} alt='conditionIcon' className='h-14 w-14'></img>
      <p className='text-xs font-normal opacity-70'>{condition.text}</p>
      <h1 className='text-sm font-medium'>
        {temp_c}°<span className='text-xs font-medium'>C</span>
      </h1>
    </div>
  );
};

export default CarouselCard;
