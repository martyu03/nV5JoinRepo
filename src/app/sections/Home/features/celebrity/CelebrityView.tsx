import React from "react";
import { celebrityLinks } from "@/app/constants/celebrity-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const CelebrityView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"CELEBRITY"} />

      <div className="grid grid-cols-1">
        {celebrityLinks?.map((item) => (
          <ArticleComponent item={{ ...item, textLength: 90 }} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default CelebrityView;
