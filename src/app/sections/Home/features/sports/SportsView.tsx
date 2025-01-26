import React from "react";
import { sportsLinks } from "@/app/constants/sports-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const SportsView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"Sports"} />

      <div className="grid grid-cols-2">
        {sportsLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsView;
