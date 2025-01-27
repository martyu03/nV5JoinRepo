import React from "react";
import { wordofthelourdLinks } from "@/app/constants/wordofthelourd-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const WordOfTheLourdView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"WORD OF THE LOURD"} />

      <div className="grid grid-cols-1">
        {wordofthelourdLinks?.map((item) => (
          <ArticleComponent item={{ ...item }} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default WordOfTheLourdView;
