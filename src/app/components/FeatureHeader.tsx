import React from "react";

const FeatureHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex h-9  items-center space-x-1 ">
      <div className=" flex container mx-auto px-2 p-2 bg-[#EF4135]  h-full  items-center text-white justify-center">
        {title}
      </div>
      <div className=" bg-[#333333] h-full w-full"></div>
    </div>
  );
};

export default FeatureHeader;
