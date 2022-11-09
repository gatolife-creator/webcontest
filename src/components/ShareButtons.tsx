import React from "react";
import { FaTwitter, FaFacebook, FaGetPocket } from "react-icons/fa";

export const ShareButtons = () => {
  return (
    <div className="md:block fixed top-1/2 left-10 hidden w-[64px] rounded-md bg-primary py-3 px-2">
      <button className="btn-info btn-circle btn my-1 text-white">
        <FaTwitter fontSize={24} />
      </button>
      <button className="btn-circle btn my-1 border-none bg-blue-600 text-white hover:bg-blue-600">
        <FaFacebook fontSize={24} />
      </button>
      <button className="btn-circle btn my-1 border-none bg-red-500 text-white hover:bg-red-500">
        <FaGetPocket fontSize={24} />
      </button>
    </div>
  );
};
