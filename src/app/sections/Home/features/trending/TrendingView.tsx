import React from "react";
import { trendingLinks } from "@/app/constants/trending-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const TrendingView = () => {
  return (
    <div className="grid grid-cols-2">
      {trendingLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default TrendingView;
