import React from "react";
// import { socialLinks } from "@/app/constants/social-links";
import ArticleComponent from "@/app/components/ArticleComponent";
import FeatureHeader from "@/app/components/FeatureHeader";

const SocialView = () => {
  return (
    <div className="space-y-3">
      <FeatureHeader bgcolor={"#808080"} title={"SOCIAL"} />

      {/* <div className="grid grid-cols-1">
        {socialLinks?.map((item) => (
          <ArticleComponent item={{ ...item, textLength: 70 }} key={item?.id} />
        ))}
      </div> */}
    </div>
  );
};

export default SocialView;
