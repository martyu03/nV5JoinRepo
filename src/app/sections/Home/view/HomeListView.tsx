import React from "react";
import HomeMainVideo from "./HomeMainVideo";
import HomeStoriesView from "./HomeStoriesView";
import RecentView from "../features/recent/RecentView";

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
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <RecentView />
        </div>
      </div>
    </div>
  );
};

export default HomeListView;
