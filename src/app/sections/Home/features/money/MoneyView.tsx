import React from "react";
import { moneyLinks } from "@/app/constants/money-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const MoneyView = () => {
  return (
    <div className="grid grid-cols-2">
      {moneyLinks?.map((item) => (
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

export default MoneyView;
