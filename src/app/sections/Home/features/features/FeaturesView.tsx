import React from "react";
import { featuresLinks } from "@/app/constants/features-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const FeaturesView = () => {
  return (
    <div className="grid grid-cols-2">
      {featuresLinks?.map((item) => (
        <div key={item.id} className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
          <a href={item.path} target="_blank" rel="noopener noreferrer">
            <button className="text-red-600 font-bold">
              WATCH NOW
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeaturesView;
