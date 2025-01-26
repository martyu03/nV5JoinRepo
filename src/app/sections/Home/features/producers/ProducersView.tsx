import React from "react";
import { producersLinks } from "@/app/constants/producers-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const ProducersView = () => {
  return (
    <div className="grid grid-cols-2">
      {producersLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default ProducersView;
