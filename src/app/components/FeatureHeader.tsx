import React from "react";

type styleProps = {
  height?:number;
  width?:number;
}

type FeatureHeaderProps = {
  title: string, 
  bgcolor?:string;
  styles?:styleProps
}

const FeatureHeader = ({ title, bgcolor, styles }: FeatureHeaderProps) => {
  
  return (
    <div className={`flex h-${styles?.height ? styles?.height : '9'} items-center space-x-1  `}>
      <div className=" bg-[#EF4135] h-full flex items-center px-4 text-white">
        <p className="w-auto">{title}</p>
      </div>
     <div className={` bg-[${bgcolor || '#333333'}] h-full flex-1`}></div>
    </div>
  );
};

export default FeatureHeader;
