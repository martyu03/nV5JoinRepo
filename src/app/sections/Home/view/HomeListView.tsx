import React from "react";
import HomeMainVideo from "./HomeMainVideo";
import HomeStoriesView from "./HomeStoriesView";
import RecentView from "../features/recent/RecentView";
import TrendingView from "../features/trending/TrendingView";
import CelebrityView from "../features/celebrity/CelebrityView";
import ForeignView from "../features/foreign/ForeignView";
import PoliticsView from "../features/politics/PoliticsView";
import SportsView from "../features/sports/SportsView";
import WordOfTheLourdView from "../features/wordofthelourd/WordOfTheLourdView";
import PoliceView from "../features/police/PoliceView";
import MoneyView from "../features/money/MoneyView";
import MoreFromNewsView from "../features/morefromnews/MoreFromNewsView";
import FeaturesView from "../features/features/FeaturesView";
import ProducersView from "../features/producers/ProducersView";
import VerticalAds from "@/app/components/Ads/VerticalAds";
import HorizontalAds from "@/app/components/Ads/HorizontalAds";
import FeatureHeader from "@/app/components/FeatureHeader";
import SocialView from "../features/social/SocialView";

const HomeListView = () => {
  return (
    <div>
      <div className=" grid w-full grid-cols-1  md:grid-cols-4 ">
        <div className="md:col-span-3">
          <HomeMainVideo />
        </div>
        <div className="md:col-span-1">
          <HomeStoriesView />
        </div>
      </div>
      <FeatureHeader styles={{
        height: "[65px]"
      }} bgcolor="#EEEEEE" title="FEATURES"/>

      {/* other components */}
      <div className="grid grid-cols-6 container gap-2">
        <div className="space-y-7 container col-span-4 py-2">
          {/* ads */}
          <div>
            <HorizontalAds />
          </div>
          <div>
            <RecentView />
          </div>
          <div>
            <TrendingView />
          </div>
          <div className={"grid grid-cols-2 gap-2"}>
            <PoliticsView />
            <PoliceView />
          </div>

          <div>
            <ProducersView />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <SportsView />
            <CelebrityView />
            <WordOfTheLourdView />
            <FeaturesView />
            <ForeignView />
            <MoneyView />
          </div>

          <div>
            <MoreFromNewsView />
          </div>
        </div>
        <div className="col-span-2 space-y-3 pt-2">
          <SocialView />
          <VerticalAds />
          <VerticalAds />
        </div>
      </div>
    </div>
  );
};

export default HomeListView;
