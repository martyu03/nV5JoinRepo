import React from "react";
import { topstoriesLinks } from "@/app/constants/topstories-links";
import Home from "@/app/page";
import Link from "next/link";

const HomeStoriesView = () => {
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-red-500 text-3xl">TOP STORIES</h1>
      <div className="max-h-[715px] overflow-y-auto custom-scrollbar">
        {topstoriesLinks?.map((item: any, index: number) => (
          <HomeStoriesItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const HomeStoriesItems = ({ item }) => {
  return (
    <div className="p-3 border-2 border-t-slate-50 hover:text-red-600">
      <Link href={item.path} target="_blank">
        <h3 className="font-semibold">{item?.title}</h3>
        <div className="flex items-center gap-2 text-slate-400">
        <p>{`${item?.datePublishedOn} , ${item?.timePublished}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default HomeStoriesView;
