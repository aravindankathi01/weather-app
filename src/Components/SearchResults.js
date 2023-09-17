import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FORECAST_URL } from "../utils/Constants";
import hero from "../assets/bg-image.jpg";
import CurrentStatus from "./CurrentStatus";
import FutureForecasts from "./FutureForecasts";
import Shimmer from "./Shimmer";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [currentData, setCurrentData] = useState(null);
  // const [futureData, setFutureData] = useState(null);

  useEffect(() => {
    console.log(searchParams.get("query"));
    getCurrent(searchParams.get("query"));
    // getFuture(searchParams.get("query"));
  }, []);

  async function getCurrent(location) {
    try {
      const response = await fetch(FORECAST_URL + "q=" + location + "&days=12");
      const data = await response.json();
      setCurrentData(data);
      console.log(location, data);
    } catch (err) {
      console.log(err);
    }
  }
  // async function getFuture(location) {
  //   try {
  //     const response = await fetch(FORECAST_URL + "q=" + location + "&days=12");
  //     const data = await response.json();
  //     setFutureData(data.forecast.forecastday);
  //     // console.log("Future", data.forecast.forecastday);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <>
      {currentData ? (
        <div
          className='bg-cover h-screen w-screen pt-10 text-white flex flex-col gap-10 items-center'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${hero})`,
          }}>
          <CurrentStatus
            current={currentData.current}
            forecast={currentData.forecast}
            location={currentData.location}
          />
          <FutureForecasts futureData={currentData.forecast.forecastday} />
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default SearchResults;
