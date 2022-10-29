import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";



const Featured = () => {
    let positive = 'text-green-500';
    let negative = 'text-red-500';
  return (
    <div className="featured basis-1/4 sm:ml-10 md:ml-10 p-3 shadow-lg">
      <div className="top flex items-center justify-between text-gray-400">
        <h1 className="text-base font-medium ">Total Revenue</h1>
        <MoreVertOutlinedIcon className="w-1" />
      </div>
      <div className="bottom flex flex-col items-center justify-center p-5 gap-4 ">
        <div className="featuredChart w-28 h-28 ">
          <CircularProgressbar value={70} text={`${70}%`} />
        </div>
        <p className="title font-medium text-gray-400 ">
          Total sales made today
        </p>
        <p className="amount text-3xl">$200</p>
        <p className="desc font-light text-sm text-gray-400 text-center">
          Previous Transactions processing. Last payments may not be included.
        </p>
        <div className="summary flex items-center justify-between w-full">
          <div className="item text-center">
            <div className="itemTitle text-sm text-gray-400 ">Target</div>
            <div className={` flex items-center mt-3 text-sm ${negative}`}>
              <KeyboardArrowDownIcon className="text-xs" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle text-sm text-gray-400">Target</div>
            <div className={` flex items-center mt-3 text-sm ${positive}`}>
              <KeyboardArrowUpIcon className="text-xs" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle text-sm text-gray-400">Target</div>
            <div className={` flex items-center mt-3 text-sm ${positive}`}>
              <KeyboardArrowUpIcon className="text-xs" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
