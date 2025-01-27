import React from "react";

const FeatureHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex h-9  items-center space-x-1 ">
      <div className=" bg-[#EF4135] h-full flex items-center px-4 text-white">
        <p className="w-auto">{title}</p>
      </div>
      <div className=" bg-[#333333] h-full flex-1"></div>
    </div>
  );
};

export default FeatureHeader;
