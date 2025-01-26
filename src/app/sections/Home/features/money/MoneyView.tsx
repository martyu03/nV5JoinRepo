import React from "react";
import { moneyLinks } from "@/app/constants/money-links";
import ArticleComponent from "@/app/components/ArticleComponent";

const MoneyView = () => {
  return (
    <div className="grid grid-cols-2">
      {moneyLinks?.map((item) => (
        <div className="">
          <ArticleComponent item={{ ...item }} key={item?.id} />
        </div>
      ))}
    </div>
  );
};

export default MoneyView;
