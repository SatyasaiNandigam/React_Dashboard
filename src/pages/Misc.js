import React from "react";
import { errorimage } from "../data/dummy";
import {Link} from 'react-router-dom';

function Misc() {
  return (
    <div>
      <div className="wrapper mx-8 py-10 px-5 mt-7">
        <div className="content px-16 flex flex-col items-center justify-center">
          <span className="heading text-4xl text-gray-600 font-semibold mb-3">
            Page Not Found 👎🏻
          </span>
          <span className="info text-sm text-gray-400 font-semibold ">
            Oops!😒 The requested URL was not found on the server.
          </span>
          <Link to='/' className=" text-white w-fit bg-blue-600 hover:bg-blue-700 focus:ring-4 hover:shadow-md focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 m-8 focus:outline-none">
            Back to home
          </Link>
          <img
            src={errorimage}
            alt="error while loading the page"
            className="w-2/4"
          />
        </div>
      </div>
    </div>
  );
}

export default Misc;
