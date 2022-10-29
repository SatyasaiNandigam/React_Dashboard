import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { types } from "../../data/dummy";

const Widget = ({ type }) => {
  const positive = "text-green-500";
  // const negative = "text-red-500";
  return (
    <div className="widget flex flex-1 justify-between p-3 shadow-xl rounded-xl h-36 mt-10 mb-5">
      <div className="left flex flex-col justify-between ">
        <span className="font-bold text-sm text-gray-400">
          {types[type].title}
        </span>
        <span className="text-3xl font-light">
          {types[type].isMoney ? types[type].amount : ""}
        </span>
        <span className="text-xs border-b-2 border-gray-400">
          {types[type].link}
        </span>
      </div>
      <div className="right flex flex-col justify-between">
        <div className={`flex items-center text-14 ${positive}`}>
          <KeyboardArrowUpIcon />
          20%
        </div>
        <div className="flex justify-end">
          {types[type].icon}
        </div>
      </div>
    </div>
  );
};

export default Widget;
