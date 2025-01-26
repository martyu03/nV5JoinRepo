import React from "react";
import { trendingLinks } from "@/app/constants/trending-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const TrendingView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"Trending"} />

      <div className="grid grid-cols-2">
        {trendingLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingView;
