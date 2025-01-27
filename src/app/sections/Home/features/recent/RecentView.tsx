import React from "react";
import { recentLinks } from "@/app/constants/recent-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const RecentView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"RECENT"} />
      <div className="grid grid-cols-2 gap-3">
        {recentLinks?.map((item) => (
          <ArticleComponent item={{ ...item, textLength: 70 }} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentView;
