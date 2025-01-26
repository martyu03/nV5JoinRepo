import React from "react";
import { producersLinks } from "@/app/constants/producers-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const ProducersView = () => {
  return (
    <div className="grid grid-cols-2">
      {producersLinks?.map((item) => (
        <div key={item.id} className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
          <a href={item.path} target="_blank" rel="noopener noreferrer">
            <button className="text-red-600 font-bold">
              WATCH NOW
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProducersView;
