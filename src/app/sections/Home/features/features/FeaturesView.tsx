import React from "react";
import { featuresLinks } from "@/app/constants/features-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const FeaturesView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"FEATURES"} />

      <div className="grid grid-cols-1">
        {featuresLinks?.map((item) => (
          <ArticleComponent item={{ ...item }} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesView;
