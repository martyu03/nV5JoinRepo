import React from "react";
import { sportsLinks } from "@/app/constants/sports-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const SportsView = () => {
  return (
    <div className="grid grid-cols-2">
      {sportsLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default SportsView;
