import React from "react";
import { layout_image } from "../data/dummy";

const Layouts = () => {
  return (
    <div className="mt-4">
      <div className="pt-12">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4"><img src={layout_image} alt="container_layout" className="w-3/4 m-auto" /></div>
          <div className="w-fit mb-4">
            <h3 className="mb-2 text-center font-bold text-lg text-gray-500">Layout Container</h3>
            <p className="mb-2 text-gray-400">Container layout sets a <span className="border-red-400 text-red-400 rounded-md text-xs font-semibold">max-width</span> at each responsive breakpoint.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
