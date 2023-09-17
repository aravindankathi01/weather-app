import React from "react";
import hero from "../assets/bg-image.jpg";

const Shimmer = () => {
  const myArray = [1, 2, 3, 4];
  const carouselArray = [1, 2, 3, 4, 5];
  const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div
      className='w-screen h-screen bg-cover flex flex-col items-center gap-10'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${hero})`,
      }}>
      {/* current */}
      <div className='sm:w-[60vw] h-min mx-auto w-full flex justify-around items-center text-white gap-10 animate-pulse pt-10 flex-wrap'>
        <div class='rounded-full bg-slate-700 h-16 w-16'></div>
        {myArray.map((item, index) => (
          <div
            key={index}
            className='flex flex-col space-y-6 py-1 justify-center items-center'>
            <div class='h-2 bg-slate-700 rounded w-24'></div>
            <div class='h-2 bg-slate-700 rounded w-16'></div>
          </div>
        ))}
      </div>
      {/* carousel */}
      <div className='flex flex-row gap-2 sm:w-[60vw] w-full justify-center overflow-hidden pb-36 sm:pb-0'>
        {carouselArray.map((id, index) => {
          return (
            <div
              key={index}
              className='flex flex-col border rounded-lg h-40 sm:w-28 w-20 items-center justify-center text-center shadow-lg gap-5 animate-pulse'>
              <div class='h-2 bg-slate-700 rounded w-14'></div>
              <div class='rounded-full bg-slate-700 h-10 w-10'></div>
              <div class='h-2 bg-slate-700 rounded w-16'></div>
              <div class='h-2 bg-slate-700 rounded w-10'></div>
            </div>
          );
        })}
      </div>
      {/* {forcasts} */}
      <h1 className='text-2xl font-medium text-white animate-pulse hidden sm:block'>
        Forecasts
      </h1>
      <div className='sm:w-[60vw] w-[90vw] h-min overflow-y-scroll lg:overflow-hidden mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-2 animate-pulse'>
        {grid.map((ele, index) => {
          return (
            <div
              key={index}
              className='border flex flex-row rounded-lg justify-around items-center text-slate-300 p-2'>
              <div class='rounded-full bg-slate-700 h-10 w-10'></div>
              <div class='h-2 bg-slate-700 rounded w-16'></div>
              <div class='h-2 bg-slate-700 rounded w-10'></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shimmer;
// {
//   /* <div class='shadow rounded-md p-4 max-w-sm w-full mx-auto'>
//   <div class='animate-pulse flex space-x-4'>
//     <div class='rounded-full bg-slate-700 h-10 w-10'></div>
//     <div class='flex-1 space-y-6 py-1'>
//       <div class='h-2 bg-slate-700 rounded'></div>
//       <div class='space-y-3'>
//         <div class='grid grid-cols-3 gap-4'>
//           <div class='h-2 bg-slate-700 rounded col-span-2'></div>
//           <div class='h-2 bg-slate-700 rounded col-span-1'></div>
//         </div>
//         <div class='h-2 bg-slate-700 rounded'></div>
//       </div>
//     </div>
//   </div>
// </div>; */
// }
