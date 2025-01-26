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

const HomeListView = () => {
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-1  md:grid-cols-4 ">
        <div className="md:col-span-3">
          <HomeMainVideo />
        </div>
        <div className="md:col-span-1">
          <HomeStoriesView />
        </div>
      </div>

      {/* other components */}
      <div className="space-y-20">
        <div className="grid grid-cols-4">
          <div className="col-span-2">
            <RecentView />
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-2">
            <TrendingView />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <PoliticsView />
          </div>
          <div className="col-span-1">
            <PoliceView />
          </div>
        </div>
        {/* <div className="grid grid-cols-4">
          <div className="col-span-2">
           
          </div>
        </div> */}
        <div className="grid grid-cols-4">
          <div className="col-span-2">
            <ProducersView />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <SportsView />
          </div>
          <div className="col-span-1">
            <CelebrityView />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <WordOfTheLourdView />
          </div>
          <div className="col-span-1">
            <FeaturesView />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <ForeignView />
          </div>
          <div className="col-span-1">
            <MoneyView />
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-2">
            <MoreFromNewsView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeListView;
