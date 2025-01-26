import React from "react";
import { recentLinks } from "@/app/constants/recent-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const RecentView = () => {
  return (
    <div className="grid grid-cols-2">
      {recentLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default RecentView;
