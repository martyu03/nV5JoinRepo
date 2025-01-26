import React from "react";
import HomeMainVideo from "./HomeMainVideo";
import HomeStoriesView from "./HomeStoriesView";

const HomeListView = () => {
  return (
    <div className="w-full bg-green-500">
      <div className="grid w-full bg-black p-5 grid-cols-5">
        <div className="col-span-4 bg-red-500">
          hello
          {/* <HomeMainVideo /> */}
        </div>
        <div className="bg-orengae-500 col-span-1">
          hellowww
          {/* <HomeStoriesView /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeListView;
