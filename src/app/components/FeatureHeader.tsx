import React from "react";

const FeatureHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex h-9  items-center space-x-1 ">
      <div className=" p-2 bg-orange-700  h-full  items-center text-white justify-center">
        {title}
      </div>
      <div className=" bg-gray-900 h-full w-full"></div>
    </div>
  );
};

export default FeatureHeader;
