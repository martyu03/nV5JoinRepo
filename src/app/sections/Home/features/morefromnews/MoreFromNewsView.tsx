import React from "react";
import { morefromnewsLinks } from "@/app/constants/morefromnews-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const MoreFromNewsView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"MORE FROM NEWS5"} />

      <div className="grid grid-cols-2 space-y-1">
        {morefromnewsLinks?.map((item) => (
          <ArticleComponent item={{ ...item }} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default MoreFromNewsView;
