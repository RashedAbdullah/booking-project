import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form
        action=""
        className="flex bg-green-500 p-2 justify-center gap-1 lg:flex-row md:flex-row sm:flex-col"
      >
        <div className="">
          <input
            className="p-2 sm:w-[100%]"
            type="text"
            placeholder="Where are you going?"
          />
        </div>
        <div>
          <select name="" id="" className="h-[100%] p-2 sm:w-[100%]">
            <option value="" className="">
              Check-in date — Check-out date
            </option>
          </select>
        </div>
        <div className="bg-white flex align-middle">
          <p className="h-[100%] p-2">
            <button>1</button> adult · <span>0</span> children · <span>0</span> room
          </p>
        </div>
        <div className=" flex align-middle">
          <button className="bg-blue-500 text-white sm:w-[100%] p-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
