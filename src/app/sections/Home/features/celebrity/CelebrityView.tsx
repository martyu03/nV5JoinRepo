import React from "react";
import { celebrityLinks } from "@/app/constants/celebrity-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const CelebrityView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"Celebrity"} />

      <div className="grid grid-cols-2">
        {celebrityLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebrityView;
