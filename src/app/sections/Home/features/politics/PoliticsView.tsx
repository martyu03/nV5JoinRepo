import React from "react";
import { politicsLinks } from "@/app/constants/politics-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const PoliticsView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"POLITICS"} />

      <div className="grid grid-cols-1">
        {politicsLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoliticsView;
