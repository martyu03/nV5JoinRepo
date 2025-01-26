import React from "react";
import { morefromnewsLinks } from "@/app/constants/morefromnews-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const MoreFromNewsView = () => {
  return (
    <div className="grid grid-cols-2">
      {morefromnewsLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default MoreFromNewsView;
