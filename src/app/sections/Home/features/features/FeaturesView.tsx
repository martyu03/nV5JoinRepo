import React from "react";
import { featuresLinks } from "@/app/constants/features-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const FeaturesView = () => {
  return (
    <div className="grid grid-cols-2">
      {featuresLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default FeaturesView;
