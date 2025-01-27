import React from "react";
import { trendingLinks } from "@/app/constants/trending-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const TrendingView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"TRENDING"} />

      <div className="grid grid-cols-2 gap-2">  
        <div>
          <ArticleComponent item={{ ...trendingLinks[0] }} />
        </div>

        <div className="space-y-3">
          {trendingLinks?.slice(1)?.map((item) => (
            <ArticleComponent item={{ ...item }} key={item?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingView;
