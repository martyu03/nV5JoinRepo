import React from "react";
import { celebrityLinks } from "@/app/constants/celebrity-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const CelebrityView = () => {
  return (
    <div className="grid grid-cols-2">
      {celebrityLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default CelebrityView;
