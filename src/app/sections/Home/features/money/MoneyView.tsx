import React from "react";
import { moneyLinks } from "@/app/constants/money-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const MoneyView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"MONEY"} />

      <div className="grid grid-cols-2">
        {moneyLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoneyView;
