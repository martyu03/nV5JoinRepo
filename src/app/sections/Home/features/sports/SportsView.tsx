import React from "react";
import { sportsLinks } from "@/app/constants/sports-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const SportsView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"SPORTS"} />

      <div className="grid grid-cols-1">
        {sportsLinks?.map((item) => (
          <ArticleComponent item={{ ...item, textLength: 70 }} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default SportsView;
