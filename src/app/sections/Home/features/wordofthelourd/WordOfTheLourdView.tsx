import React from "react";
import { wordofthelourdLinks } from "@/app/constants/wordofthelourd-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const WordOfTheLourdView = () => {
  return (
    <div className="grid grid-cols-2">
      {wordofthelourdLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default WordOfTheLourdView;
