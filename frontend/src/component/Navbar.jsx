import React from "react";
import { FaHome, FaTools } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";


function Navbar() {
  return (
    <div className="flex justify-center items-center h-3/5 w-2/12">
      <div className="flex flex-col justify-center items-center h-full w-34 bg-white rounded-2xl text-center p-3 gap-3">
        <div className="flex flex-col justify-center items-center h-24 w-24 bg-gray-300 rounded-2xl">
          <div className="">
            <FaHome className="h-9 w-9" />
          </div>
          <div className="text-sm">Home</div>
        </div>
        <div className="flex flex-col justify-center items-center h-24 w-24 bg-gray-300 rounded-2xl">
          <div className="text-sm">
            <FaTools className="h-8 w-8" />
          </div>
          <div className="">Skills</div>
        </div>
        <div className="flex flex-col justify-center items-center h-24 w-24 bg-gray-300 rounded-2xl">
          <div className="text-sm">
            <MdOutlineWork className="h-9 w-9"/>
          </div>
          <div className="">Projects</div>
        </div>

        <div className="flex flex-col justify-center items-center h-24 w-24 bg-gray-300 rounded-2xl">
          <div className="text-sm"><BiSolidContact className="h-9 w-9"/>
          </div>
          <div className="">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
