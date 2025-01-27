import React from "react";
import { policeLinks } from "@/app/constants/police-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const PoliceView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"POLICE"} />

      <div>
        {policeLinks?.map((item) => (
          <ArticleComponent
            item={{ ...item, textLength: 70, direction: "row" }}
            key={item?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PoliceView;
