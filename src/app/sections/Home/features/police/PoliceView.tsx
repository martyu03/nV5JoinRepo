import React from "react";
import { policeLinks } from "@/app/constants/police-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const PoliceView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"Police"} />

      <div className="grid grid-cols-2">
        {policeLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoliceView;
