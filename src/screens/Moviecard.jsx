import React, { useEffect, useState } from "react";
import { Data } from "../Data/Data";

function Moviecard() {
  const [search, setSearch] = useState("");
  const [filterMovie, setFilterMovie] = useState([]);

  useEffect(() => {
    setFilterMovie(
      Data.filter(
        (item) =>
          item.movietitle.toLowerCase().includes(search.toLowerCase()) || 
          item.moviegenres.join(',').toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  console.log(filterMovie);
  return (
    <div>
      {/* Navbar Starts here  */}
      <div className="bg-teal-600 h-20 sm:h-14 md:h-16 lg:h-20 flex items-center justify-between lg:justify-between md:justify-around sm:justify-evenly">
        <h2 className="text-2xl lg:text-2xl sm:text-base md:text-xl font-bold px-2 sm:px-2 md:px-2 lg:px-2 text-white">
          Movie House
        </h2>

        <div className=" w-96 lg:w-96 sm:w-72  md:w-80 rounded-md ">
          <input
            className="w-full lg:w-full md:w-full  sm:w-full  outline-none border-none p-2 rounded-md font-semibold text-teal-600"
            placeholder="Search Movies"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-64 lg:w-64 sm:w-56 md:w-60 justify-between flex mr-4 sm:mr-2 md:mr-2">
          <button className="bg-white py-1 px-4  lg:px-4   sm:px-2 md:px-3 font-semibold  rounded-md text-teal-600 cursor-pointer">
            Login
          </button>
          <button className="bg-white py-1 px-4 lg:px-4     sm:px-2 md:px-3 font-semibold  rounded-md text-teal-600 cursor-pointer">
            Signup
          </button>
        </div>
      </div>
      {/* Navbar ends here  */}
      {/* Cards Starts here  */}
      <div className="w-full flex flex-wrap items-center justify-evenly m-4 ">
        {filterMovie.map((item, id) => (
          <div
            key={id}
            className="relative flex flex-col   m-4 text-white shadow-md bg-clip-border rounded-xl w-96  bg-teal-600 h-[400px] "
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700  bg-clip-border rounded-xl h-96">
              <img
                src={item.moviemainphotos}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-white">
              <div className="flex items-center justify-between mb-2 ">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {item.movietitle}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {item.imdbmovieid}
                </p>
              </div>
              <p className="block  font-sans text-sm antialiased font-normal leading-normal text-white ">
                {item.movielanguages.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Cards ends here  */}
    </div>
  );
}

export default Moviecard;
