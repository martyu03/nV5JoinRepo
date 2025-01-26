import React from "react";
import { producersLinks } from "@/app/constants/producers-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const ProducersView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"Producer's Pick"} />

      <div className="grid grid-cols-2">
        {producersLinks?.map((item) => (
          <div className="">
            <ArticleComponent item={{ ...item }} key={item?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProducersView;
