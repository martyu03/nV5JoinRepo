import React from "react";
import HomeMainVideo from "./HomeMainVideo";
import HomeStoriesView from "./HomeStoriesView";

const HomeListView = () => {
  return (
    <div className="w-full">
      <div className="grid w-full  grid-cols-4 ">
        <div className="col-span-3">
          <HomeMainVideo />
        </div>
        <div className=" col-span-1">
          <HomeStoriesView />
        </div>
      </div>
    </div>
  );
};

export default HomeListView;
