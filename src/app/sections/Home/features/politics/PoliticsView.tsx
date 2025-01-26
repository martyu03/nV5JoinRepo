import React from "react";
import { politicsLinks } from "@/app/constants/politics-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const PoliticsView = () => {
  return (
    <div className="grid grid-cols-2">
      {politicsLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default PoliticsView;
