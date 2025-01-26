import React from "react";
import { recentLinks } from "@/app/constants/recent-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const RecentView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"Recent"} />
      <div className="grid grid-cols-2">
        {recentLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentView;
