import React from "react";
import { foreignLinks } from "@/app/constants/foreign-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const ForeignView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"FOREIGN"} />

      <div className="grid grid-cols-2">
        {foreignLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeignView;
