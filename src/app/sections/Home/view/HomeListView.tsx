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

      {/* other components */}
      <div className="grid grid-cols-6 container">
        <div className="space-y-20 container col-span-4">
          <div>
            <RecentView />
          </div>
          <div>
            <TrendingView />
          </div>
          <div className="flex items-center gap-10">
            <PoliticsView />
            <PoliceView />
          </div>

          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <ProducersView />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <SportsView />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <CelebrityView />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <WordOfTheLourdView />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <FeaturesView />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <ForeignView />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <MoneyView />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <MoreFromNewsView />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <VerticalAds />
          <VerticalAds />
        </div>
      </div>
    </div>
  );
};

export default HomeListView;
