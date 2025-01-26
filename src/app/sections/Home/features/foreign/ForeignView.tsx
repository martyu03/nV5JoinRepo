import React from "react";
import { foreignLinks } from "@/app/constants/foreign-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const ForeignView = () => {
  return (
    <div className="grid grid-cols-2">
      {foreignLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default ForeignView;
