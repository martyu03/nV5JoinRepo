import React from "react";
import { producersLinks } from "@/app/constants/producers-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const ProducersView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader title={"PRODUCER'S PICK"} />

      <div className="grid grid-cols-2 gap-2">
        {producersLinks?.map((item) => (
          <ArticleComponent item={{ ...item, textLength: 89 }} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default ProducersView;
