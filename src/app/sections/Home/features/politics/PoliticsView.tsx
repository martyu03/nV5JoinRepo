import React from "react";
import { politicsLinks } from "@/app/constants/politics-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const PoliticsView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"POLITICS"} />

      <div className="space-y-3">
        {politicsLinks?.map((item) => (
          <ArticleComponent
            item={{ ...item, direction: "row" }}
            key={item?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PoliticsView;
