import React from "react";
import { policeLinks } from "@/app/constants/police-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const PoliceView = () => {
  return (
    <div className="grid grid-cols-2">
      {policeLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default PoliceView;
