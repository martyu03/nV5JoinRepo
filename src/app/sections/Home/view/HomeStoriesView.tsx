import React from "react";
import { topstoriesLinks } from "@/app/constants/topstories-links";
import Home from "@/app/page";
import Link from "next/link";

const HomeStoriesView = () => {
  return (
    <div>
      <h1>Top Stories</h1>
      <div className="">
        {topstoriesLinks?.map((item: any, index: number) => (
          <HomeStoriesItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const HomeStoriesItems = ({ item }) => {
  return (
    <div className="p-3 border-2 border-t-slate-50">
      <Link href={item.path} target="_blank">
        <h3 className="font-semibold">{item?.title}</h3>
        <div className="flex items-center">
          <p>{item?.datePublishedOn}</p>
          <p>{item?.timePublished}</p>
        </div>
      </Link>
    </div>
  );
};

export default HomeStoriesView;
