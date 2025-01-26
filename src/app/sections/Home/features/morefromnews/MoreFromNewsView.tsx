import React from "react";
import { morefromnewsLinks } from "@/app/constants/morefromnews-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const MoreFromNewsView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"More from news"} />

      <div className="grid grid-cols-2">
        {morefromnewsLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreFromNewsView;
