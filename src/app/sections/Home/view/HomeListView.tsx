import React from "react";
import HomeMainVideo from "./HomeMainVideo";
import HomeStoriesView from "./HomeStoriesView";

const HomeListView = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <HomeMainVideo />
        </div>
        <div className="col-span-1">
          {/* <HomeStoriesView /> */}
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeListView;
